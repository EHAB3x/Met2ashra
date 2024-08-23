import React from "react";
import ProgressCalender from "@components/ui/ProgressCalender";

interface CalenderContentProps {
  data: Record<string, any[]>;
}

const CalenderContent: React.FC<CalenderContentProps> = ({ data }) => {
  const resultArray = Object.values(data).flat();
  
  return (
    <ProgressCalender />
  );
};

export default CalenderContent;
