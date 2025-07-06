import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#F5F7FD] w-full h-screen relative">
      <HeroHeader />

      <div className="flex h-full items-center max-w-[1440px] mx-auto w-full absolute z-20 px-[100px]   ">
        <div className="maax-w-[1440px] mx-auto">
          <h1 className="text-[80px] leading-20 font-[family-name:var(--font-cal-sans)]">
            Bridging <span className="uppercase">rwa</span>
            <br /> to finance
          </h1>
          <p className="w-[564px] text-[#525866] leading-6 tracking-[0.27px] font-[family-name:var(--font-fig-tree)] text-[18px] mt-4">
            Rockbit makes investing in tokenized stocks and real-world assets
            accessible, secure, and DeFi-native. Built for everyone backed by
            blockchain.
          </p>

          <div className="flex w-full flex-col  sm:flex-row sm:gap-[18px] mt-10">
            <Button asChild variant="default" size="lg">
              <Link href="#">
                <span>Start investing</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">
                <span>Explore assets</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <video
        src="hero.mp4"
        className=" h-full object-contain absolute right-0 z-10"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        preload="metadata"
      />
    </div>
  );
}
