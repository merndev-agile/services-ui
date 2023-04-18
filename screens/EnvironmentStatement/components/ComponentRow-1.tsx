import { TextComponent } from "@/components/TextComponent/TextComponent";
import text from "@/utils/text";

export const ComponentRow1 = () => (
  <div className="flex flex-row mt-10 items-start xsm:flex-col mb-[7rem]">
    <TextComponent
      heading={text.proofOfStake}
      imageSource="/icons/proof-of-stake.png"
      paragraph={text.proofOfStakeParagraph}
      isSecondParagraphPresent
      secondParagraph={text.proofOfStakeSecondParagraph}
      classValues="xl:w-[410px] xsm:mb-12 md:w-[45%] 2xl:w-[410px] lg:w-[310px]"
    />
    <TextComponent
      heading={text.cloudComputing}
      imageSource="/icons/cloud-computing.png"
      paragraph={text.cloudComputingParagraph}
      isSecondParagraphPresent
      secondParagraph={text.cloudComputingSecondParagraph}
      classValues="xl:w-[410px] xl:ml-[60px] xsm:mb-12 md:ml-[45px] md:w-[45%] ml-[30px] xsm:ml-[0px] 2xl:w-[410px] 2xl:ml-[60px] lg:w-[310px] lg:ml-[60px]"
    />
  </div>
);
