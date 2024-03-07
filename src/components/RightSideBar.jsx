import React from "react";
import GetStartedTemp from "./GetStartedTemp";
import TrendingCoins from "./TrendingCoins";

const RightSideBar = () => {
  return (
    <div className="w-full sm:ml-auto flex flex-col gap-y-5">
      <GetStartedTemp />
      <TrendingCoins />
    </div>
  );
};

export default RightSideBar;
