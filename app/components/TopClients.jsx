import Image from "next/image"
import bonusPlaceholder from "../../public/delete/bonus.png"
import Timer from "./ui/Timer"

const cards = [
    {
        image: bonusPlaceholder,
        title: "Access to the Career Tribe Community",
        para1: "Join a thriving network of like-minded professionals.",
        orange: "The Career Tribe",
        para2: "community is your support system, where you'll get accountability, motivation, and networking opportunities to help you grow."
    },
    {
        image: bonusPlaceholder,
        title: "15-Minutes a Day Commitment",
        para1: "This program is designed to fit into your busy life. Simply invest",
        orange: "15 minutes a day for 8 weeks",
        para2: ", and watch your career transform before your eyes."
    },
    {
        image: bonusPlaceholder,
        title: "Exclusive 2-Day Live Masterclass with Coach Teja Gudluru",
        para1: "Gain access to an exclusive, live 2-day masterclass with",
        orange: "Coach Teja Gudluru",
        para2: ", where you'll deep-dive into advanced career growth strategies and get personal insights from an industry expert."
    },
    {
        image: bonusPlaceholder,
        title: "Access to exclusive jobs from our partners and Community",
        para1: "We have partnered with one of the best recruitment and staffing companies -",
        orange: "Creator Technologies",
        para2: "that have over 100 clients world-wide. Get exclusives job offers from them and our community members!"
    }
]

const TopClients = () => {
  return (
    <div className="w-full bg-navy-blue">
        <div className="w-full bg-white rounded-[3rem] pt-16 pb-24 flex flex-col items-center justify-start">
            <div className="flex items-center justify-center gap-8">
                <div className="h-[1px] rounded-full w-20 bg-theme-orange font-helveticaNow"></div>
                <p className="text-[2.5rem] text-navy-blue font-bold">
                    TOP CLIENTS I WORK WITH
                </p>
                <div className="h-[1px] rounded-full w-20 bg-theme-orange"></div>
            </div>
            <div className="bg-navy-blue w-full max-w-[82rem] rounded-[3.2rem] h-56 mt-8 mb-20 flex flex-wrap items-center justify-center py-4">
                {[1,1,1,1,1,1,1,1].map((_, index) => (
                    <div key={index} className="flex items-center justify-center h-20 w-1/4">
                        <p className="text-3xl uppercase font-bold text-white">
                            facebook
                        </p>
                    </div>
                ))}
            </div>
            <div className="relative mb-[3.5rem] w-full max-w-[92rem] px-20 py-16 flex flex-wrap gap-x-12 gap-y-10 border-2 border-navy-blue rounded-3xl">
                {/* absolute title */}
                <div className="px-14 h-16 shadow-xl rounded-xl flex items-center justify-center bg-theme-orange z-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className="text-white font-helveticaNow font-bold text-[2.1rem] text-nowrap">
                        Exclusive Bonus
                    </p>
                </div>
                {/* main cards */}
                {cards.map((item, index) => (
                    <div key={index} className="rounded-[2.2rem] group relative overflow-hidden border border-black w-[calc(50%-1.5rem)] h-60">
                        <Image
                            src={item.image}
                            className="w-full h-full object-cover"
                            alt={item.title}
                        />
                        <div className="absolute z-10 h-full pt-4 bg-black bg-opacity-40 opacity-50 group-hover:animate-slide-in group-hover:opacity-100 -bottom-full group-hover:bottom-0 w-full pb-5 left-0 px-5 flex flex-col items-center justify-center">
                            <div className="w-full flex items-center gap-3">
                                <p className="aspect-square rounded-xl bg-theme-orange w-10 h-10 flex items-center justify-center mt-2">
                                    {/* <GiCheckMark /> */}
                                </p>
                                <p className="text-white font-helveticaNow text-2xl font-bold">
                                    {item.title}
                                </p>
                            </div>
                            <p className="text-[#DCDCDC] text-lg pl-[3.25rem] pt-1 text-wrap">
                                {item.para1}{" "}
                                <span className="text-theme-orange">
                                    {item.orange}
                                </span>{" "}
                                {item.para2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-[2.3rem] uppercase font-black font-helveticaNow text-navy-blue tracking-wider">
                IF  YOU SIGN UP <span className="text-theme-orange">TODAY</span>
            </p>

                <Timer />

            <button
                className="bg-theme-orange cursor-pointer hover:animate-color-fade hover:text-theme-orange hover:bg-white mt-10 shadow-lg w-[27rem] h-16 font-helveticaNow font-black text-white text-[1.5rem] tracking-widest rounded-full flex items-center justify-center"
            >
                ENROLL NOW
            </button>
        </div>
    </div>
  )
}

export default TopClients