import text from "@/utils/text";
import { ComponentRow1, ComponentRow2 } from "./components";

export const EnvironmentStatement: React.FC = () => {
  return (
    <div
      className="text-white flex justify-center mx-[8rem] mt-[8rem] mb-[12rem] xsm:mx-6 md:mx-[4rem]"
    >
      <div className="flex-col self-start w-full">
        <span className="text-8xl font-Inter font-bold uppercase xsm:text-[3.35rem] xsm:relative xsm:right-3 xxsm:!text-[3.25rem]">
          {text.environmentStatment}
        </span>
        <div className="flex flex-col mb-10">
          <ComponentRow1 />
          <ComponentRow2 />
        </div>
      </div>
    </div>
  );
};
