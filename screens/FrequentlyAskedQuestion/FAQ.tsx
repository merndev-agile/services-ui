import React from "react";
import { Accordion } from "./components/Accordion";
import text, { faqItems } from "@/utils/text";

export const FAQ: React.FC = () => {
  return (
    <div className="text-white flex justify-center mx-[4rem] mt-[80px] mb-[15rem] xsm:mx-6 xsm:mb-[8rem] md:mx-[4rem]">
      <div className="flex-col self-start w-full">
        <span className="text-[120px] font-Inter font-bold uppercase xsm:text-6xl xxsm:!text-[3.25rem] md:text-[100px] leading-[110px]">
          {text.frequentlyAsked}
        </span>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};
