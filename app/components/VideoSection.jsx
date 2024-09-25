import { GiCheckMark } from "react-icons/gi";

const points = [
    "Do you think you have weak communication skills?",
    "Do you think you are not confident to take on bigger roles?",
    "Do you feel Stuck and helpless in your career?",
    "Do you feel like quitting every now and then but are scared?",
    "Do you feel your experience is not enough?",
    "Do you feel you don't have the necessary connects, networks or certificates"
]

const VideoSection = () => {
  return (
    <div className="w-full bg-navy-blue pt-10 px-10 lg:pt-40 pb-24 lg:pb-44 flex items-center lg:px-32 justify-center flex-col">
        
        <div className="aspect-video w-[90%] mb-10 lg:mb-20 rounded-3xl shadow-sm bg-black">

        </div>

        <p className="text-[1.6rem] lg:text-[2.5rem] text-white font-extrabold leading-relaxed tracking-[0.10125rem]">
            Whatever you think is your weakness doesn&apos;t matter! Every can grow <span className="text-theme-orange">exponentially</span> in their
            careers and easily get a <span className="text-theme-orange">2X hike</span> just within <span className="text-theme-orange">8 weeks!</span>
        </p>

        <div className="max-w-[66rem] mt-10 mb-12 w-full py-12 px-10 lg:px-24 rounded-3xl border border-theme-orange flex flex-col items-start justify-start gap-9">
            {points.map((item, index) => (
                <div className="w-full flex gap-5" key={index}>
                    <p className="h-8 aspect-square rounded-full bg-theme-orange flex items-center justify-center text-white text-2xl">
                        <GiCheckMark />
                    </p>
                    <p className="text-xl text-white">
                        {item}
                    </p>
                </div>
            ))}
        </div>

        <p className="max-w-[60rem] text-white text-2xl text-wrap">
            If your answer to any of the above questions is a yes, then let me tell you something - {" "}
            <span className="text-theme-orange font-semibold">
                IT DOESN&apos;T MATTER!
            </span>{" "}
            Everyone can grow.{" "}
            <span className="text-theme-orange font-semibold">
                Career Growth
            </span>{" "}
            is just a process! Let us teach you that with your own{" "}
            <span className="text-theme-orange font-semibold">
                32 page Customized Career Growth Report!
            </span>
        </p>
    </div>
  )
}

export default VideoSection