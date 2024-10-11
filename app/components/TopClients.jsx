import Image from "next/image";
import bonus1 from "../../public/bonus/bonus1.png"
import bonus2 from "../../public/bonus/bonus2.png"
import bonus3 from "../../public/bonus/bonus3.png"
import bonus4 from "../../public/bonus/bonus4.png"
import Timer from "./ui/Timer";

import logo1 from "../../public/logos/logo1.png"
import logo2 from "../../public/logos/logo2.png"
import logo3 from "../../public/logos/logo3.png"
import logo4 from "../../public/logos/logo4.png"
import logo5 from "../../public/logos/logo5.png"
import logo6 from "../../public/logos/logo6.png"
import logo7 from "../../public/logos/logo7.png"
import logo8 from "../../public/logos/logo8.png"

import icon1 from "../../public/logos/icon1.png"
import icon2 from "../../public/logos/icon2.png"
import icon3 from "../../public/logos/icon3.png"
import icon4 from "../../public/logos/icon4.png"

const logoimages = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8
]

const cards = [
  {
    image: bonus2,
    icon: icon1,
    title: "Access to the Career Tribe Community",
    para1: "Join a thriving network of like-minded professionals.",
    orange: "The Career Tribe",
    para2:
      "community is your support system, where you'll get accountability, motivation, and networking opportunities to help you grow.",
  },
  {
    image: bonus1,
    icon: icon2,
    title: "15-Minutes a Day Commitment",
    para1: "This program is designed to fit into your busy life. Simply invest",
    orange: "15 minutes a day for 8 weeks",
    para2: ", and watch your career transform before your eyes.",
  },
  {
    image: bonus4,
    icon: icon3,
    title: "Exclusive 2-Day Live Masterclass with Coach Teja Gudluru",
    para1: "Gain access to an exclusive, live 2-day masterclass with",
    orange: "Coach Teja Gudluru",
    para2:
      ", where you'll deep-dive into advanced career growth strategies and get personal insights from an industry expert.",
  },
  {
    image: bonus3,
    icon: icon4,
    title: "Access to exclusive jobs from our partners and Community",
    para1:
      "We have partnered with one of the best recruitment and staffing companies -",
    orange: "Creator Technologies",
    para2:
      "that have over 100 clients world-wide. Get exclusives job offers from them and our community members!",
  },
];

const TopClients = ({ handlePayment }) => {
  return (
    <div className="w-full bg-navy-blue">
      <div className="w-full bg-white rounded-[3rem] pt-16 pb-24 flex flex-col items-center justify-start lg:px-20">
        <div className="flex items-center justify-center gap-8">
          <div className="h-[1px] hidden lg:block rounded-full w-20 bg-theme-orange font-helveticaNow"></div>
          <p className="text-[1.55rem] lg:text-[2.5rem] text-center lg:text-left text-navy-blue font-bold">
            TOP CLIENTS I WORK WITH
          </p>
          <div className="h-[1px] hidden lg:block rounded-full w-20 bg-theme-orange"></div>
        </div>
        <div className="bg-navy-blue w-full max-w-[82rem] rounded-[3.2rem] lg:h-56 mt-8 mb-20 flex flex-wrap items-center justify-center py-4">
          {logoimages.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-1/2 lg:w-1/4 p-5 lg:p-3"
            >
              <Image
                src={image}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="w-full px-6 lg:px-0 flex items-center justify-center">
          <div className="relative mb-[3.5rem] w-full max-w-[92rem] px-6 lg:px-20 py-16 flex flex-wrap gap-x-12 gap-y-10 border-2 border-navy-blue rounded-3xl">
            {/* absolute title */}
            <div className="px-10 lg:px-14 h-12 lg:h-16 shadow-xl rounded-xl flex items-center justify-center bg-theme-orange z-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-white font-helveticaNow font-bold text-[1.5rem] lg:text-[2.1rem] text-nowrap">
                Exclusive Bonus
              </p>
            </div>
            {/* main cards */}
            {cards.map((item, index) => (
              <div
                key={index}
                className="rounded-[2.2rem] group relative overflow-hidden border border-black w-full aspect-square lg:aspect-auto lg:w-[calc(50%-1.5rem)] lg:h-60"
              >
                <Image
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
                <div className="absolute z-10 h-full pt-4 bg-black bg-opacity-70 bottom-0 w-full pb-5 left-0 px-3 lg:px-5 flex flex-col items-center justify-center">
                  <div className="w-full flex items-start lg:items-center gap-3">
                    <p className="aspect-square rounded-lg lg:rounded-xl flex bg-theme-orange w-8 min-w-8 lg:w-12 lg:h-12 items-center justify-center mt-2 p-1">
                      <Image
                        src={item.icon}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </p>
                    <p className="text-white font-helveticaNow text-wrap text-[1rem] lg:text-2xl font-bold">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-[#DCDCDC] text-sm lg:text-lg pl-[2.6rem] lg:pl-[3.25rem] pt-1 text-wrap">
                    {item.para1}{" "}
                    <span className="text-theme-orange">{item.orange}</span>{" "}
                    {item.para2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[1.5rem] lg:text-[2.3rem] uppercase font-black font-helveticaNow text-navy-blue tracking-wider">
          IF YOU SIGN UP <span className="text-theme-orange">TODAY</span>
        </p>

        <Timer />

        <button
          onClick={handlePayment}
          className="bg-theme-orange cursor-pointer hover:animate-color-fade hover:text-theme-orange hover:bg-white mt-10 shadow-lg w-[17rem] lg:w-[27rem] h-12 lg:h-16 font-helveticaNow font-black text-white text-[0.9rem] lg:text-[1.5rem] tracking-widest rounded-full flex items-center justify-center"
        >
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default TopClients;
