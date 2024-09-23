import Image from "next/image"
import placeholder from "../../public/delete/placeholder.png"
import { GiCheckMark } from "react-icons/gi";

// comp 1
const subTitle = "Once you've taken the assessment, your journey begins with access to a suite of world-class career courses that are fully aligned with your personalized report. Here's what you'll receive:"

const cards = [
    { 
        image: placeholder,
        title: "Niche Purpose & Clarity",
        para: "Define your unique path by discovering what truly drives you. Get clarity on your career direction based on your skills and passions."
    },
    { 
        image: placeholder,
        title: "AI-Based Resume Mastery",
        para: "Learn how to create an AI-optimized, ATS friendly resume that stands out and gets results—whether it's a hiring manager or an automated system reviewing it."
    },
    { 
        image: placeholder,
        title: "LinkedIn Mastery",
        para: "Learn how to craft an exceptional LinkedIn profile and use networking strategies to open new doors and build professional connections."
    },
    { 
        image: placeholder,
        title: "Job Search Mastery",
        para: "Become a job search pro with advanced strategies, tools, and techniques to land your ideal job faster."
    },
    { 
        image: placeholder,
        title: "Interview Mastery",
        para: "Develop the confidence and skills needed to ace interviews. Learn proven techniques to make a lasting impression"
    },
    { 
        image: placeholder,
        title: "Job Search Mastery",
        para: "Stand out in any situation with powerful communication skills. Learn how to connect, influence, and persuade with confidence."
    }
]

// comp 2
const subTitle2 = "Unlike other courses, CGP ACT is completely customized to your individual needs. Every participant begins with a comprehensive Career Growth Assessment. This powerful tool will generate a 32-page personalized report outlining:"

const points = [
    {
        title: "Your Career Pointers",
        para: "Specific areas to fast-track your growth."
    },
    {
        title: "Your Strengths",
        para: "The key abilities you can leverage to grow in your career instead of worrying about your weaknesses"
    },
    {
        title: "Your Growth Areas",
        para: "Custom actions to unlock your full potential."
    }
]

const WhatYouGet = () => {
  return (
    <div className="w-full bg-navy-blue">
        <div className="w-full rounded-[3rem] px-16 pb-20 bg-white flex flex-col items-center pt-16">
            <p className="tracking-wide text-navy-blue text-5xl font-extrabold mb-6">
                What You Get with{" "}
                <span className="text-theme-orange">
                    CGP ACT
                </span>
            </p>
            <p className="text-navy-blue max-w-[50rem] text-center text-[1.6rem] font-medium">
                {subTitle}
            </p>
            <div className="w-full mt-10 flex flex-wrap gap-x-6 gap-y-10">
                {cards.map((item, index) => (
                    <div className="rounded-xl group relative overflow-hidden w-[31%] aspect-[2.2/1]" key={index}>
                        <Image
                            src={item.image}
                            className="w-full h-full object-cover"
                            alt={item.title}
                        />
                        <div className="absolute z-10 h-full bg-black bg-opacity-40 opacity-50 group-hover:animate-slide-in group-hover:opacity-100 -bottom-full group-hover:bottom-0 w-full pb-5 left-0 px-5 flex flex-col items-center justify-end">
                            <div className="w-full flex items-center gap-3">
                                <p className="aspect-square bg-white rounded-full w-6 h-6 flex items-center justify-center mt-2">
                                    <GiCheckMark />
                                </p>
                                <p className="text-white font-helveticaNow text-2xl font-bold">
                                    {item.title}
                                </p>
                            </div>
                            <p className="text-white text-lg leading-snug pl-[2.25rem] pt-2 text-wrap">
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="pt-32 pb-20 flex flex-col items-center justify-start">
            <p className="text-4xl font-extrabold font-helveticaNow text-white tracking-widest">
                Why Choose{" "}
                <span className="text-theme-orange">
                    CGP ACT Program?
                </span>
            </p>
            <div className="w-[35rem] my-8 h-[1px] bg-theme-orange rounded-full"></div>

            <p className="font-medium text-white text-2xl max-w-[81rem] text-center">
                {subTitle2}
            </p>

            <div className="w-full flex flex-col gap-7 max-w-[87rem] mt-12">
                {points.map((item, index) => (
                    <div key={index} className="px-12 py-7 flex items-start gap-8 rounded-xl border border-white">
                        <p className="h-8 aspect-square text-xl flex items-center justify-center bg-white rounded-full">
                            <GiCheckMark />
                        </p>
                        <p className="text-white text-2xl font-medium">
                            <span className="font-extrabold">
                                {item.title} -{" "}
                            </span>
                            {item.para}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhatYouGet