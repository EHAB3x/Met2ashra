import { z } from "zod";

const makeCalenderSchema = z.object({
  roadmap_id: z.string().nonempty({ message: "Roadmap is required" }),

  start_date: z.string().nonempty({ message: "Start date is required" }),

  study_days: z.enum(
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    { message: "You must select a study day" }
  ),
});

export { makeCalenderSchema };
