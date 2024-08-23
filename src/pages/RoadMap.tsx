import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/button";
import { z } from "zod";
import RoadmapSec from "@assets/svg/RoadmapSec.svg";

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
import useGetRoadmaps from "@hooks/useGetRoadmaps";
import { RoadmapSchema } from "@validations/roadmap";
import useGetRoadmapContent from "@hooks/useGetRoadmapContent";
import { useState } from "react";
import RenderRoadmapContent from "@/src/tables/roadmapContentTable/RenderRoadmapContent";
import FAQ from "@components/ui/FAQ";
import Hero from "@components/common/Hero";

const RoadMap = () => {
  const { data: roadmapData, isLoading } = useGetRoadmaps();

  const form = useForm<z.infer<typeof RoadmapSchema>>({
    mode: "onBlur",
    resolver: zodResolver(RoadmapSchema),
  });

  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>("");

  const { data: roadmapContent } = useGetRoadmapContent(selectedRoadmapId);
  if (isLoading) {
    return <p>Loading roadmaps...</p>;
  }

  console.log(roadmapContent);

  const submitForm: SubmitHandler<z.infer<typeof RoadmapSchema>> = (data) => {
    setSelectedRoadmapId(data.roadmapid);
  };

  return (
    <>
      <Hero
        title={"Roadmap"}
        img={RoadmapSec}
        text={
          "RoadmapThe roadmap for learning programming basics starts with fundamental concepts like variables and loops, paving the way for a deeper understanding of algorithms and object-oriented programming"
        }
      />
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

export default RoadMap;
