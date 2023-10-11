import React, { useEffect } from "react";
import image1 from "../../assets/image/ASM.png";
import image2 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 1.png";
import image3 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 7.png";
import image4 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 6.png";
import image5 from "../../assets/image/WhatsApp Image 2023-08-14 at 4.49 8.png";
import image6 from "../../assets/image/WhatsApp Image 2023-08-09 at 2.10 1.png";
import image7 from "../../assets/image/WhatsApp Image 2023-08-14 at 5.06 1.png";
import image8 from "../../assets/image/Screenshot 2023-10-11 065537.png";
import Aos from "aos";
import 'aos/dist/aos.css'


const About = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className="md:ml-0 md:mr-0 ml-5 mr-5">
      <div className="flex mt-20 mb-14">
        <div data-aos='fade-left' className="md:mt-0 mt-14">
          <img src={image1} className="h-full w-full" alt="" />
        </div>
        <div className="ml-20 mt-8">
          <h1 className="font-bold text-3xl mb-4">ASM Abdul Motin</h1>
          <p className="mb-7">
            I’m a voluntarily retired Squadron Leader of Bangladesh Air Force
            and <br /> the founder of i1class.
          </p>
          <p>Email me:</p>
          <p>abc@gmail.com</p>
        </div>
      </div>
      <div className="divider mb-10 mt-5"></div>
      {/* image and text section */}
      <div>
        {/* first image section  */}
        <div className="">
          <p className="text-justify mb-10">
            At the age of sixteen, I was given the chance to represent
            Bangladesh in Japan thanks to my leadership abilities, which I
            developed while receiving leadership training from the Youth Red
            Cross Society. My remarkable role in bringing forward arguments
            earned me the best performer in the debate competition, and I had
            the honor of earning medals from Nobel Laureate Mother Teresa for my
            participation in the National Red Cross Camp. I received the Best
            Flight Cadet Award for the General Service Training after graduating
            from the Air Force Academy in the flying branch.
          </p>
          <div data-aos='fade-right'>
          <img src={image2} className="w-[100%] h-[100%] mt-5 mb-10" alt="" />
          </div>
        </div>

        {/* second image section */}
        <div>
          <p className="text-justify mb-10">
            I completed a variety of courses at home and abroad during my time
            in the Air Force and Two of the most renowned organizations in the
            USA, Flight Safety and Bell Academy, provided me with my instructor
            pilot training and flight simulator training, which allowed me to
            gather significant expertise that helped me quickly become a VVIP
            cleared operational pilot.
          </p>
          <div className="md:flex md:justify-between mb-10" data-aos='fade-left'>
            <img src={image3} alt=""  className="md:mb-0 mb-5"/>
            <img src={image4} alt="" />
          </div>
        </div>

        {/* third image section */}
        <div>
          <p className="text-justify mb-10">
            I flew several foreign and Bangladeshi heads of state throughout my
            time in the Air Force. I performed a variety of operational flights
            all around the world while I was a member of the Bangladesh Air
            Force. The operations I carried out for UN Peacekeeping Missions in
            Iraq and Kuwait following the end of the First Gulf War may be
            considered my biggest operations.I received a certificate of
            commendation from the Chief of the Air Staff for my significant
            contribution to Bangladesh
          </p>

          <div data-aos='fade-right'>
            <img src={image5} className="w-[100%] h-[100%] mt-5 mb-10" alt="" />
          </div>
        </div>

        {/* forth image section */}
        <div>
          <p className="text-justify mb-10">
            "Inspiration" is the title of a book I wrote. Where i made an effort
            to support the crucial change-makers in carrying out their regular
            social and professional interactions in a considerate and wise
            manner.
          </p>
          <div data-aos='fade-left'>
            <img src={image6} className="w-[100%] h-[100%] mt-5 mb-10" alt="" />
          </div>
        </div>
        {/* fifth image section */}
        <div>
          <p className="text-justify mb-10">
            I'm currently run a website called "class" for online education.
            With the innovative notion of offering a network of connections and
            high-quality information that transforms education into a better
            person, I made the first step toward introducing class Home.
            (ilclass.com) to the students and educators of Bangladesh class, a
            Dhaka-based provider of educational technology, was therefore
            founded by me. It offers a distinctive ecosystem for teachers and
            students of Bangla Medium and 4 growing. HubSpot partnered with F2.
            an Australian English Ed-Tech firm.
          </p>
          <div data-aos='fade-right'>
            <img src={image7} className="w-[100%] h-[100%] mt-5 mb-10" alt="" />
          </div>
        </div>
        <div>
          <p className="text-justify mb-10">
            Like to keep myself occupied with philosophical ideas, mainly ones
            that are based on Islam and life. My wife Minara Motin and my two
            wonderful boys Mashrur and Mehrab are a blessing to me.
          </p>
        </div>
      </div>

      {/* map system added */}
      <div className="md:flex bg-[#90C0E8] md:justify-center p-14 ">
        <div data-aos='fade-right'>
          <img src={image8} className="w-[400px] h-[100%] " alt="" />
        </div>

        <div className="md:ml-[100px] text-white mt-5">
          <h1 className=" text-2xl mb-7">
            I’d Love To Hear <br /> From You
          </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
          <div>
          <button className="btn btn-sm bg-[#EEBF63] text-white border-none mt-5 hover:bg-[#EEBF63]">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
