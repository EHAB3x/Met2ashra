import RoadmapSec from "@assets/svg/RoadmapSec.svg";
import Hero from "@components/common/Hero";
import RoadmapContent from "@components/Met2ashara/Roadmap/RoadmapContent";
import Calender from "@components/Met2ashara/Roadmap/CalenderForm";
import { useState } from "react";
import { Button } from "@components/ui/button";
import useGetSchedule from "@hooks/useGetSchedule";
import CalenderContent from "@components/Met2ashara/Roadmap/CalenderContent";

const renderContent = (state: number, data?: Record<string, any[]>) => {
  switch (state) {
    case 0:
      return <RoadmapContent />;
    case 1:
      return <Calender />;
    case 2:
      return data ? <CalenderContent data={data} /> : <p>No data available</p>;
    default:
      return null; 
  }
};

const RoadMap = () => {
  const [shownState, setShownState] = useState(2);
  const { data, isLoading } = useGetSchedule();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Hero
        title={"Roadmap"}
        img={RoadmapSec}
        text={
          "roadmap for learning programming basics starts with fundamental concepts like variables and loops, paving the way for a deeper understanding of algorithms and object-oriented programming"
        }
      />
      <div>
        {renderContent(shownState, data)}
      </div>
      <Button 
        variant="gradientOutline" 
        onClick={() => setShownState(shownState === 0 ? 1 : 0)}
        className="block mx-auto mb-8"
      >
        Go To {shownState === 0 ? "Calender" : "Roadmap"}
      </Button>
    </>
  );
};

export default RoadMap;
