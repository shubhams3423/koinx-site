import React from "react";
import RightSideBar from "./RightSideBar";
import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="md:p-8 p-4 bg-[#eff2f5] pb-10 gap-x-6 gap-y-5 grid md:grid-cols-[5fr_390px] ">
        <LeftSidebar />
        <RightSideBar />
      </div>
      <div className="md:py-[64px] md:px-[64px]">
        <Footer />
      </div>
    </>
  );
};

export default Main;
