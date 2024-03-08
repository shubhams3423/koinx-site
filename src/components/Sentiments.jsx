import React from "react";
import icon from "../assets/SVG.png";
import noteImg from "../assets/Vector.png";
import tredingArrow from "../assets/TredingArrow.png";
const Sentiments = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-6 gap-y-5 ">
      <h3 className="font-bold text-2xl text-[#0F1629]">Sentiment</h3>
      <div className=" flex flex-col gap-y-3">
        <div className="flex items-center gap-x-[6px]">
          <h4 className="font-bold text-[18px] text-[#44475B]">Key Events</h4>
          <div className="h-4 w-4">
            <img src={icon} alt="" className="h-full w-full" />
          </div>
        </div>
        <div className="overflow-auto w-full whitespace-nowrap ">
          <div className="mr-6 rounded-xl inline-block md:h-[204px] md:w-[456px] bg-[#E8F4FD] px-[18px] pt-[18px] pb-[38px] border border-[#E8F4FD] justify-beween">
            <div className="grid md:gap-4 gap-3 md:grid-cols-[44px_1fr] grid-cols-[34px_1fr] ">
              <div className=" md:h-[44px] md:w-[44px] h-[30px] w-[30px]  flex items-center justify-center rounded-full bg-[#0082FF]">
                <img
                  src={noteImg}
                  alt=""
                  className="md:w-[22px] md:h-[18px] w-[15px] h-[12px]"
                />
              </div>
              <div>
                <p className="font-medium  inline-block text-[14px] text-[#191C1F] w-full whitespace-pre-wrap ">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </p>
                <p className="font-normal text-[14px] text-[#3E5765]   w-full whitespace-pre-wrap">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
          </div>
          <div className="mr-6 rounded-xl inline-block md:h-[204px] md:w-[456px] bg-[#E8F4FD] px-[18px] pt-[18px] pb-[38px] border border-[#E8F4FD] justify-beween">
            <div className="grid md:gap-4 gap-3 md:grid-cols-[44px_1fr] grid-cols-[34px_1fr] ">
              <div className=" md:h-[44px] md:w-[44px] h-[30px] w-[30px] flex items-center justify-center rounded-full bg-[#0082FF]">
                <img
                  src={tredingArrow}
                  alt=""
                  className="md:w-[22px] md:h-[18px] w-[15px] h-[12px]"
                />
              </div>
              <div>
                <p className="font-medium  inline-block text-[14px] text-[#191C1F] w-full whitespace-pre-wrap ">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </p>
                <p className="font-normal text-[14px] text-[#3E5765]   w-full whitespace-pre-wrap">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-y-3">
        <div className="flex items-center gap-x-[6px]">
          <h4 className="font-bold text-[18px] text-[#44475B]">
            Analyst Estimates
          </h4>
          <div className="h-4 w-4">
            <img src={icon} alt="" className="h-full w-full" />
          </div>
        </div>
        <div className="flex md:gap-x-[40px] gap-x-[14px]">
          <div className="md:w-[116px]   md:h-[120px] w-full h-[56px]  flex items-center justify-center bg-[#EBF9F4] rounded-full md:py-[32px] md:px-7">
            <div className="flex items-center justify-center">
              <p className="font-medium md:text-[36px] text-[22px] text-[#0FBA83]">
                76
              </p>
              <p className="font-medium text-base text-[#0FBA83]">%</p>
            </div>
          </div>
          <div className="grid md:grid-cols-[54px_1fr] grid-cols-[40px_1fr] grid-rows-[38px_38px_38px] md:w-[553px]">
            <div>
              <p className=" text-[#7C7E8C]">Buy</p>
            </div>
            <div>
              <div className="flex gap-x-2 items-center">
                <p className="md:w-[350px] w-[139px]  h-2 bg-[#00B386] rounded-sm"></p>
                <p className="font-medium text-[14px] text-[#7C7E8C]">76%</p>
              </div>
            </div>
            <div>
              <p className=" text-[#7C7E8C]">Hold</p>
            </div>
            <div>
              <div className="flex gap-x-2 items-center">
                <p className=" w-[33px]    h-2 bg-[#C7C8CE] rounded-sm"></p>
                <p className="font-medium text-[14px] text-[#7C7E8C]">8%</p>
              </div>
            </div>
            <div>
              <p className=" text-[#7C7E8C]">Sell</p>
            </div>
            <div>
              <div className="flex gap-x-2 items-center">
                <p className="md:w-[67px] w-[41px] h-2 bg-[#F7324C] rounded-sm"></p>
                <p className="font-medium text-[14px] text-[#7C7E8C]">16%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sentiments;
