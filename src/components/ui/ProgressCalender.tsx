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

const ProgressCalender: React.FC<ProgressCalenderProps> = ({ dates, data }) => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>(dates);
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>(undefined);

  const handleDateSelect = (dates: Date[] | undefined) => {
    if (dates) {
      setSelectedDates(dates);
    }
  };

  const handleDateHover = (date: Date | undefined) => {
    setHoveredDate(date);
  };

  const getLessonsForDate = (date: Date) => {
    return data.filter(item => new Date(item.lesson_date).toDateString() === date.toDateString());
  };

  return (
    <div className="relative">
      <Calendar
        mode="multiple"
        selected={selectedDates}
        onSelect={handleDateSelect}
        onHover={handleDateHover}
        className="container mx-auto rounded-md border my-6 w-[90%]"
        dayClassName={(date) =>
          selectedDates.some(d => d.toDateString() === date.toDateString()) ? "bg-primary" : ""
        }
      />
      {hoveredDate && (
        <div className="absolute top-0 left-0 p-4 bg-white border rounded shadow-lg">
          {getLessonsForDate(hoveredDate).length > 0 ? (
            <>
              <h4 className="font-bold">{getLessonsForDate(hoveredDate)[0]?.content.title}</h4>
              <p>{getLessonsForDate(hoveredDate)[0]?.content.description}</p>
              <a href={getLessonsForDate(hoveredDate)[0]?.content.link} target="_blank" rel="noopener noreferrer">Learn more</a>
            </>
          ) : (
            <p>No lessons for this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressCalender;
