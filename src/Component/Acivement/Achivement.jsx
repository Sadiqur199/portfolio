import React, { useEffect } from "react";
import image1 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 5.png";
import image2 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 4.png";
import image3 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 9.png";
import image4 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 3.png";
import image5 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 2.png";
import image6 from "../../assets/image/WhatsApp Image 2023-08-14 at 5.06 2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { HiMail } from "react-icons/hi";

const Achivement = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mr-5 ml-5 md:ml-0 md:mr-0">
      <div data-aos="fade-right" className="">
        <img src={image1} className="w-[100%] h-[100%] mt-14 mb-10" alt="" />
      </div>

      <div data-aos="fade-left" className="">
        <img src={image2} className="w-[100%] h-[100%] mt-14 mb-10" alt="" />
      </div>

      <div data-aos="fade-right" className="">
        <img src={image3} className="w-[100%] h-[100%] mt-14 mb-10" alt="" />
      </div>

      <div>
        <img
          data-aos="fade-left"
          src={image4}
          className="w-[100%] h-[100%] mt-14 mb-10 "
          alt=""
        />
        <p className="text-justify mt-10 mb-10 text-xl font-bold ">
          Air Force <br /> ASM Abdul Motin, a prominent leader in Bangladesh,
          gained leadership skills at a young age and represented the country in
          Japan. He graduated from the Air Force Academy and became a VVIP
          cleared operational pilot. Motin flew for Bangladeshi and foreign head
          of state governments, participating in UN Peacekeeping Missions,
          anti-insurgency operations, and relief distributions during the 1988
          and 1991 floods. In 1999, he voluntarily left the Air Force as
          Squadron Leader to pursue a career in the global market. Motin's
          leadership qualities and VVIP clearance allowed him to fly with
          distinction, earning him medals from Nobel Laureate Mother Teresa.
        </p>
      </div>

      <div>
        <img
          data-aos="fade-right"
          src={image5}
          className="w-[100%] h-[100%] mt-14 mb-10 "
          alt=""
        />
        <p className="text-justify mt-10 mb-10 ">
          "Inspiration" <br /> I wrote the best-selling book "Inspiration,"
          which Nobel Prize winner Professor Muhammad Yunus also suggested as a
          book that addressed the crucial concerns in our lives of financial and
          cosmological crises. My goals were to discuss a few key aspects of
          human behavior in relation to our contemporary sexual practices,
          advance moral principles, and illuminate our lives with honor and
          dignity.
        </p>
      </div>

      <div>
        <img
          src={image6}
          data-aos="fade-left"
          className="w-[100%] h-[100%] mt-14 mb-10"
          alt=""
        />
        <p className="text-justify mt-10 mb-10">
          “I am delighted to see that ASM Abdul Motin is addressing a vital
          issue in our lives at the time when the world is filled with doom and
          gloom of financial and other crises. What is the role individuals can
          play in their life time to make their lives fulfilled? What role
          business should play? Is our economic world consistent with our social
          and individual goals? I am impressed by the way Motin addresses these
          issues. I am sure readers will enjoy reading this book”.(Proffessor
          Muhammad Yunus’s speech about “Inspiration”)
        </p>
      </div>

      <div className="bg-[#EEBF63] md:flex md:justify-between p-14 border-none rounded-lg">
        <div>
          <p className="text-white text-3xl font-bold">
            Interested working <br />
            with me?
          </p>
        </div>
        <div>
          <button className="btn btn-sm bg-white text-[#2F2F2F] border-none mt-5 hover:bg-white">
            {" "}
            <HiMail size={25} /> Mail ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
