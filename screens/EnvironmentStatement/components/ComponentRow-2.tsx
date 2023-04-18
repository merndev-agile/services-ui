import { TextComponent } from "@/components/TextComponent/TextComponent";
import text from "@/utils/text";
import Image from "next/image";

export const ComponentRow2 = () => (
  <div className="flex flex-row justify-end items-end xsm:flex-col xsm:ml-0 xsm:w-[90%] md:w-full md:ml-0 md:flex-col md:items-start ml-[4rem] xl:mb-[140px] 2xl:mb-[140px] lg:mb-[140px]">
    <Image
      alt="Frame"
      src={"/image/Frame-3.png"}
      width={410}
      height={410}
      style={{
        height: "fit-content",
      }}
    />
    <TextComponent
      heading={text.nodeArmy}
      imageSource="/icons/node-army.png"
      paragraph={text.nodeArmyParagraph}
      classValues="items-start mt-0 xl:w-[410px] xl:h-[410px] xl:ml-[30px] xl:mr-[4rem] md:w-[100%] 2xl:w-[410px] 2xl:h-[410px] 2xl:ml-[30px] 2xl:mr-[4rem] lg:w-[410px] lg:h-[410px] lg:ml-[30px]"
      textHeadingClass="xl:!mt-0 2xl:!mt-0 lg:!mt-0"
    />
  </div>
);
