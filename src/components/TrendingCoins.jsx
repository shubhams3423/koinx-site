import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ChangePercentageBox from "./ChangePercentageBox";

const TrendingCoins = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [trendingCoinsData, setTrendingCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/search/trending?x_cg_api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        setTrendingCoinsData(data?.coins.slice(0, 3));
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex gap-y-4 rounded-xl p-6 flex-col md:w-full h-[225px] bg-white">
      <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
      <div className="flex flex-col gap-y-[0.8rem]">
        {trendingCoinsData?.map((trendingData) => {
          return (
            <div
              className="flex items-center justify-between"
              key={trendingData?.item?.coin_id}
            >
              {isLoading ? (
                <Skeleton width={"160px"} />
              ) : (
                <div className="flex items-center gap-x-[6px]">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full">
                    <img
                      src={trendingData.item?.small}
                      alt=""
                      className="h-[24px] w-[180px]"
                    />
                  </div>
                  <p className="font-semibold">{trendingData.item.id}</p>
                </div>
              )}

              {isLoading ? (
                <Skeleton width={"100px"} />
              ) : (
                <ChangePercentageBox trendingData={trendingData} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCoins;
