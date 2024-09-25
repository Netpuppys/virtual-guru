import carouselImage from "../../public/delete/carousel.png"
import Carousel from "./ui/Carousel"

const cards = [
    {
        para: <>Learn how to identify your <span className="text-black font-semibold">behavioural strengths</span> and use them to effectively influence your <span className="text-black font-semibold">bosses</span> and <span className="text-black font-semibold">stakeholders</span> use them to effectively influence your <span className="text-black font-semibold">bosses</span> and <span className="text-black font-semibold">stakeholders</span></>
    },
    {
        para: <>Learn how to identify your <span className="text-black font-semibold">behavioural strengths</span> and use them to effectively influence your <span className="text-black font-semibold">bosses</span> and <span className="text-black font-semibold">stakeholders</span> use them to effectively influence your <span className="text-black font-semibold">bosses</span> and <span className="text-black font-semibold">stakeholders</span></>
    },
    {
        para: <>Learn how to identify your <span className="text-black font-semibold">behavioural strengths</span> and use them to effectively influence your <span className="text-black font-semibold">bosses</span> and <span className="text-black font-semibold">stakeholders</span> use them to effectively influence your <span className="text-black font-semibold">bosses</span> and <span className="text-black font-semibold">stakeholders</span></>
    },
]

const carousel = [ carouselImage, carouselImage, carouselImage, carouselImage, carouselImage ]

const SuccessStories = () => {
  return (
    <div className="bg-navy-blue w-full">
        <div className="bg-white rounded-[3rem] w-full pt-[3.5rem] pb-[5.7rem] flex flex-col items-center justify-start">
            <p className="text-center text-navy-blue text-[2.3rem] font-extrabold tracking-widest font-helveticaNow ">
                More than <Orange>30,000 Professionals</Orange> benefitted in over <Orange>45 countries</Orange>
            </p>
            <div className="w-[34rem] h-[1px] bg-theme-orange rounded-full mt-6 mb-32"></div>
            <div className="w-full h-[35rem]">
                <Carousel images={carousel} />
            </div>
        </div>
        <div className="w-full pt-[2.8rem] pb-[6rem] flex flex-col items-center justify-start">
            <div className="flex items-center justify-center gap-10">
                <div className="w-20 h-[1px] bg-theme-orange"></div>
                <p className="uppercase text-[2.5rem] text-theme-orange font-bold font-helveticaNow text-center">
                    Unmatched success stories
                </p>
                <div className="w-20 h-[1px] bg-theme-orange"></div>
            </div>
            <p className="text-[2.5rem] text-white font-medium font-helveticaNow text-center">
                Some examples from our Hall of Fame participants
            </p>

            <div className="w-full mb-20 mt-16 flex items-center justify-between gap-[1.75rem] px-12">
                {[1,1,1,1].map((_, index) => (
                    <div key={index} className="w-1/5 aspect-square bg-black rounded-3xl"></div>
                ))}
            </div>
            
            <p className="text-theme-orange text-[2.5rem] text-center font-helveticaNow font-medium">
                And some more .....
            </p>

            <div className="w-full flex items-center justify-center gap-8 mt-[7.5rem]">
                {cards.map((item, index) => (
                    <div key={index} className="w-[30rem] h-[18rem] relative bg-white pt-[5.3rem] text-center px-[1.6rem] pb-4 rounded-3xl">
                        <div className="absolute top-0 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6.5rem] aspect-square rounded-full border border-white bg-navy-blue"></div>
                        <p className="text-[1.5rem] text-navy-blue text-wrap">
                            {item.para}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

const Orange = ({ children }) => {
    return (<span className="text-theme-orange">
        {children}
    </span>)
}

export default SuccessStories