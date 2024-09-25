import React from 'react'

import mrTeja from "../../public/hero/mrTeja.png"
import Image from 'next/image'
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const points = [
    "A recent graduate looking to start your career with confidence",
    "A mid-career professional aiming to break into a leadership role",
    "Or an experienced professional seeking new direction and clarity",
    "You have a career gap and you want to find your dream job that pays 2X Salary"
]

const AboutCoach = () => {
  return (
    <div className="w-full bg-navy-blue flex flex-col items-center justify-start pb-[7.6rem] pt-20">
        <p className="text-white font-helveticaNow font-extrabold tracking-widest text-[2.3rem]">
            Who Is <span className="text-theme-orange">CGP ACT</span> For?
        </p>
        <div className="w-[34rem] h-[1px] bg-white rounded-full my-[1.2rem]"></div>
        <p className="text-white text-[1.56rem] max-w-[65rem] text-center font-medium">
            CGP ACT will equip you with the tools, strategies, and guidance to accelerate your career and unlock new opportunities whether you are:
        </p>

        <div className="w-[66.8rem] flex flex-col gap-[1.8rem] mt-12">
            {points.map((item, index) => (
                <div key={index} className="rounded-2xl border border-white py-[1.8rem] px-12 flex items-start justify-start gap-8">
                    <div className="w-6 mt-[0.4rem] aspect-square rounded-full bg-white"></div>
                    <p className="text-white text-[1.6rem] font-semibold">
                        {item}
                    </p>
                </div>
            ))}
        </div>
        <button
            className="font-helveticaNow shadow-orange-glow cursor-pointer hover:animate-color-fade hover:text-theme-orange hover:bg-white mt-[3.75rem] text-navy-blue text-[1.5rem] font-bold tracking-widest bg-theme-orange px-20 h-16 flex items-center justify-center rounded-full "
        >
            {"Enroll Now for INR 2999 + GST (Original price INR 14,999)"}
        </button>

        <div className="mt-[9.5rem] flex items-center justify-center gap-1">
            <div className="w-[5.5rem] h-[1px] bg-theme-orange rounded-full"></div>
            <p className="text-center font-helveticaNow text-[2.5rem] text-white font-bold tracking-wider">
                ABOUT YOUR COACH
            </p>
            <div className="w-[5.5rem] h-[1px] bg-theme-orange rounded-full"></div>
        </div>

        <div className="max-w-[32rem] mt-[5rem]">
            <Image
                src={mrTeja}
                className="w-full"
                alt="Mr Teja"
            />
        </div>

        <div className="max-w-[62rem] relative mt-[4.5rem]">
            <p className="absolute -top-4 -left-8 text-[2.5rem] text-theme-orange">
                <RiDoubleQuotesL />
            </p>
            <p className="text-white text-center text-[1.6rem] italic font-semibold leading-normal">
                My Name is{" "}
                <span className="text-theme-orange">Teja Gudluru</span>
                {" "}and I am an{" "}
                <span className="text-theme-orange">Entrepreneur, TEDx Speaker</span>
                {" "}and a{" "}
                <span className="text-theme-orange">Career Growth Mentor</span>.
                {" "}I am also a{" "}
                <span className="text-theme-orange">Visiting Career Coach</span>
                {" "}at Indian Institute of Management (IIM), Udaipur. In my{" "}
                <span className="text-theme-orange">23 years</span>
                {" "}of experience, I have held many{" "}
                <span className="text-theme-orange">Senior Management Positions</span>
                {" "}at an International Bank. I currently{" "}
                <span className="text-theme-orange">Mentor Mid to Senior Managers</span>
                {" "}at more than{" "}
                <span className="text-theme-orange">65 companies</span>
                {" "}in over{" "}
                <span className="text-theme-orange">45 countries</span>.
            </p>
            <p className="absolute -bottom-6 -right-6 text-[2.5rem] text-theme-orange ">
                <RiDoubleQuotesR />
            </p>
        </div>

        <div className="px-20 mt-[3.75rem] bg-white text-theme-orange rounded-full font-bold text-[1.5rem] font-helveticaNow tracking-widest py-2">
            We are the most awarded Career Growth Program in India!
        </div>

        <div className="max-w-[90rem] h-[16rem] mt-[6.5rem] w-full flex items-center justify-between flex-wrap">
            {[1,1,1,1].map((_, index) => (
                <div key={index} className="bg-black rounded-[2.3rem] h-full w-[22%]">

                </div>
            ))}
        </div>
    </div>
  )
}

export default AboutCoach