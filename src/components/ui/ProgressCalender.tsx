"use client";

import * as React from "react";
import { Calendar } from "@components/ui/calendar"; // Adjust import according to your actual path
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { IDayContent } from "@/src/interfaces";

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

const ProgressCalender: React.FC<ProgressCalenderProps> = ({ dates  }) => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>(dates);
  
  const datesArray = dates.map((date) => {
    return new Date(date.lesson_date);
  });

  const handleClick = (clickedDate: Date) => {
    const cDate = new Date(clickedDate);

    const year = cDate.getFullYear();
    const month = String(cDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(cDate.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    
    const dayContent = selectedDates.filter((date)=> date.lesson_date === formattedDate )[0];
    
    if (dayContent) {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <p>{dayContent.lesson_date}</p>,
        html: (
          <div className="flex flex-col gap-3 text-start">
            <h3 className="font-semibold">Topic Name: <span className="text-primary uppercase font-bold">{dayContent.content.title}</span></h3>
            <p>{dayContent.content.description}</p>
            <a 
              href={dayContent.content.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline text-primary font-medium"
            >
              Go to lesson
            </a>
          </div>
        ),
      });
  }
  }
  return (
    <div className="relative">
      <Calendar
        mode="multiple"
        selected={datesArray}
        onSelect={() => {}}
        onDayClick={(date) => handleClick(date)}
        className="container mx-auto rounded-md border border-2 border-primary px-6 my-6 w-fit"
        dayClassName={(date) =>
          selectedDates.some((d) => d.toDateString() === date.toDateString())
            ? "bg-primary"
            : ""
        }
      />
    </div>
  );
};

export default ProgressCalender;
