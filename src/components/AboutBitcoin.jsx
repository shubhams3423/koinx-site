import React from "react";

const AboutBitcoin = () => {
  return (
    <div className="rounded-lg md:p-6 px-[10px] py-4 flex flex-col gap-y-5 bg-white">
      <h2 className="text-2xl font-semibold">About Bitcoin</h2>
      <div className="flex flex-col gap-y-[10px]">
        <h3 className="font-bold text-[18px] text-[#0B1426]">
          What is Bitcoin?
        </h3>
        <p className="md:font-medium font-normal  text-base md:text-[#3E424A] text-[#0F1629]">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-y-[10px]">
        <h3 className="font-bold text-[18px] text-[#0B1426]">
          Lorem ipsum dolor sit amet
        </h3>
        <p className="md:font-medium font-normal text-base md:text-[#3E424A] text-[#0F1629]">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
      </div>
      <p className="md:font-medium font-normal  text-base md:text-[#3E424A] text-[#0F1629]">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="md:font-medium font-normal  text-base md:text-[#3E424A] text-[#0F1629]">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <div className="border-b"></div>
      <h4 className="md:text-[#0F1629] text-[#0B1426] font-bold text-lg">
        Already Holding Bitcoin?
      </h4>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutBitcoin;
