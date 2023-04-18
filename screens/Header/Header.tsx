import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import text from "@/utils/text";
import { MenuItemProps } from "@/utils/typescriptTypes";

export const Header = ({
  menuLink,
  menuIcon,
  menuIconWidth,
  menuIconHeight,
}: MenuItemProps) => {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  return (
    <div className="font-normal flex items-center flex-row text-white justify-between mx-[35px] h-[50px]">
      <div className="flex items-center flex-row">
        <Image
          src="/icons/headerIcon.png"
          alt="Header"
          height={40}
          width={40}
          className="text-sm mr-[16px]"
        />
        <p className="font-Roboto text-base/[16px]">{text.headerTitle}</p>
      </div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        {screenWidth > 700 ? (
          <p className="font-Roboto text-base/[16px]">{text.logo}</p>
        ) : (
          <Link href={menuLink}>
            <Image
              alt="menu icon"
              src={menuIcon}
              width={menuIconWidth}
              height={menuIconHeight}
            />
          </Link>
        )}
      </motion.div>
    </div>
  );
};
