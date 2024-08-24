"use client";

import * as React from "react";
import { Calendar } from "@components/ui/calendar"; // Adjust import according to your actual path

interface ProgressCalenderProps {
  dates: Date[];
  data: {
    lesson_date: string;
    content: {
      title: string;
      description: string;
      link: string;
    };
  }[];
}

const ProgressCalender: React.FC<ProgressCalenderProps> = ({ dates }) => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>(dates);


  const datesArray = dates.map(date => {
    // @ts-ignore
    return new Date(date.lesson_date)
  })
  
  const handleHover = (date)=>{
    console.log(date);
    
  }
  
  
  
  
  return (
    <div className="relative">
      <Calendar
        mode="multiple"
        selected={datesArray}
        onSelect={()=>{}}
        onDayClick={(date)=> handleHover(date)}
        
        className="container mx-auto rounded-md border border-2 border-primary px-6 my-6 w-fit"
        dayClassName={(date) =>
          selectedDates.some(d => d.toDateString() === date.toDateString()) ? "bg-primary" : ""
        }
      />
    </div>
  );
};

export default ProgressCalender;
