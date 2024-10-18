import React from "react";
import mrTeja from "../../public/hero/mrTeja.png";
import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";

const description =
  "Are you ready to transform your career in just 15 minutes a day? Introducing CGP ACT (Accelerated Career Trajectory)—the only program that delivers a personalized career growth plan based on your unique strengths, aspirations, and growth areas. Priced at just INR 2999 + GST, you'll get access to an 8-week transformative journey that will revolutionize your career—all by investing just 15 minutes a day.";

const Hero = () => {
  return (
    <div className="w-full lg:pt-32 relative flex items-center flex-col justify-center bg-navy-blue lg:bg-white">
      <div className="w-full bg-white pt-16 lg:pt-0 flex items-start px-10 rounded-bl-[2rem] rounded-br-[2rem] lg:rounded-none flex-col lg:flex-row max-w-[90rem]">
        <div className="w-full">
          <p className="text-[1.6rem] lg:max-w-[50rem] lg:text-5xl text-navy-blue font-semibold max-w-[20rem] tracking-wide">
            Unlock Your Customized Career Growth Plan with 2X Salary Growth with{" "}
            <span className="text-theme-orange font-poppins font-extrabold">
              The CGP ACT Program
            </span>
          </p>
          <div className="w-1/2 h-[2px] rounded-full bg-theme-orange my-8"></div>

          <p className="text-base lg:text-xl text-navy-blue font-medium max-w-[65rem] pr-10 lg:pr-80 tracking-wide">
            {description}
          </p>

          <button
            onClick={() => {
              window.location.href = "https://rzp.io/rzp/UJK8Ht7A";
            }}
            className="bg-theme-orange cursor-pointer hover:animate-color-fade hover:text-theme-orange hover:bg-white mt-10 shadow-lg w-64 h-14 font-helveticaNow font-black text-white text-lg tracking-wide rounded-full flex items-center justify-center"
          >
            ENROLL NOW
          </button>
        </div>
        <div className="w-full pb-40 lg:pb-0 lg:min-w-[36rem] pt-24 lg:-mb-10 lg:-ml-80 max-w-[36rem]">
          <Image
            src={mrTeja}
            className="w-full"
            alt="Teja Gudluru"
            priority={true}
          />
        </div>
      </div>
      <div className="w-full lg:w-2/5 xl:w-1/2 min-w-fit lg:absolute bottom-0 left-0 lg:rounded-full lg:rounded-bl-none bg-navy-blue lg:h-16">
        <div className="w-full h-full relative flex items-center justify-center gap-10 px-10 lg:px-0 pt-8 lg:pt-0">
          <p className="text-2xl text-white text-left pr-16 lg:text-center tracking-wide text-wrap font-bold">
            Watch this video to know more :
          </p>
          <div className="lg:absolute top-0 text-5xl text-white flex items-center justify-center right-0 rounded-full h-full aspect-square border-2 border-white">
            <IoIosArrowRoundDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
