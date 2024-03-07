import React, { useEffect, useState } from "react";
import TopTrendingInfo from "./TopTrendingInfo";
import TradingViewWidget from "./TradingViewWidget";
import { toast } from "react-toastify";

const TopTrendingBox = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const getUrlParam = () => {
    return window.location.pathname.slice(1);
  };
  const [topGraphInfo, setTopGraphInfo] = useState({});
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${
        getUrlParam() || "bitcoin"
      }&vs_currencies=inr,usd&include_24hr_change=true&x_cg_api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopGraphInfo(data);
      })
      .catch((error) => toast.error("Error accessing simple/price"));
  }, []);

  return (
    <div>
      <div className="bg-white rounded-md  md:h-[711px]  h-[450px] md:p-5 p-3 flex flex-col gap-y-10">
        <TopTrendingInfo
          topGraphInfo={topGraphInfo}
          getUrlParam={getUrlParam}
        />
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default TopTrendingBox;
