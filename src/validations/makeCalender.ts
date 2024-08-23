import { z } from "zod";

const makeCalenderSchema = z.object({
  roadmap_id: z.string().nonempty({ message: "Roadmap is required" }),

  start_date: z.string().nonempty({ message: "Start date is required" }),

  study_days: z
    .array(
      z.enum([
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ])
    )
    .min(1, { message: "You must select at least one study day" }),
});

export { makeCalenderSchema };
