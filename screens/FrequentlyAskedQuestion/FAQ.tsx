import React from "react";
import { Accordion } from "./components/Accordion";
import text, { faqItems } from "@/utils/text";

export const FAQ: React.FC = () => {
  return (
    <div className="text-white flex justify-center mx-[8rem] mt-10 mb-24 xsm:mx-6 xsm:mb-[8rem] md:mx-[4rem]">
      <div className="flex-col self-start w-full">
        <span className="text-8xl font-Inter font-bold uppercase xsm:text-6xl xxsm:!text-[3.25rem]">
          {text.frequentlyAsked}
        </span>
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};
