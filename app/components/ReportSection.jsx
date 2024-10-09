import React from 'react'

const para = "Once you've taken the assessment, your journey begins with access to a suite of world-class career courses that are fully aligned with your personalized report. Here's what you'll receive:"

const ReportSection = () => {
  return (
    <div className='w-full bg-navy-blue pb-20'>
        <div className='rounded-[3rem] w-full pt-10 lg:pt-[7rem] flex flex-col items-center justify-start px-14 pb-20 bg-[#FFEADD]'>
            <p className='text-2xl lg:text-4xl text-navy-blue font-extrabold tracking-[0.187rem] font-helveticaNow text-center'>
                <span className='text-theme-orange'>32 Page</span>{" "}Report
            </p>
            <p className='mt-6 font-tt-chocolates text-sm lg:text-[1.3rem] lg:w-[40rem] text-center'>
                {para}
            </p>

            <div className="w-full pt-14 flex items-center justify-center gap-4 lg:gap-40">
                {[1,1,1].map((_, index) => (
                    <div key={index} className='w-[calc(33%-1rem)] lg:w-[calc(33%-10rem)] aspect-square bg-black rounded-2xl '>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ReportSection