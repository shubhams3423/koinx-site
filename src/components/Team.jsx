import React from "react";
import member1 from "../assets/teamImages/member1.png";
import member2 from "../assets/teamImages/member2.png";
import member3 from "../assets/teamImages/member3.png";
const Team = () => {
  return (
    <div className="bg-white rounded-lg  p-6   flex flex-col md:gap-y-4 gap-y-7">
      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-2xl">Team</h2>
        <p className="md:font-medium font-normal text-[#3E424A]">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
      </div>
      <div className="p-3 bg-[#E8F4FD] gap-x-4 rounded-lg px-4 grid md:grid-cols-[160px_1fr] gap-y-3">
        <div className="flex flex-col items-center gap-y-1">
          <img src={member1} className="rounded-lg w-28 h-28" alt="" />
          <p className="font-semibold text-[#0F1629]">Elina Williams</p>
          <p className="font-medium text-[13px] text-[#788F9B]">
            Designation here
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-normal leading-[22px] text-[#0F1629] h-fit">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
      <div className="p-3 bg-[#E8F4FD] gap-x-4 rounded-lg px-4 grid md:grid-cols-[160px_1fr] gap-y-3">
        <div className="flex flex-col items-center gap-y-1">
          <img src={member2} className="rounded-lg w-28 h-28" alt="" />
          <p className="font-semibold text-[#0F1629] ">John Smith</p>
          <p className="font-medium text-[13px] text-[#788F9B]">
            Designation here
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-normal leading-[22px] text-[#0F1629] h-fit">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
      <div className="p-3 bg-[#E8F4FD] gap-x-4 rounded-lg px-4 grid md:grid-cols-[160px_1fr] gap-y-3">
        <div className="flex flex-col items-center gap-y-1">
          <img src={member3} className="rounded-lg w-28 h-28" alt="" />
          <p className="font-semibold text-[#0F1629]">John Smith</p>
          <p className="font-medium text-[13px] text-[#788F9B]">
            Designation here
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-normal leading-[22px] text-[#0F1629] h-fit">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
