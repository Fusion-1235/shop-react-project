import { z } from "zod";

export const loginUserValidation = z.object({
  email: z.string().email({ message: "ایمیل معتبر نیست" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" }),
});

export const loginUserValidationSchema = loginUserValidation.safeParse;
