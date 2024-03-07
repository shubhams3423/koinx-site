import React from "react";
import ChangePercentage from "./ChangePercentage";
const ChangePercentageBox = ({
  trendingData,
  graphCoin,
  changedGraphCoinValue,
}) => {
  const coinChangedValue =
    trendingData?.item?.data?.price_change_percentage_24h?.inr ||
    changedGraphCoinValue;
  return (
    <div>
      <ChangePercentage
        coinChangedValue={coinChangedValue}
        graphCoin={graphCoin}
      />
    </div>
  );
};

export default ChangePercentageBox;
