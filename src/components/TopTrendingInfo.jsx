import React, { useEffect, useState } from "react";
import ChangePercentageBox from "./ChangePercentageBox";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const TopTrendingInfo = ({ getUrlParam }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [urlParam, SetUrlParam] = useState(getUrlParam() || "bitcoin");
  const [getLogo, setLogo] = useState([]);
  const [isLoading, setIsLaoding] = useState(true);
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${urlParam}?x_cg_api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLaoding(true);
        setLogo(data?.image?.small);
        setIsLaoding(false);
        setCoinData(data);
      })
      .catch((error) => toast.error("Error accessing /coins/id"));
  }, []);
  return (
    <div className="flex gap-y-5 flex-col">
      <div className="flex justify-start items-center">
        {isLoading ? (
          <Skeleton height={"30px"} width={"250px"} />
        ) : (
          <>
            <div className="w-[162px] flex items-center gap-x-2">
              <div className="w-9 h-9">
                <img src={getLogo} alt="" className="h-full w-full" />
              </div>
              <p className="text-[#0B1426]  font-semibold">
                {window.location.pathname.slice(1) || "Bitcoin"}
              </p>
              <span className="text-[10px] font-semibold text-[#5D667B]">
                {coinData?.symbol}
              </span>
            </div>
            <div className="rounded-lg bg-[#808A9D] min-w-[80px] max-w-fit border-[#808A9D] px-[10px] py-[7px] text-[16px] flex">
              <span className="text-white">
                Rank #{coinData?.market_cap_rank}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-x-[32px] items-start">
        {isLoading ? (
          <Skeleton width={"200px"} height={"30px"} />
        ) : (
          <div className="flex items-center gap-x-[32px] ">
            <h2 className="font-semibold text-[28px] text-[#0B1426]">
              ${coinData?.market_data?.current_price?.usd.toLocaleString()}
            </h2>
            <div className="flex items-center gap-x-3">
              {(
                <ChangePercentageBox
                  changedGraphCoinValue={
                    coinData?.market_data?.price_change_percentage_24h
                  }
                />
              ) || <Skeleton width={"40px"} height={"30px"} />}
              <p className="font-medium text-sm text-[#768396]">(24H)</p>
            </div>
          </div>
        )}
        {isLoading ? (
          <Skeleton width={"100px"} height={"30px"} />
        ) : (
          <p className="font-medium text-[16px] text-[#0B1426]">
            ₹{coinData?.market_data?.current_price?.inr.toLocaleString()}
          </p>
        )}
      </div>
      <div className="border-[0.5px] border-[#DEE1E6]"></div>
    </div>
  );
};

export default TopTrendingInfo;
