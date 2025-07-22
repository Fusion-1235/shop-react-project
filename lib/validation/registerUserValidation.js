import { z } from "zod";

export const registerUserValidation = z.object({
  fullName: z.string().min(3, { message: "نام باید حداقل 3 کاراکتر باشد" }),
  email: z.string().email({ message: "ایمیل معتبر نیست" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" }),
});

export const registerUserValidationSchema = registerUserValidation.safeParse;
