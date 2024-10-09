"use client";

import { useEffect } from "react";
import AboutCoach from "./components/AboutCoach";
import EnrolmentSection from "./components/EnrolmentSection";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
import TopClients from "./components/TopClients";
import VideoSection from "./components/VideoSection";
import WhatYouGet from "./components/WhatYouGet";
import mrTeja from "../public/hero/mrTeja.png";
import ReportSection from "./components/ReportSection";

export default function Home() {

  useEffect(() => {
    // Ensure Razorpay SDK is loaded
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    console.log(razorpayKeyId)

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when component unmounts
    };
  }, []);

  const handlePayment = () => {
    // You can retrieve these values from Razorpay Dashboard -> API Keys
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    if (!razorpayKeyId) {
      alert("something went wrong")
      return
    }

    const options = {
      key: razorpayKeyId, // Enter the Key ID generated from Razorpay Dashboard
      amount: 353882, // Amount in paise (50000 paise = INR 500)
      currency: "INR",
      name: "Teja Gudluru",
      description:
        "Are you ready to transform your career in just 15 minutes a day?",
      image: mrTeja, // Replace with your logo URL
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successful!");
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero handlePayment={handlePayment} />
      <VideoSection />
      <ReportSection />
      <WhatYouGet />
      <SuccessStories />
      <TopClients handlePayment={handlePayment} />
      <AboutCoach handlePayment={handlePayment} />
      <EnrolmentSection handlePayment={handlePayment} />
    </div>
  );
}
