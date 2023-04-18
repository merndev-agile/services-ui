import React from "react";
import Marquee from "react-fast-marquee";

import text from "@/utils/text";

export const SlidingPanel = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`w-full h-[48px] flex flex-row items-center justify-between overflow-x-scroll font-bold mt-24 bg-transparent ${classes}`}
      style={{
        background:
          "linear-gradient(107.99deg, #FFCC97 -6.66%, #D5D9C5 94.52%)",
      }}
    >
      <Marquee className="marquee" speed={60}>
        {[...Array(8)].map((_, i) => (
          <p key={i} className="text-black mx-4">{text.slidingPannel}</p>
        ))}
      </Marquee>
    </div>
  );
};
