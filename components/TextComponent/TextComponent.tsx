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
}: Props) => {
  return (
    <div
      className={`flex flex-col items-center w-[60%] xsm:w-[100%] ${classValues}`}
      style={{
        ...styles,
      }}
    >
      <div className="flex xl:flex-row items-center w-full">
        <span className="mt-8 uppercase font-Roboto text-2xl/[24px]">
          {heading}
        </span>
        {hasIconHeading && (
          <span
            style={{
              borderRadius: 50,
              borderWidth: 1,
              width: 7,
              padding: 5,
              height: 7,
              fontSize: 7,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 12,
              marginLeft: 4,
            }}
          >
            {iconHeading}
          </span>
        )}
      </div>
      <span className="font-Roboto text-[18px]/[30px] mt-4 opacity-70">
        {`${paragraph}`}
        {isSecondParagraphPresent && <p className="mt-4">{secondParagraph}</p>}
        <Image
          src={imageSource}
          alt="images"
          width={20}
          height={18}
          className="mt-6"
        />
      </span>
    </div>
  );
};
