import Image from "next/image";

import text from "@/utils/text";
import { TextComponent } from "../../../components/TextComponent/TextComponent";

export const ComponentRow3 = () => (
  <div className="xl:w-full flex flex-row justify-end items-end xsm:flex-col xsm:ml-0 xsm:w-[90%] md:w-[100%] md:flex-col md:items-start md:mt-24  mb-[140px] xsm:mb-[78px] lg:w-full">
    <Image
      alt="Frame"
      src={"/image/Frame-2.png"}
      width={410}
      height={410}
      style={{
        height: "fit-content",
      }}
    />
    <TextComponent
      heading={text.blockChainScalability}
      imageSource="/icons/blockchain-stability.png"
      paragraph={text.blockChainScalabilityParagraph}
      classValues="items-start mt-0 xl:w-[410px] xl:ml-[30px] xl:h-[410px] xs:w-full xsm:mt-[3rem] md:w-full md:mt-[20px] 2xl:w-[410px] 2xl:ml-[30px] 2xl:h-[410px] lg:w-[410px] lg:ml-[30px] lg:h-[410px] xl:mr-[13px]"
      textHeadingClass="xl:!mt-0 2xl:!mt-0 lg:!mt-0"
      imageClass="xl:!mt-[60px] 2xl:!mt-[60px]"
    />
  </div>
);
