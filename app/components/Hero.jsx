import React from 'react'
import mrTeja from "../../public/hero/mrTeja.png"
import Image from 'next/image'
import { IoIosArrowRoundDown } from "react-icons/io";

const description = "Are you ready to transform your career in just 15 minutes a day? Introducing CGP ACT (Accelerated Career Trajectory)—the only program that delivers a personalized career growth plan based on your unique strengths, aspirations, and growth areas. Priced at just INR 2999 + GST, you'll get access to an 8-week transformative journey that will revolutionize your career—all by investing just 15 minutes a day."

const Hero = () => {
  return (
    <div className="w-full pt-32 relative flex items-center justify-center">
        <div className="w-full flex items-start max-w-[90rem]">
            <div className="w-full">
                <p className="text-5xl text-navy-blue font-semibold tracking-wide leading-normal">
                    Unlock Your Customized Career Growth
                    <br />
                    Plan with 2X Salary Growth
                    <br/>
                    with {" "}
                    <span className="text-theme-orange font-poppins font-extrabold">
                        CGP ACT Program
                    </span>
                </p>
                <div className="w-1/2 h-[2px] rounded-full bg-theme-orange my-8"></div>

                <p className="text-xl font-medium max-w-[65rem] pr-80 tracking-tight">
                    {description}
                </p>

                <button
                    className="bg-theme-orange cursor-pointer hover:animate-color-fade hover:text-theme-orange hover:bg-white mt-10 shadow-lg w-64 h-14 font-helveticaNow font-black text-white text-lg tracking-wide rounded-full flex items-center justify-center"
                >
                    ENROLL NOW
                </button>
            </div>
            <div className="min-w-[36rem] pt-24 -mb-10 -ml-80">
                <Image
                    src={mrTeja}
                    className="w-full"
                    alt="Teja Gudluru"
                />
            </div>
        </div>
        <div className="w-1/2 absolute bottom-0 left-0 rounded-full rounded-bl-none bg-navy-blue h-16">
            <div className="w-full h-full relative flex items-center justify-center">
                <p className="text-2xl text-white text-center tracking-wide font-bold">
                    Watch this video to know more :
                </p>
                <div className="absolute top-0 text-5xl text-white flex items-center justify-center right-0 rounded-full h-full aspect-square border-2 border-white">
                    <IoIosArrowRoundDown />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero