import { z } from "zod";

const EditPasswordSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });

export { EditPasswordSchema };
