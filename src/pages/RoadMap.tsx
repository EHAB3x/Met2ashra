import RoadmapSec from "@assets/svg/RoadmapSec.svg";
import Hero from "@components/common/Hero";
import RoadmapContent from "../components/Met2ashara/Roadmap/RoadmapContent";
import Calender from "../components/Met2ashara/Roadmap/Calender";
import { useState } from "react";
import { Button } from "../components/ui/button";

const RoadMap = () => {
  const [shownState, setShownState] = useState(true);
  return (
    <>
      <Hero
        title={"Roadmap"}
        img={RoadmapSec}
        text={
          "RoadmapThe roadmap for learning programming basics starts with fundamental concepts like variables and loops, paving the way for a deeper understanding of algorithms and object-oriented programming"
        }
      />

      {shownState ? <RoadmapContent /> : <Calender />}

      <Button 
        variant="gradientOutline" 
        onClick={()=> setShownState(!shownState)}
        className="block mx-auto mb-8"
      >
        Go To {shownState ? "Calender" : "Roadmap"}
      </Button>
    </>
  );
};

export default RoadMap;
