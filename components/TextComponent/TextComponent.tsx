import Image from "next/image";

export type Props = {
  heading: string;
  iconHeading?: string;
  paragraph: string;
  imageSource: string;
  hasIconHeading?: boolean;
  marginleftVal?: number | string;
  width?: number | string;
  styles?: React.CSSProperties;
  isSecondParagraphPresent?: boolean;
  secondParagraph?: string;
  classValues?: string;
  textHeadingClass?: string;
  imageClass?: string;
};
export const TextComponent = ({
  heading,
  iconHeading,
  paragraph,
  imageSource,
  hasIconHeading,
  styles,
  isSecondParagraphPresent,
  secondParagraph,
  classValues,
  textHeadingClass,
  imageClass,
}: Props) => {
  return (
    <div
      className={`flex flex-col items-center xsm:w-[100%] ${classValues}`}
      style={{
        ...styles,
      }}
    >
      <div className="flex xl:flex-row items-center w-full">
        <span
          className={`mt-8 uppercase font-Roboto text-2xl/[24px] xsm:text-[24px] ${textHeadingClass}`}
        >
          {heading}
        </span>
        {hasIconHeading && (
          <span className="ml-[4px] mt-[12px] flex justify-center items-center text-[7px] h-[7px] p-[5px] w-[7px] border-[1px] rounded-[50px]">
            {iconHeading}
          </span>
        )}
      </div>
      <div className="flex flex-col">
      <span className="font-Roboto text-[18px]/[30px] mt-[8px] opacity-70 xms:text-[16px] xsm:mt-[8px]">
        {`${paragraph}`}
        {isSecondParagraphPresent && <p className="mt-4 xms:text-[16px]">{secondParagraph}</p>}
        </span>
        <Image
          src={imageSource}
          alt="images"
          width={20}
          height={18}
          className={`mt-[35px] ${imageClass}`}
        />
        </div>
    </div>
  );
};
