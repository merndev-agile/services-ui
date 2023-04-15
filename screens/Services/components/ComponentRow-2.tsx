import text from "@/utils/text";
import { TextComponent } from "../../../components/TextComponent/TextComponent";

export const ComponentRow2 = () => (
  <div className="w-[85%] flex flex-row mb-10 xsm:flex-col xsm:w-full md:w-[100%]">
    <TextComponent
      heading={text.rewards}
      imageSource="/icons/reward.png"
      paragraph={text.rewardsparagraph}
      classValues="xl:w-[40%] xsm:mb-10 md:w-[50%]"
    />
    <TextComponent
      heading={text.nodeBuildTemplate}
      hasIconHeading={false}
      imageSource="/icons/node-build.png"
      paragraph={text.nodeBuildTemplateParagraph}
      classValues="xl:w-[40%] xl:ml-[60px] xsm:mb-10 md:w-[50%] md:ml-[60px]"
    />
  </div>
);
