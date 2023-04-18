import text from "@/utils/text";
import { TextComponent } from "../../../components/TextComponent/TextComponent";

export const ComponentRow2 = () => (
  <div className="w-full flex flex-row items-start mb-10 xsm:flex-col xsm:w-full md:w-[100%]">
    <TextComponent
      heading={text.rewards}
      imageSource="/icons/reward.png"
      paragraph={text.rewardsparagraph}
      classValues="xl:w-[410px] xsm:mb-10 md:w-[50%] 2xl:w-[410px]"
    />
    <TextComponent
      heading={text.nodeBuildTemplate}
      hasIconHeading={false}
      imageSource="/icons/node-build.png"
      paragraph={text.nodeBuildTemplateParagraph}
      classValues="xl:w-[410px] xl:ml-[60px] xsm:mb-10 md:w-[50%] md:ml-[60px] 2xl:w-[410px] 2xl:ml-[60px]"
    />
  </div>
);
