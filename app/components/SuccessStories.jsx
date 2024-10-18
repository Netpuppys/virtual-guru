import Carousel from "./ui/Carousel";

const testimonials = [
  "https://player.vimeo.com/video/1020875511?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/1020875537?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/1020875638?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/1020875562?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "https://player.vimeo.com/video/1020875621?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
]

const cards = [
  {
    para: "I loved the personalized approach of this program! The Niche Clarity module helped me pivot into a career that truly aligns with my strengths. Teja's insights are practical and on-point.",
    author: "Shalini D., Business Analyst"
  },
  {
    para: "I joined the CGP ACT program unsure of my next steps. Now, I've not only found my career niche, but the RAMP framework and weekly job opportunities from recruitment partners have fast-tracked my progress!",
    author: "Anil P., HR Professional"
  },
  {
    para: "The CGP ACT program helped me unlock my true potential! The RAMP framework gave me clarity on my strengths, and I've never felt more confident in my career choices. The weekly calls with Teja are a game-changer!",
    author: "Ravi K., Marketing Specialist"
  },
  {
    para: "The psychometric assessment was spot-on in helping me identify my key strengths. The AI-based resume module and LinkedIn mastery made a huge difference in how I present myself. I'm already getting more job offers!",
    author: "Priya S., IT Consultant"
  },
  {
    para: "The CGP Tribe is an amazing support system. The live coaching calls with Teja keep me on track, and the community keeps me motivated. I’ve seen real growth in just weeks, especially after applying the Interview and Job Search strategies.",
    author: "Amit T., Operations Manager"
  },
  {
    para: "As a fresher, I was overwhelmed about where to start in my career. The CGP ACT program gave me direction with the Niche Purpose and Clarity module, and the RAMP assessment showed me my strengths. The ATS-friendly resume and LinkedIn mastery helped me land my first job! The weekly calls with Teja and the CGP Tribe support have been invaluable.",
    author: "Neha M., Recent Graduate"
  },
];

const SuccessStories = () => {
  return (
    <div className="bg-navy-blue w-full">
      <div className="bg-white rounded-[3rem] w-full pt-[3.5rem] pb-[2.7rem] flex flex-col items-center justify-start">
        <p className="text-left lg:text-center text-navy-blue text-[1.7rem] px-10 lg:px-0 lg:text-[2.3rem] font-extrabold tracking-widest font-helveticaNow ">
          More than <Orange>30,000 Professionals</Orange> benefitted in over{" "}
          <Orange>45 countries</Orange>
        </p>
        <div className="w-[34rem] h-[1px] hidden lg:block bg-theme-orange rounded-full mt-6 mb-32"></div>
        <div className="w-full mt-10 lg:mt-0">
          <Carousel />
        </div>
      </div>
      <div className="w-full pt-[2.8rem] pb-4 lg:pb-[6rem] flex flex-col items-center justify-start">
        <div className="flex items-center justify-center gap-10">
          <div className="w-20 hidden lg:block h-[1px] bg-theme-orange"></div>
          <p className="uppercase text-[1.375rem] lg:text-[2.5rem] text-theme-orange font-bold font-helveticaNow text-center">
            Unmatched success stories
          </p>
          <div className="w-20 hidden lg:block h-[1px] bg-theme-orange"></div>
        </div>
        <p className="text-[1.375rem] lg:text-[2.5rem] text-white font-medium font-helveticaNow text-center">
          Some examples from our Hall of Fame participants
        </p>

        <div className="w-full h-fit overflow-x-auto no-scrollbar">
          <div className="w-full min-w-[80rem] mb-6 lg:mb-20 mt-8 lg:mt-16 flex items-center justify-start lg:justify-between gap-[1.75rem] px-16 lg:px-12">
            {testimonials.map((video, index) => (
              <div
                key={index}
                className="w-1/5 aspect-square bg-black rounded-3xl overflow-hidden flex items-center justify-center"
              >
                <iframe 
                  title="vimeo-player" 
                  src={video}
                  width="640" 
                  height="360" 
                  // frameBorder="0"
                  // allowfullscreen
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-theme-orange text-[1.55rem] lg:text-[2.5rem] text-center font-helveticaNow font-medium">
          And some more .....
        </p>

        <div className="lg:mt-[4rem] w-full overflow-x-auto overflow-y-visible no-scrollbar lg:px-20">
          <div className="w-fit lg:w-full flex items-start lg:items-center px-10 lg:px-0 justify-start gap-8">
            {cards.map((item, index) => (
              <div
                key={index}
                className="w-[80vw] lg:min-w-[25rem] lg:w-[30rem] lg:h-[16rem] relative bg-white pt-[1.5rem] text-center px-8 pb-4 rounded-3xl mt-4 lg:mt-[3.5rem]"
              >
                {/* <div className="absolute top-0 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6.5rem] aspect-square rounded-full border border-white bg-navy-blue"></div> */}
                <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col items-center justify-between">
                  <p className="text-[1rem] lg:text-[1.2rem]  text-navy-blue text-pretty ">
                    &quot;{item.para}&quot;
                  </p>
                  <p className="mt-4 font-semibold text-navy-blue">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Orange = ({ children }) => {
  return <span className="text-theme-orange">{children}</span>;
};

export default SuccessStories;
