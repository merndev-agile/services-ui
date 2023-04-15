import Image from "next/image";

import text from "@/utils/text";
import { TextComponent } from "../../../components/TextComponent/TextComponent";

export const ComponentRow1 = () => (
  <div className="w-full flex xl:flex-row xsm:flex-col justify-between mt-[4rem] mb-8 xsm:mt-[24px] md:flex-col">
    <div className="w-full flex xl:flex-row xsm:flex-col justify-between">
      <TextComponent
        heading={text.coNodes}
        hasIconHeading={true}
        iconHeading="R"
        imageSource="/icons/co-nodes.png"
        paragraph={text.coNodesParagraph}
        classValues={"xsm: mb-16"}
      />
      <TextComponent
        heading={text.managedNodes}
        hasIconHeading={false}
        imageSource="/icons/managed-nodes.png"
        paragraph={text.managedNodesParagraph}
        classValues={"xl:ml-[20px] xsm:ml-0 xsm:mb-24 md:ml-[20px]"}
      />
    </div>
    <div className="xl: w-[50%] xl:ml-6 xsm:w-[95%] md:flex md:flex-row md:w-full">
      <Image
        alt="Frame"
        src={"/image/Frame-1.png"}
        width={380}
        height={380}
        style={{
          height: "fit-content",
          borderRadius: 8,
        }}
      />
      <TextComponent
        heading={text.nodeAsAService}
        hasIconHeading={true}
        iconHeading="R"
        imageSource="/icons/node-service.png"
        paragraph= {text.nodeAsAServiceParagraph}
        classValues="xl:w-full xsm:mt-16 xsm:mb-8 md:[35%] md:ml-4 md:!mt-0"
      />
    </div>
  </div>
);
