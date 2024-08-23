import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import useAddSchedule from "@hooks/useAddSchedule";
import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";
import { useNavigate } from "react-router-dom";
import useGetRoadmaps from "@hooks/useGetRoadmaps";
import { useState } from "react";
import { makeCalenderSchema } from "@validations/makeCalender";

const Calender = () => {
  const { data: roadmapData, isLoading } = useGetRoadmaps();
  const { mutate } = useAddSchedule();
  const [selectedDays, setSelectedDays] = useState<string[]>([]); // Changed to an array
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof makeCalenderSchema>>({
    mode: "onBlur",
    resolver: zodResolver(makeCalenderSchema),
  });

  if (isLoading) {
    return <p>Loading roadmaps...</p>;
  }

  const toggleDay = (day: string) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day) // Remove the day if it's already selected
        : [...prevDays, day] // Add the day if it's not selected
    );
  };

  const submitForm: SubmitHandler<z.infer<typeof makeCalenderSchema>> = (
    data
  ) => {
    const updatedData = { ...data, study_days: selectedDays };
    console.log(updatedData);
    mutate(updatedData, {
      onSuccess(data) {
        console.log(data);
        // Handle success (e.g., show success message)
      },
    });
  };

  console.log(selectedDays);
  
  return (
    <div className="page__container">
      <Form {...form}>
        <form className="pt-8 p-6" onSubmit={form.handleSubmit(submitForm)}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <FormField
              control={form.control}
              name="roadmap_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roadmap</FormLabel>
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
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please choose your start date"
                      {...field}
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1 mb-4">
            <FormField
              control={form.control}
              name="study_days"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose Your Study Days</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ].map((day) => (
                        <button
                          key={day}
                          type="button"
                          className={`p-2 border rounded ${
                            selectedDays.includes(day) ? "bg-blue-200" : ""
                          }`}
                          onClick={() => {
                            toggleDay(day);
                            field.onChange(selectedDays); // Update form field value
                          }}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="secondary" type="submit">
              Make Calender
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Calender;
