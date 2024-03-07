import React, { useState } from "react";
import logo from "../assets/KoinXLogo.png";
import menu from "../assets/Menu.svg";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleMenu = () => {
    closeMenu ? setCloseMenu(false) : setCloseMenu(true);
  };
  return (
    <div>
      <div
        className={`${
          isScrolled ? " fixed bg-gray-200" : "bg-white"
        }    right-0 left-0 top-0 z-50`}
      >
        <nav
          className={`flex md:h-[4rem]  ${
            closeMenu ? "h-[15rem]" : "h-[4rem]"
          } md:px-12 px-6 border-b border-[#DEDFE2] shadow-[0_35px_60px_-15px_#1026490F]  items-center relative`}
        >
          <div className="text-lg font-bold md:py-0 py-4">
            <img src={logo} alt="" />
          </div>
          <ul
            className={`md:ml-auto md:mt-0  flex mt-3  ${
              !closeMenu && "hidden md:flex"
            } md:flex-row flex-col md:items-center md:gap-x-[1.8rem] md:gap-y-0 gap-y-3 md:relative absolute left-0 right-0 md:top-0  top-12 md:px-0 px-6`}
          >
            <li className="font-semibold cursor-pointer text-sm hover:text-gray-600">
              Crypto Taxes
            </li>
            <li className="font-semibold cursor-pointer text-sm hover:text-gray-600">
              Free Tools
            </li>
            <li className="font-semibold cursor-pointer text-sm hover:text-gray-600">
              Resource Center
            </li>
            <li className="btncolor w-fit  md:ml-8 py-[0.6rem] px-[1.8rem] rounded-lg cursor-pointer">
              <span className="font-semibold text-white">Get Started</span>
            </li>
          </ul>
          <div className="ml-auto md:hidden md:relative absolute right-4 text-gray-500 cursor-pointer ">
            <img src={menu} alt="" onClick={handleMenu} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
