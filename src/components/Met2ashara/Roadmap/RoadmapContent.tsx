import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import useGetRoadmaps from "@hooks/useGetRoadmaps";
import { RoadmapSchema } from "@validations/roadmap";
import useGetRoadmapContent from "@hooks/useGetRoadmapContent";
import { useState } from "react";
import { Button } from "@components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import RenderRoadmapContent from "@/src/tables/roadmapContentTable/RenderRoadmapContent";
import FAQ from "@components/ui/FAQ";

const RoadmapContent = () => {
    const { data: roadmapData, isLoading } = useGetRoadmaps();

  const form = useForm<z.infer<typeof RoadmapSchema>>({
    mode: "onBlur",
    resolver: zodResolver(RoadmapSchema),
  });
  
  const submitForm: SubmitHandler<z.infer<typeof RoadmapSchema>> = (data) => {
    setSelectedRoadmapId(data.roadmapid);
  };
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>("");

  const { data: roadmapContent } = useGetRoadmapContent(selectedRoadmapId);
  if (isLoading) {
    return <p>Loading roadmaps...</p>;
  }
  return (
    <>
      <div className="container mx-auto mt-4">
        <h2 className="font-bold text-[1.5rem]">FAQ</h2>
        <FAQ />
      </div>
      <Form {...form}>
        <form className="pt-8 p-6" onSubmit={form.handleSubmit(submitForm)}>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="roadmapid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-[1.5rem]">
                    Roadmap
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please Select Roadmap" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {roadmapData!.map((data) => (
                        <SelectItem key={data.id} value={String(data.id)}>
                          {data.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-3" variant="gradientOutline">
            Submit
          </Button>
        </form>
      </Form>
      {selectedRoadmapId && roadmapContent && (
        <RenderRoadmapContent data={roadmapContent.contents} />
      )}
    </>
  );
};

export default RoadmapContent;
