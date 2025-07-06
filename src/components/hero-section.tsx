import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

export default function HeroSection() {
  return (
    <div className=" w-full ">
      <HeroHeader />
      <section className="bg-[#F5F7FD] relative h-[982px]">
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
      </section>
      <section className="py-24">
        <div className="group relative m-auto max-w-[1440px] px-8">
          <div className="flex flex-col items-center font-[family-name:var(--font-cal-sans)]">
            <p className="text-[#475467] ">Built with</p>

            <div className="relative pt-8 md:w-full">
              <InfiniteSlider speedOnHover={20} speed={40} gap={32}>
                <div className="flex">
                  <img
                    className="mx-auto w-fit "
                    src="boltshift.svg"
                    alt="boltshift Logo"
               
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto w-fit "
                    src="lightbox.svg"
                    alt="Lightbox Logo"
                
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto  w-fit "
                    src="featherdev.svg"
                    alt="Featherdev Logo"
              
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto w-fit "
                    src="spherule.svg"
                    alt="Spherule Logo"
               
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto  w-fit "
                    src="globalbank.svg"
                    alt="Global Logo"
               
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto  w-fit "
                    src="nietzche.svg"
                    alt="Nietzche Logo"
            
                  />
                </div>
               
                
              </InfiniteSlider>

              <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
