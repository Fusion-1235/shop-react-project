import { NextResponse } from "next/server";
import connectToDb from "@/lib/connectToDb";
import User from "@/models/User";
import { registerUserValidationSchema } from "@/lib/validation/registerUserValidation";
import bcrypt from "bcryptjs";

const createUser = async (req) => {
  const data = await req.json();
  try {
    // validate data
    const dataValidation = registerUserValidationSchema(data);
    if (!dataValidation.success) {
      return NextResponse.json(
        { message: dataValidation.error.errors.map((err) => err.message) },
        { status: 400 }
      );
    }

    await connectToDb();

    // check if user already exists
    const user = await User.findOne({ email: data.email });
    if (user) {
      return NextResponse.json(
        { message: ["این ایمیل قبلا ثبت نام کرده است"] },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(dataValidation.data.password, 10);

    // create user
    await User.create({
      fullName: dataValidation.data.fullName,
      email: dataValidation.data.email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "ثبت نام با موفقیت انجام شد" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: [error.message] }, { status: 500 });
  }
};

export { createUser as POST };
