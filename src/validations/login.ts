import { z } from "zod";
const LoginSchema = z.object({
  phone: z
    .string({ message: "please enter phone number" })
    .min(2, "please enter phone number be 11 charcter"),
  password: z
    .string({ message: "please enter your passowrd" })
    .min(2, "please enter your passowrd"),
});
export { LoginSchema };
