import connectToDb from "@/lib/connectToDb";
import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { loginUserValidationSchema } from "@/lib/validation/loginUserValidation";

// next auth options
export const authOptions = {
  // providers
  providers: [
    // credentials provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // connect to db
        await connectToDb();

        // validate data
        const dataValidation = loginUserValidationSchema(credentials);
        if (!dataValidation.success) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        // find user
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        // compare password
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordsMatch) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }

        // return user
        return {
          id: user._id.toString(),
          fullName: user.fullName,
          email: user.email,
        };
      },
    }),
  ],
  // pages
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
  // session
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // jwt callback
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.fullName = user.fullName;
      }
      return token;
    },
    // session callback
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.fullName = token.fullName;
      }
      return session;
    },
  },
};

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
