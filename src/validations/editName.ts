import { z } from "zod";

const EditNameSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long" }),
});

export { EditNameSchema };
