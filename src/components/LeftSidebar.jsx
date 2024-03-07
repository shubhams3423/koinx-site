import React from "react";
import Team from "./Team";
import AboutBitcoin from "./AboutBitcoin";
import TopTrendingBox from "./TopTrendingBox";
import Sentiments from "./Sentiments";
import Performance from "./Performance";
import SubNavbar from "./SubNavbar";
import PiaChart from "./PiaChart";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-y-5 overflow-hidden">
      <TopTrendingBox />
      <SubNavbar />
      <Performance />
      <Sentiments />
      <AboutBitcoin />
      <PiaChart />
      <Team />
    </div>
  );
};

export default LeftSidebar;
