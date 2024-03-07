import React from "react";

import linkedInIcon from "../assets/LinkedInIcon.svg";
import githubIcon from "../assets/githubIcon.svg";

const Footer = () => {
  return (
    <div className="p-4 w-full flex flex-col gap-2 items-center">
      <p>
        Made with love by{" "}
        <a
          href="https://www.linkedin.com/in/shubham-shinde-69b688297/"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-600"
        >
          Shubham
        </a>
      </p>
      <div className="flex gap-x-4">
        <a
          href="https://www.linkedin.com/in/shubham-shinde-69b688297/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInIcon} className="h-[22px] w-[22px]" alt="" />
        </a>
        <a
          href="https://github.com/shubhams3423"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} className="h-[22px] w-[22px]" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
