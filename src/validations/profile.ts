import { z } from "zod";

const ProfileSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, {
      message: "Password must contain at least one special character",
    }),
  password_confirmation: z
    .string()
    .min(8, {
      message: "Password confirmation must be at least 8 characters long",
    })
    .max(32, {
      message: "Password confirmation must be at most 32 characters long",
    }),
  image: z
    .string()
    .min(4, { message: "Image link must be at least 4 characters long" }),
});

export { ProfileSchema };
