import Image from "next/image";

import text from "@/utils/text";
import { TextComponent } from "../../../components/TextComponent/TextComponent";

export const ComponentRow1 = () => (
  <div className="flex xl:flex-row xsm:flex-col justify-between mt-[40px] mb-8 xsm:mt-[24px] md:flex-col 2xl:flex-row">
    <div className="flex xl:flex-row xsm:flex-col 2xl:flex-row">
      <TextComponent
        heading={text.coNodes}
        hasIconHeading={true}
        iconHeading="R"
        imageSource="/icons/co-nodes.png"
        paragraph={text.coNodesParagraph}
        classValues={"xsm: mb-16 w-[450px] lg:w-[350px] md:w-[45%]"}
      />
      <TextComponent
        heading={text.managedNodes}
        hasIconHeading={false}
        imageSource="/icons/managed-nodes.png"
        paragraph={text.managedNodesParagraph}
        classValues={"xl:ml-[25px] xsm:ml-0 xsm:mb-24 md:ml-[20px] md:w-[45%] w-[410px] 2xl:w-[410px] 2xl: ml-[30px] lg:w-[310px]"}
      />
    </div>
    <div className="xl:ml-[30px] xsm:w-[95%] md:flex md:flex-row md:w-full 2xl:ml-[30px] lg:ml-[30px]">
      <Image
        alt="Frame"
        src={"/image/Frame-1.png"}
        width={380}
        height={380}
        style={{
          height: "fit-content",
        }}
      />
      <TextComponent
        heading={text.nodeAsAService}
        imageSource="/icons/node-service.png"
        paragraph={text.nodeAsAServiceParagraph}
        classValues="xl:w-[410px] xsm:mt-16 xsm:mb-8 md:[35%] md:ml-4 md:!mt-0 2xl:w-[410px] lg:w-[410px]"
      />
    </div>
  </div>
);
