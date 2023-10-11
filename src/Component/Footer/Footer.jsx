import React from "react";
import { BiBasketball, BiLogoYoutube } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:flex lg:flex md:justify-between md:p-14 py-10 ml-5 md:ml-0 mr-2 md:mr-0">
      <div>
        <h1 className="font-semibold text-3xl">Let's Connect</h1>
      </div>
      <div className="md:flex md:justify-center mt-[15px] ">
        <a href="#">
          {" "}
          <BiLogoYoutube size={25} className="text-gray-500 mr-5 md:mb-0 mb-3" />
        </a>
        <a href="#">
          <BiBasketball size={25} className="text-gray-500 md:mb-0 mb-3" />
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
