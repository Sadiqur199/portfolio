import React from "react";
import { BiBasketball, BiLogoYoutube } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between p-14">
      <div>
        <h1 className="font-semibold text-3xl">Let's Connect</h1>
      </div>
      <div className="flex justify-center mt-[15px]">
        <a href="#">
          {" "}
          <BiLogoYoutube size={25} className="text-gray-500 mr-5" />
        </a>
        <a href="#">
          <BiBasketball size={25} className="text-gray-500" />
        </a>
      </div>
      <div>
        <a href="#home" className="flex">
          Back To Top <AiOutlineArrowUp size={25} className="mt-0" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
