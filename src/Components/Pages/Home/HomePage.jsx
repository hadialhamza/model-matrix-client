import React from "react";
import Slider from "../../Slider/Slider";
import RecentModels from "../../Sections/RecentModels";
import AboutAiModels from "../../Sections/AboutAiModels";
import GetStarted from "../../Sections/GetStarted";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Slider />
      <RecentModels />
      <AboutAiModels />
      <GetStarted />
    </div>
  );
};

export default HomePage;
