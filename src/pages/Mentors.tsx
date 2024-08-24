import React from "react";
import RoadmapLoginImg from "@assets/images/RoadmapLogin.png"

const Mentors = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center mt-[88px]">
      <h1 className="text-center font-semibold text-[32px] uppercase">
        Coming Soon...
      </h1>

      <div className="flex justify-center">
        <img
          src={RoadmapLoginImg}
          alt="RoadmapLogin"
          className="max-h-[400px]"
        />
      </div>
    </div>
  );
};

export default Mentors;
