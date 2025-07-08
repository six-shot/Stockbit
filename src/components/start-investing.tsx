import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

export default function StartInvesting() {
  return (
    <div className="px-5 mt-2.5 relative">
      <div className="absolute top-[135px] left-[203px] z-[100]">
        <div className="bg-white border border-[#E1E4EA] md:p-6 p-4 rounded-[16px] w-[253px]">
          <div className="flex justify-between items-start">
            <div className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-[#EBF1FF] borrder border-[#D5E2FF] rounded-[9px] flex justify-center items-center">
              <Image
                src="chart.svg"
                alt="chart"
                width={27}
                height={27}
                className="md:w-[27px] h-[16px] md:h-[27px] w-[16px]"
              />
            </div>
            <div className="px-1 h-[22px] bg-[#F0FDF4] rounded-[16px] flex items-center gap-[2px]">
              <Image width={16} height={16} src="up.svg" alt="up" />
              <h6 className="text-xs text-[#008236] font-[family-name:var(--font-fig-tree)]">
                +8.2%
              </h6>
            </div>
          </div>

          <div className="md:mt-[18px] mt-[14px]">
            <div>
              <h5 className="text-[#0E121B] leading-[48px] font-[family-name:var(--font-cal-sans)] md:text-[24px] text-[20px]">
             1247
              </h5>
            </div>
            <p className="text-[#525866] md:text-[16px] text-sm font-medium font-[family-name:var(--font-fig-tree)]">
          Active products
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F4FC] rounded-[24px] border-[3px] border-[rgba(71,108,255,0.02)] md:py-[151px] py-[50px] flex flex-col justify-center items-center relative overflow-hidden md:px-0 px-5">
        <Image
          src="invest.svg"
          alt="invest.svg"
          width={1472}
          height={952}
          className="absolute -top-[5px] w-full"
        />
        <h2 className="text-[#0E121B] md:text-[72px] text-[36px] tracking-[-2.88px] md:leading-[90px] leading-[50px] font-[family-name:var(--font-cal-sans)] text-center ">
          Start Investing with <br /> Stockbits Today
        </h2>
        <p className="text-[#525866] md:w-[607px] text-center md:text-[20px] text-base font-[family-name:var(--font-fig-tree)] mt-4 mb-8">
          .Buy tokenized assets, manage your portfolio, and participate in DeFi
          all from one clean interface.
        </p>
        <Button asChild variant="default" size="sm">
          <Link href="#">
            <span>Join now</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
