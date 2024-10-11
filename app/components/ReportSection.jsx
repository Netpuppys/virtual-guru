import React from 'react'

import report1 from "../../public/report/report1.png"
import report2 from "../../public/report/report2.png"
import report3 from "../../public/report/report3.png"
import report4 from "../../public/report/report4.png"
import Image from 'next/image'

const reportImages = [
    report1,
    report2,
    report3,
    report4
]

const para = <>Here is how the <strong>CGP Act program&apos;s</strong> personalized assessment can accelerate your <strong>career:</strong></>

const points = [
    {
        para: (
            <>
                <span className='font-extrabold'>In-Depth Self-Awareness:</span> The assessment reveals key personality traits, work styles, and strengths using{" "}
                <span className='text-[#E85018] font-bold'>DISC, RIASEC,</span> and the{" "}
                <span className='text-[#E85018] font-bold'>proprietary RAMP framework {"("}Relationship Focus, Approach to Work, Mindset, and Presence{")"}</span>{" "}
                giving you a deeper understanding of your unique career potential.
            </>
        ),
    },
    {
        para: (
            <>
                <span className='font-extrabold'>Tailored Career Insights:</span> Provides actionable insights based on your assessment results, helping you{" "}
                <span className='text-[#E85018] font-bold'>identify roles, industries, and career paths</span>{" "}
                that align with your natural strengths and preferences.
            </>
        ),
    },
    {
        para: (
            <>
                <span className='font-extrabold'>Custom Growth Plan:</span> The personalized report offers clear guidance on areas to improve and leverage,{" "}
                <span className='text-[#E85018] font-bold'>enabling you to focus on skill-building and development</span>{" "}
                that will have the most impact on your career trajectory.
            </>
        ),
    },
    {
        para: (
            <>
                <span className='font-extrabold'>Strategic Decision-Making:</span> Helps you make informed choices about your next steps—whether it’s a{" "}
                <span className='text-[#E85018] font-bold'>job change, skill upgrade, or leadership role</span>{" "}
                by aligning your career moves with your assessment-driven strengths and preferences.
            </>
        ),
    },
    {
        para: (
            <>
                <span className='font-extrabold'>Faster Career Progression:</span> By understanding your work approach and mindset through the assessment, you can align your efforts with roles that offer{" "}
                <span className='text-[#E85018] font-bold'>faster growth, job satisfaction, and better-fit opportunities.</span>
            </>
        ),
    }
];


const ReportSection = () => {
  return (
    <div className='w-full bg-navy-blue pb-20'>
        <div className='rounded-[3rem] w-full pt-10 lg:pt-[7rem] flex flex-col items-center justify-start px-0 lg:px-14 pb-20 bg-[#FFEADD]'>
            <p className='text-2xl lg:text-4xl text-navy-blue px-4 lg:px-0 font-black tracking-[0.187rem] font-helveticaNow text-center'>
                What is the <span className='text-theme-orange'>CGP assessment?</span>
            </p>
            <p className='mt-6 font-tt-chocolates text-[1.3rem] px-4 lg:px-0 lg:text-[1.3rem] lg:w-[40rem] text-center'>
                {para}
            </p>

            <div className='border mx-4 lg:mx-[6rem] mt-10 border-theme-orange rounded-[2.3rem] px-4 lg:px-[3.75rem] py-6 lg:py-14 flex flex-col items-start justify-start gap-6'>
                {points.map((item, index) => (
                    <p key={index} className='text-[0.9rem] lg:text-[1.2rem] font-tt-chocolates'>
                        {item.para}
                    </p>
                ))}
            </div>

            <div className="w-full pt-14 px-8 lg:px-0 flex items-center no-scrollbar justify-start lg:justify-center gap-4 lg:gap-10 overflow-x-auto lg:overflow-visible">
                {reportImages.map((image, index) => (
                    <div key={index} className='w-full min-h-[15rem] min-w-[80vw] lg:min-h-0 lg:w-[calc(25%-2.5rem)] aspect-[4/3] bg-black rounded-2xl overflow-hidden'>
                        <Image
                            src={image}
                            className='w-full h-full object-cover'
                            alt=''
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ReportSection