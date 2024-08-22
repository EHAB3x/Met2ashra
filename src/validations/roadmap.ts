import { z } from "zod";

export const RoadmapSchema = z.object({
  roadmapid: z.string().nonempty("Please select a roadmap"),
});
