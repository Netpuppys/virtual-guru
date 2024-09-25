import AboutCoach from "./components/AboutCoach";
import EnrolmentSection from "./components/EnrolmentSection";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
import TopClients from "./components/TopClients";
import VideoSection from "./components/VideoSection";
import WhatYouGet from "./components/WhatYouGet";


export default function Home() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <VideoSection />
      <WhatYouGet />
      <SuccessStories />
      <TopClients />
      <AboutCoach />
      <EnrolmentSection />
    </div>
  );
}