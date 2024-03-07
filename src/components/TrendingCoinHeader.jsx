import React from "react";
import ChangePercentageBox from "./ChangePercentageBox";

const TrendingCoinHeader = ({ coinData }) => {
  return (
    <div className="flex flex-col items-start  ">
      <div className="flex gap-x-[3px] md:h-[38px] h-[30px]">
        <div className="md:w-[26px] w-5  md:h-[26px] h-5 mr-[3px]">
          <img src={coinData?.item?.small} className="h-full w-full " alt="" />
        </div>
        <p className="text-[#202020] md:max-w-[105px] max-w-[78px] text-base text-[12px] truncate">
          {coinData?.item?.id}
        </p>
        <ChangePercentageBox trendingData={coinData} graphCoin />
      </div>
      <p className="font-medium md:text-2xl text-[12px]">
        {coinData?.item?.data?.price.toString().slice(0, 8)}
      </p>
    </div>
  );
};

export default TrendingCoinHeader;
