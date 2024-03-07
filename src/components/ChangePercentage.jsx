import React from "react";
import RedPolygon from "../assets/RedPolygon.svg";
import GreenPolygon from "../assets/GreenPolygon.svg";

const ChangePercentage = ({ coinChangedValue, graphCoin }) => {
  return (
    <div
      className={`${
        graphCoin
          ? "min-w-[64px] max-w-[84px] h-[25px] rounded-[2px] px-[3px] py-[4px]"
          : "max-w-[98px] min-w-[84px] rounded-md  px-[0.8rem] py-[0.3rem]"
      }  flex items-center justify-between gap-x-2 ${
        coinChangedValue < 0 ? "bg-[#EE68551A]" : "bg-[#EBF9F4]"
      }`}
    >
      <img src={coinChangedValue < 0 ? RedPolygon : GreenPolygon} alt="" />
      <p
        className={`${graphCoin ? "text-[12px]" : "text-base font-medium"}  ${
          coinChangedValue < 0 ? "text-[#F7324C]" : "text-[#14B079]"
        }`}
      >
        {coinChangedValue?.toString().slice(0, 5)}%
      </p>
    </div>
  );
};

export default ChangePercentage;
