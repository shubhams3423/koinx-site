import React from "react";
import Team from "./Team";
import AboutBitcoin from "./AboutBitcoin";
import TopTrendingBox from "./TopTrendingBox";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <TopTrendingBox />
      <Team />
      <AboutBitcoin />
    </div>
  );
};

export default LeftSidebar;
