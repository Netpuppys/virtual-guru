import AboutCoach from "./components/AboutCoach";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
import VideoSection from "./components/VideoSection";
import WhatYouGet from "./components/WhatYouGet";


export default function Home() {
  return (
    <div classname="w-screen min-h-screen">
      <Hero />
      <VideoSection />
      <WhatYouGet />
      <SuccessStories />
      <AboutCoach />
    </div>
  );
}