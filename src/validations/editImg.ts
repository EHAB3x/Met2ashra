import { z } from "zod";

const EditImgSchema = z.object({
  image: z.string().min(1, "Please upload a image file."),
});

export { EditImgSchema };
