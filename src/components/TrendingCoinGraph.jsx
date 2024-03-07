import React from "react";

const TrendingCoinGraph = ({ coinData }) => {
  return (
    <div className="w-[85px] h-[36px]">
      <img src={coinData?.item?.data?.sparkline} className="m-auto" alt="" />
    </div>
  );
};

export default TrendingCoinGraph;
