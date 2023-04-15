import { TextComponent } from "@/components/TextComponent/TextComponent";
import text from "@/utils/text";

export const ComponentRow1 = () => (
  <div className="flex flex-row mt-10 w-full items-start xsm:flex-col mb-[7rem]">
    <TextComponent
      heading={text.proofOfStake}
      imageSource="/icons/proof-of-stake.png"
      paragraph={text.proofOfStakeParagraph}
      isSecondParagraphPresent
      secondParagraph={text.proofOfStakeSecondParagraph}
      classValues="xl:w-[35%] xsm:mb-12 md:w-[45%]"
    />
    <TextComponent
      heading={text.cloudComputing}
      imageSource="/icons/cloud-computing.png"
      paragraph={text.cloudComputingParagraph}
      isSecondParagraphPresent
      secondParagraph={text.cloudComputingSecondParagraph}
      classValues="xl:w-[40%] xl:ml-[45px] xsm:mb-12 md:ml-[45px] md:w-[45%]"
    />
  </div>
);
