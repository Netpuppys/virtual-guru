import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

const sections = [
    {
        para: <>The comprehensive <span className="text-theme-orange">32-page Career Growth Assessment</span> & Report customized just for you.</> 
    },
    {
        para: <><span className="text-theme-orange">6 world-class career modules</span> that cover every aspect of career success.</>
    },
    {
        para: <>Access to the <span className="text-theme-orange">Career Tribe community</span> for networking and support.</>
    },
    {
        para: <>Lifetime access to <span className="text-theme-orange">course materials</span>.</>
    },
    {
        para: <>An exclusive, <span className="text-theme-orange">live 2-day masterclass</span> with Coach <span className="text-theme-orange font-semibold">Teja Gudluru</span>.</>
    }
]

const EnrolmentSection = () => {
  return (
    <div className="w-full bg-navy-blue">
        <div className="w-full bg-white pt-16 px-8 lg:px-20 pb-[13rem] rounded-[3rem] flex flex-col items-center justify-start">
            <div className="flex items-center justify-center lg:gap-10">
                <div className="w-20 hidden lg:block h-[1.5px] bg-theme-orange"></div>
                <p className="text-navy-blue text-center text-nowrap text-[1.9rem] lg:text-4xl font-helveticaNow font-bold">
                    Your Enrolment Includes
                </p>
                <div className="w-20 hidden lg:block h-[1.5px] bg-theme-orange"></div>
            </div>

            <div className="w-full mt-20 flex flex-wrap items-start justify-center lg:justify-between gap-4 lg:gap-8">
                {sections.map((item, index) => (
                    <div key={index} className="flex w-[calc(50%-0.5rem)] lg:w-[15rem] flex-col items-center justify-center gap-6">
                        <div className="w-16 aspect-square rounded-2xl bg-navy-blue"></div>
                        <p className="text-navy-blue font-medium text-center text-[0.85rem] lg:text-xl">{item.para}</p>
                    </div>
                ))}
            </div>

            <button
                className="font-helveticaNow text-nowrap cursor-pointer hover:animate-color-fade hover:text-theme-orange hover:bg-white mt-[3.75rem] text-navy-blue text-[0.76rem] lg:text-[1.5rem] font-bold tracking-widest bg-theme-orange px-6 lg:px-20 h-12 lg:h-16 flex shadow-orange-glow items-center justify-center rounded-full "
            >
                {"Enroll Now for INR 2999 + GST (Original price INR 14,999)"}
            </button>

            <div className="w-[21rem] mt-[2.3rem] mb-[1.75rem] h-[1.5px] bg-theme-orange"></div>

            <div className="w-full max-w-[80rem] border-[2.5px] border-navy-blue rounded-3xl overflow-hidden pb-10">
                <div className="rounded-3xl mb-8 w-full bg-navy-blue flex items-center justify-center h-fit px-12 lg:px-0 py-6 lg:py-0 lg:h-[7.3rem]">
                    <p className="italic text-[2.2rem] text-wrap lg:text-[3.7rem] font-bold font-helveticaNow text-white text-center">
                        Ready to <span className="text-theme-orange">Accelerate</span> Your Career?
                    </p>
                </div>

                <p className="text-center text-navy-blue text-[1.375rem] lg:text-[1.6rem] font-medium mx-8 lg:mx-32">
                    In just <Orange>15 minutes a day</Orange>, over <Orange>8 weeks</Orange>, you can transform your career trajectory. This is more than just a course—it's a personalized, guided journey to <Orange>career success</Orange>. 
                    <br/>
                    <br/>
                    <Orange>Don't wait</Orange>—take the first step towards unlocking your potential and achieving the <Orange>career of your dreams</Orange>.
                </p>
            </div>

            <button
                className="font-helveticaNow text-nowrap cursor-pointer hover:animate-color-fade hover:text-navy-blue hover:bg-white mt-[3.75rem] text-white text-[0.76rem] lg:text-[1.5rem] font-bold tracking-widest bg-navy-blue px-6 lg:px-20 h-12 lg:h-16 flex shadow-orange-glow items-center justify-center rounded-full "
            >
                {"Enroll Now for INR 2999 + GST (Original price INR 14,999)"}
            </button>

            <div className="w-[21rem] mb-[2.3rem] mt-[2rem] h-[1.5px] bg-navy-blue"></div>

            <p className="text-center max-w-[70rem] px-10 lg:px-0 text-navy-blue relative font-semibold italic text-[1.25rem] lg:text-[1.6rem]">
                <span className="absolute -top-4 left-2 lg:-left-8 text-[2.5rem] text-theme-orange">
                    <RiDoubleQuotesL />
                </span>
                Join the <Orange>CGP ACT program</Orange> and experience the transformation that customized career growth can bring. <Orange>Start now</Orange>, and your future self will thank you.
                <span className="absolute top-[80%] lg:-top-4 right-2 lg:-right-8 text-[2.5rem] text-theme-orange ">
                    <RiDoubleQuotesR />
                </span>
            </p>
        </div>
    </div>
  )
}

const Orange = ({ children }) => {
    return (
        <span className="text-theme-orange font-bold">
            {children}
        </span>
    )
}

export default EnrolmentSection