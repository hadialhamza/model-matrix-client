import React from "react";
import Slider from "../../slider/Slider";
import RecentModels from "../../sections/RecentModels";
import AboutAiModels from "../../sections/AboutAiModels";
import GetStarted from "../../sections/GetStarted";

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
