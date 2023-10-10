import React from "react";
import image1 from "../../assets/image/ASM.png";
import { BiBasketball, BiLogoYoutube } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { BsArrowDownShort } from "react-icons/bs";
import image2 from '../../assets/image/ASM_Abdul_Motin 1.png'

const Home = () => {
  return (
    <div className="mt-14 mb-14">
      {/* header top section */}
      <div className="flex mb-24">
        {/* text section */}
        <div>
          <h1 className="text-gray-300 mb-7">HEY!</h1>
          <h1 className="font-bold text-3xl mb-5">
            I’m{" "}
            <span className="relative mb-3">
              <span className="text-[#EEBF63]">A S M Abdul Motin.</span>
              <span className="absolute bottom-0 left-5  w-[80%]  h-1 bg-[#6FC2C5]"></span>
            </span>
          </h1>
          <p className="mb-8">
            I’m a voluntarily retired Squadron Leader of <br /> Bangladesh Air
            Force, the founder of i1class and the <br /> author of
            “Inspiration”.
          </p>
          <div className="mb-8">
            <p className="flex items-center text-gray-500 backdrop-blur-md">
              Follow Me
              <span className="ml-5">
                <a href="#"><BiLogoYoutube size={25} className="text-gray-400" /></a>
              </span>
              <span className="ml-3">
                <a href="#"><BiBasketball size={25} className="text-gray-400" /></a>
              </span>
            </p>
          </div>

          <div className="flex">
            <button className="btn btn-warning text-white bg-[#EEBF63] font-semibold">
              {" "}
              <HiMail size={25} /> Mail ME
            </button>
            <button className="btn btn-outline ml-5 border-[#EEBF63] font-semibold">
              {" "}
              <BsArrowDownShort size={25} /> Download CV
            </button>
          </div>
        </div>

        {/* image section */}
        <div className="md:ml-[450px]">
          <img src={image1} alt="" />
        </div>
      </div>

      {/* header bottom image */}
      <div className="mt-28 ">
       <img className="mx-auto mb-5" src={image2} alt="" />
      </div>
      <div>
        <p className="text-center text-lg font-bold text-black">“Education, knowledge and wisdom, words that are connected yet <br /> massively different. How you deliver something is the cue differential”.</p>
      </div>
    </div>
  );
};

export default Home;
