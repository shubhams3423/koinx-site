import React from "react";
import piaChart from "../assets/pieChart.png";
const PiaChart = () => {
  return (
    <div className="rounded-[8px] p-[24px] pb-8 flex flex-col gap-y-[18px] bg-white">
      <h2 className="font-bold text-[24px] text-[#0F1629]">Tokenomics</h2>
      <div className="flex flex-col gap-y-5">
        <h3 className="font-semibold text-[20px] text-[#1D1D1D]">
          Initial Distribution
        </h3>
        <div>
          <div className="flex items-center gap-x-6">
            <img src={piaChart} className="md:w-[179px] md:h-[179px] " alt="" />
            <div className="md:w-[216px]">
              <div className="flex items-center gap-x-2">
                <p className="w-3 h-3 rounded-full bg-[#0082FF]"></p>
                <p className="text-[#202020]">Crowdsale investors: 80%</p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="w-3 h-3 rounded-full bg-[#FAA002]"></p>
                <p className="text-[#202020]"> Foundation: 20%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium text-[16px] text-[#3E424A]">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PiaChart;
