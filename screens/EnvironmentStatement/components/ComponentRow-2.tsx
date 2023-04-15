import { TextComponent } from "@/components/TextComponent/TextComponent";
import text from "@/utils/text";
import Image from "next/image";

export const ComponentRow2 = () => (
  <div className="w-[80%] ml-[22rem] flex flex-row justify-end items-end xsm:flex-col xsm:ml-0 xsm:w-[90%] md:w-full md:ml-0 md:flex-col md:items-start">
    <Image
      alt="Frame"
      src={"/image/Frame-3.png"}
      width={380}
      height={380}
      style={{
        height: "fit-content",
        borderRadius: 8,
      }}
    />
    <TextComponent
      heading={text.nodeArmy}
      imageSource="/icons/node-army.png"
      paragraph={text.nodeArmyParagraph}
      classValues="items-start mt-0 xl:w-[38%] xl:ml-[40px] xl:mr-[4rem] md:w-[100%]"
    />
  </div>
);
