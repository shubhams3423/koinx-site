import React, { useEffect, useState } from "react";
import TrendingCoinBox from "./TrendingCoinBox";
import Skeleton from "react-loading-skeleton";

const CoinGraphRenderer = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/search/trending?x_cg_api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        setCoinData(data?.coins);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="overflow-auto whitespace-nowrap w-full  ">
      {isLoading ? (
        <div>
          {Array(4)
            .fill(null)
            .map((item, key) => (
              <div
                className="inline-block p-4  mr-4 rounded-lg h-[160px] w-[252px]"
                key={key}
              >
                <Skeleton height={"190px"} width={"220px"} />
              </div>
            ))}
        </div>
      ) : (
        coinData.map((coinInfo, key) => {
          return <TrendingCoinBox coinInfo={coinInfo} key={key} />;
        })
      )}
    </div>
  );
};

export default CoinGraphRenderer;
