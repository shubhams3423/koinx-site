import React from "react";
import CoinGraphRenderer from "./CoinGraphRenderer";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-5 md:p-0 py-[14px] ps-[14px]">
      <div className="flex flex-col gap-y-5">
        <h3 className="font-semibold text-2xl">You May Also Like</h3>
        <CoinGraphRenderer />
      </div>
      <div className="flex flex-col gap-y-5">
        <h3 className="font-semibold text-2xl">Trending Coins</h3>
        <CoinGraphRenderer />
      </div>
    </div>
  );
};

export default Footer;
