import React from "react";
import icon from "../assets/SVG.png";
import colorSlider from "../assets/colorSlider.png";
import upArrow from "../assets/upArrow.png";
const Performance = () => {
  return (
    <div className="p-6 pb-12 rounded-lg flex flex-col items-start gap-y-6 bg-white">
      <h2 className="font-bold text-2xl text-[#0F1629]">Performance</h2>

      <div className="flex flex-col gap-y-5">
        <div className="flex">
          <div className="md:w-[116px] w-[94px] flex flex-col gap-[10px]">
            <p className="text-[13px] text-[#44475B] ">Today’s Low</p>
            <p className="text-[13px] font-medium text-[#44475B]">46,930.22</p>
          </div>
          <div className="md:h-[44px] flex items-center relative">
            <img src={colorSlider} alt="" />
            <div className="md:w-[76px] md:h-5 absolute  right-[80px] top-[27px]  ">
              <img src={upArrow} className="mb-[6px] m-auto " alt="" />
              <p className="text-[14px] text-[#44475B]">$48,637.83</p>
            </div>
          </div>
          <div className="md:w-[116px] w-[94px] flex flex-col items-end gap-[10px]">
            <p className="text-[13px] text-[#44475B] md:text-center text-end">
              Today’s High
            </p>
            <p className="text-[13px] font-medium text-[#44475B]">49,343.83</p>
          </div>
        </div>
        <div className="flex">
          <div className="md:w-[116px] flex flex-col gap-[10px]">
            <p className="text-[13px] text-[#44475B]">52W Low</p>
            <p className="text-[13px]  font-medium text-[#44475B]">16,930.22</p>
          </div>
          <div className="md:h-[44px] flex items-center">
            <img src={colorSlider} alt="" />
          </div>
          <div className="md:w-[116px] flex flex-col items-end gap-[10px]">
            <p className="text-[13px] text-[#44475B] md:text-center text-end">
              52W High
            </p>
            <p className="text-[13px]  font-medium text-[#44475B]">49,743.83</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 w-full">
        <div className="flex items-center gap-x-[6px]">
          <h4 className="font-bold text-[18px] text-[#44475B]">Fundamentals</h4>
          <div className="h-4 w-4">
            <img src={icon} alt="" className="h-full w-full" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between">
          <div className="md:w-[383px]">
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                Bitcoin Price
              </p>
              <p className="text-[14px] font-medium text-[#111827]">
                $16,815.46
              </p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                24h Low / 24h High
              </p>
              <p className="text-[14px] font-medium text-[#111827]">
                $16,382.07 / $16,874.12
              </p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                7d Low / 7d High
              </p>
              <p className="text-[14px] font-medium text-[#111827]">
                $16,382.07 / $16,874.12
              </p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                Trading Volume
              </p>
              <p className="text-[14px] font-medium text-[#111827]">
                $23,249,202,782
              </p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                Market Cap Rank
              </p>
              <p className="text-[14px] font-medium text-[#111827]">#1</p>
            </div>
          </div>
          <div className="md:w-[389px]">
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                Market Cap
              </p>
              <p className="text-[14px] font-medium text-[#111827]">
                $323,507,290,047
              </p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                Market Cap Dominance
              </p>
              <p className="text-[14px] font-medium text-[#111827]">38.343%</p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                Volume / Market Cap
              </p>
              <p className="text-[14px] font-medium text-[#111827]">0.0718</p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                All-Time High
              </p>
              <p className="text-[14px] font-medium  ">
                <p className="font-medium text-[14px] text-[#111827]">
                  $69,044.77 <span className="text-[#F7324C]">-75.6%</span>
                </p>
                <p className="text-[11px] text-[#111827]">
                  Nov 10, 2021 (about 1 year)
                </p>
              </p>
            </div>
            <div className="md:h-[54px] flex items-center justify-between py-3 pr-3 border-b border-[#D3E0E6]">
              <p className="text-[14px] font-medium text-[#768396]">
                All-Time Low
              </p>
              <p className="text-[14px] font-medium  ">
                <p className="font-medium text-[14px] text-[#111827]">
                  $67.81 <span className="text-[#0FBA83]">24729.1%</span>
                </p>
                <p className="text-[11px] text-[#111827]">
                  Jul 06, 2013 (over 9 years)
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
