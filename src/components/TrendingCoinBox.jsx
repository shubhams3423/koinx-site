import React from "react";
import TrendingCoinHeader from "./TrendingCoinHeader";
import TrendingCoinGraph from "./TrendingCoinGraph";

const TrendingCoinBox = ({ coinInfo }) => {
  return (
    <div className="bg-white inline-block p-4  mr-4 rounded-lg md:h-[160px] h-auto md:w-[252px] w-[200px] border border-[#E3E3E3]">
      <div className="w-full h-full">
        <TrendingCoinHeader coinData={coinInfo} />
        <TrendingCoinGraph coinData={coinInfo} />
      </div>
    </div>
  );
};

export default TrendingCoinBox;
