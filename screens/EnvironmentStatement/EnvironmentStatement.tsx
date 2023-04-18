import text from "@/utils/text";
import { ComponentRow1, ComponentRow2 } from "./components";

export const EnvironmentStatement: React.FC = () => {
  return (
    <div
      className="text-white flex xl:mx-[4rem] mt-[80px] xsm:mx-6 md:!mx-[4rem] 2xl:mx-[315px] lg:mx-[8rem]"
    >
      <div className="flex-col self-start">
        <span className="text-[120px] font-Inter font-bold uppercase xsm:text-[45px] xxsm:!text-[45px] leading-[110px] xsm:leading-[41px] xxsm:!leading-[41px] md:text-[90px]">
          {text.environmentStatment}
        </span>
        <div className="flex flex-col mb-10 mt-[60px] xsm:mt-[10px]">
          <ComponentRow1 />
          <ComponentRow2 />
        </div>
      </div>
    </div>
  );
};
