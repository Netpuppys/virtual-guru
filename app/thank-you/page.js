"use client";
import React, { useEffect, useState } from "react";
import { TbMailOpenedFilled } from "react-icons/tb";
function Page() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          window.location.href = "/";
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className="bg-[#323A53] w-full h-screen flex flex-col justify-center items-center overflow-hidden relative">
      <div className="bg-[#FF8A3D] bg-opacity-5 h-[80vh] w-[80vh] absolute rounded-full"></div>
      <div className="bg-[#FF8A3D] bg-opacity-5 h-[65vh] w-[65vh] absolute rounded-full"></div>
      <div className="bg-[#FF8A3D] bg-opacity-5 h-[50vh] w-[50vh] absolute rounded-full"></div>
      <div className="bg-[#FF8A3D] bg-opacity-5 h-[35vh] w-[35vh] absolute rounded-full"></div>
      <div className="bg-[#FF8A3D] bg-opacity-50 text-white text-[10vh] mb-[1vh] md:mb-[2vh] h-fit w-fit aspect-square p-8 rounded-full">
        <TbMailOpenedFilled />
      </div>
      <div className="z-[50] px-8 pointer-events-auto flex flex-col justify-center items-center">
        <h3 className="text-white text-[clamp(25px,1.9vw,45px)] font-[Helvetica]">
          Thank You for your trust!
        </h3>
        <h5 className="text-center mb-[1vh] md:mb-[2vh] text-white italic text-[clamp(15px,0.9vw,25px)]">
          Your payment is securely processed. <br />
          Our team will get in touch with you for the next steps.
          <br />
          For questions or rush request, please email{" "}
          <a href="mailto:tejagudluru@udo-now.com" className="text-[#FF8A3D]">
            {" "}
            tejagudluru@udo-now.com
          </a>
        </h5>
        <p className="text-center text-white text-[clamp(15px,0.9vw,25px)]">
          You will be redirected to Home Page in {timer} seconds.
        </p>
      </div>
    </div>
  );
}

export default Page;
