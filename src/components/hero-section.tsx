import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

export default function HeroSection() {
  return (
    <div className=" w-full  ">
      <HeroHeader />
      <section className=" relative md:h-[937px] md:px-[60px] md:mt-0 mt-[72px] w-full flex items-center bg-[#F5F7FD] pb-[64px]">
        <video
          src="hero.mp4"
          className="md:block hidden absolute right-0 top-0 h-full w-1/2 object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
        />
        <div className="max-w-[1440px] mx-auto flex flex-col md:pt-0 pt-[64px] md:justify-center md:items-start items-center w-full h-full z-20 relative md:px-0 px-5">
          <h1 className="md:text-[80px] text-[36px] md:leading-20 leading-[36px] font-[family-name:var(--font-cal-sans)] md:text-left text-center">
            Bridging <span className="uppercase">rwa</span>
            <br /> to Finance
          </h1>
          <p className="md:w-[564px] text-[#525866] leading-6 tracking-[0.27px] font-[family-name:var(--font-fig-tree)] md:text-[18px] text-base mt-4 md:text-left text-center">
            Stockbit makes investing in tokenized stocks and real-world assets
            accessible, secure, and DeFi-native. Built for everyone backed by
            blockchain.
          </p>

          <div className="flex w-full  md:items-start items-center md:justify-start justify-center flex-row gap-[18px] md:mt-10 mt-8">
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
      </section>
      <video
        src="hero.mp4"
        className="md:hidden  block  h-full w-full object-cover "
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        preload="metadata"
      />
      <section className="md:py-24  py-12 w-full   ">
        <div className="max-w-[1440px] mx-auto">
          <div className="group relative  w-full md:px-8 px-5">
            <div className="flex flex-col items-center font-[family-name:var(--font-cal-sans)]">
              <p className="text-[#475467] ">Integrated & Working with</p>

              <div className="relative pt-8 w-full">
                <InfiniteSlider speedOnHover={20} speed={40} gap={32}>
                  <div className="flex">
                    <img
                      className="mx-auto w-fit "
                      src="circle.svg"
                      alt="circle Logo"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto w-fit "
                      src="coinbase.svg"
                      alt="coinbase Logo"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto w-fit "
                      src="amazon.svg"
                      alt="amazon Logo"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto  w-fit "
                      src="google.svg"
                      alt="google Logo"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto  w-fit "
                      src="nasdaq.svg"
                      alt="nasdaq Logo"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto  w-fit "
                      src="tytrading.svg"
                      alt="tytrading Logo"
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
        </div>
      </section>
    </div>
  );
}
