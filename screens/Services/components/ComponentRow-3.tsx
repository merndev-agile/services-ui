import Image from "next/image";

import text from "@/utils/text";
import { TextComponent } from "../../../components/TextComponent/TextComponent";

export const ComponentRow3 = () => (
  <div className="xl:w-[80%] xl:ml-[20rem] flex flex-row justify-end items-end xsm:flex-col xsm:ml-0 xsm:w-[90%] md:w-[100%] md:flex-col md:items-start md:mt-24">
    <Image
      alt="Frame"
      src={"/image/Frame-2.png"}
      width={380}
      height={380}
      style={{
        height: "fit-content",
        borderRadius: 8,
      }}
    />
    <TextComponent
      heading={text.blockChainScalability}
      imageSource="/icons/blockchain-stability.png"
      paragraph={text.blockChainScalabilityParagraph}
      classValues="items-start mt-0 xl:w-[35%] xl:ml-[40px] xl:mr-[4rem] xs:w-full xsm:mt-[3rem] md:w-full md:mt-[20px]"
    />
  </div>
);
