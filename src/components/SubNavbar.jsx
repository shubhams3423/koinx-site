import React, { useState } from "react";

const SubNavbar = () => {
  const [active, setActive] = useState(0);
  const navlinks = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];
  return (
    <div className="overflow-hidden h-[48px] flex items-center w-full   bg-[#eff2f5]">
      <div className="overflow-auto whitespace-nowrap">
        {navlinks.map((link, key) => {
          return (
            <div
              className="inline-block md:mr-8  cursor-pointer"
              onClick={() => setActive(key)}
            >
              <p
                className={`font-semibold text-[16px] ${
                  active === key ? "text-[#0141CF]" : "text-[#3E424A]"
                }`}
              >
                {link}
              </p>
              <p className={`${active === key && "bg-[#0141CF] h-1 mt-2"}`}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubNavbar;
