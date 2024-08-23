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
      <div className="bg-[url('src/assets/svg/companybg.svg')] bg-no-repeat bg-cover h-[700px] flex items-center justify-center">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 h-full">
          <div className="sm:flex-1 flex-none text-center sm:text-left flex-col">
            <h2 className="font-semibold text-[28px] sm:text-[32px] text-black mb-5">
              Roadmap
            </h2>
            <p className="font-semibold text-[16px] sm:text-[20px] text-[#00000099] max-w-md">
              The roadmap for learning programming basics starts with
              fundamental concepts like variables and loops, paving the way for
              a deeper understanding of algorithms and object-oriented
              programming
            </p>
          </div>
          <div className="sm:flex-1 flex-none">
            <img
              src={RoadmapSec}
              alt="companysection"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
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
                  <FormLabel className="font-bold text-[1.5rem]">Roadmap</FormLabel>
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

          <Button type="submit" className="mt-3" variant="gradientOutline">Submit</Button>
        </form>
      </Form>
      {selectedRoadmapId && roadmapContent && (
        <RenderRoadmapContent data={roadmapContent.contents} />
      )}
    </>
  );
};

export default RoadMap;
