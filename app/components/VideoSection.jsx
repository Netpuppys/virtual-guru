import { GiCheckMark } from "react-icons/gi";
import React, { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

const points = [
  "Do you think you have weak communication skills?",
  "Do you think you are not confident to take on bigger roles?",
  "Do you feel Stuck and helpless in your career?",
  "Do you feel like quitting every now and then but are scared?",
  "Do you feel your experience is not enough?",
  "Do you feel you don't have the necessary connects, networks or certificates",
];

const VideoSection = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    console.log("Initializing Vimeo player...");

    // Initialize the Vimeo player when the component mounts
    playerRef.current = new Player(videoRef.current);

    // Ensure player is properly initialized
    playerRef.current
      .ready()
      .then(() => {
        console.log("Vimeo player is ready.");
        // Start with volume muted to comply with browser autoplay policies
        playerRef.current.setVolume(0);
      })
      .catch((error) => {
        console.error("Error initializing Vimeo player:", error);
      });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Video is in view, attempting to play muted...");
          playerRef.current.play().catch(() => {
            console.log("Autoplay failed, waiting for user interaction.");
          });
        } else {
          console.log("Video is out of view, pausing...");
          playerRef.current.pause();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      // Cleanup the observer when the component unmounts
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Function to handle user interaction to unmute the video
  const handleUserInteraction = () => {
    console.log("User interaction detected, attempting to unmute the video...");
    if (!isUserInteracted && playerRef.current) {
      playerRef.current
        .setVolume(1)
        .then(() => {
          console.log("Video volume set to maximum.");
        })
        .catch((error) => {
          console.error("Failed to set volume:", error);
        });

      // Attempt to play the video after interaction
      playerRef.current
        .play()
        .then(() => {
          console.log("Video is now playing with sound.");
        })
        .catch((error) => {
          console.error("Error playing video after interaction:", error);
        });

      setIsUserInteracted(true); // Mark the interaction as handled
    }
  };

  useEffect(() => {
    console.log("Adding event listeners for user interactions...");
    // Add event listeners for user interactions
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      console.log("Cleaning up event listeners...");
      // Clean up event listeners when the component unmounts
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [isUserInteracted]);

  return (
    <div className="w-full bg-navy-blue pt-10 px-6 lg:pt-40 pb-24 lg:pb-44 flex items-center lg:px-32 justify-center flex-col">
      <div
        ref={videoRef}
        className="aspect-video w-[90%] overflow-hidden mb-10 lg:mb-20 rounded-3xl shadow-sm bg-black"
      >
        <iframe
          src="https://player.vimeo.com/video/1020106206?autoplay=0" // autoplay is set to 0 as we control it via JS
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="w-full h-full"
        ></iframe>
      </div>

      <p className="text-[1.6rem] lg:text-[2.5rem] text-white font-extrabold leading-relaxed tracking-[0.10125rem]">
        Whatever you think is your weakness doesn&apos;t matter! Everyone can
        grow <span className="text-theme-orange">exponentially</span> in their
        careers and easily get a{" "}
        <span className="text-theme-orange">2X hike</span> just within{" "}
        <span className="text-theme-orange">8 weeks!</span> with the{" "}
        <span className="text-theme-orange">CGP ACT Program!</span>
      </p>

      <div className="max-w-[66rem] mt-10 mb-12 w-full py-12 px-6 lg:px-24 rounded-3xl border border-theme-orange flex flex-col items-start justify-start gap-9">
        {points.map((item, index) => (
          <div className="w-full flex gap-5" key={index}>
            <p className="h-6 lg:h-8 aspect-square rounded-full bg-theme-orange flex items-center justify-center text-white text-lg lg:text-2xl">
              <GiCheckMark />
            </p>
            <p className="text-base lg:text-xl text-white">{item}</p>
          </div>
        ))}
      </div>

      <p className="max-w-[60rem] text-white text-2xl text-wrap">
        If your answer to any of the above questions is a yes, then let me tell
        you something -{" "}
        <span className="text-theme-orange font-semibold">
          IT DOESN&apos;T MATTER!
        </span>{" "}
        Everyone can grow.{" "}
        <span className="text-theme-orange font-semibold">Career Growth</span>{" "}
        is just a process! Let us teach you that with your own{" "}
        <span className="text-theme-orange font-semibold">
          32 page Customized Career Growth Report!
        </span>
      </p>
    </div>
  );
};

export default VideoSection;
