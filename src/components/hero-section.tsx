import React from "react";
import { HeroHeader } from "./navbar";


export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <video
          src="hero.mp4"
          className="w-full h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
        />
      </main>
    </>
  );
}
