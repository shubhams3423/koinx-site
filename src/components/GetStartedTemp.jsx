import React from "react";
import frame from "../assets/Frame.svg";
import rightArrow from "../assets/RightArrow.svg";
const GetStartedTemp = () => {
  return (
    <div className="btncolor w-full  md:py-[35px] py-[28px] md:px-[22px] px-[9px] rounded-2xl flex flex-col gap-y-[19px]">
      <div className="flex flex-col gap-y-[14px] md:order-1 order-2">
        <h2 className="md:text-2xl text-[22px] font-bold leading-10 text-white md:w-[305px] m-auto text-center">
          Get Started with KoinX for FREE
        </h2>
        <p className="text-sm font-medium leading-6 text-center text-[#F2F2F2] ">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
      <div className="md:order-2 order-1 h-[166px] w-[178px] m-auto">
        <img src={frame} className="h-full w-full" alt="" />
      </div>
      <div className="md:order-3 order-3">
        <a href="https://www.koinx.com/" target="_blank" rel="noreferrer">
          {" "}
          <button className="bg-white py-2 px-6 rounded-lg font-semibold flex items-center gap-x-[6px] m-auto">
            Get Started for FREE
            <img src={rightArrow} className="w-5 h-5" alt="" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default GetStartedTemp;
