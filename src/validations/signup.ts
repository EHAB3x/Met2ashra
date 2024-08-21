import { z } from "zod";
const SignupSchema = z.object({
  name: z
    .string({ message: "please enter name " })
    .min(2, "please enter name be 4 charcter"),
  phone: z
    .string({ message: "please enter phone number" })
    .min(2, "please enter phone number be 11 charcter"),
  password: z
    .string({ message: "please enter your passowrd" })
    .min(2, "please enter your passowrd"),
  password_confirmation: z
    .string({ message: "please enter your passowrd" })
    .min(2, "please enter your passowrd"),
});
export { SignupSchema };
