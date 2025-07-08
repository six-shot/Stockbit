import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

export default function StartInvesting() {
  return (
    <div className="px-5 mt-2.5">
      <div className="bg-[#F5F4FC] rounded-[24px] border-[3px] border-[rgba(71,108,255,0.02)] md:py-[151px] py-[50px] flex flex-col justify-center items-center relative overflow-hidden md:px-0 px-5">
        <Image src="invest.svg" alt="invest.svg" width={1472} height={952} className='absolute -top-[5px] w-full'/>
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
