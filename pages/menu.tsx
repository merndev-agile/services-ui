import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { SlidingPanel } from "@/components/SlidingPanel/SlidingPanel";
import { Header } from "@/screens/Header/Header";
import { MenuList } from "@/utils/typescriptTypes";

const menuList: Array<MenuList> = [
  {
    name: "Genesis pass",
    link: "/menuList/genesisPass",
  },
  {
    name: "services",
    link: "/menuList/services",
  },
  {
    name: "projects",
    link: "/menuList/projects",
  },
  {
    name: "nft",
    link: "/menuList/nft",
  },
  {
    name: "faq",
    link: "/menuList/faq",
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function menu() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="flex flex-col justify-between"
    >
      <motion.div variants={stagger} className="flex flex-col h-[75vh]">
        <Header
          menuLink="/"
          menuIcon="/icons/close-icon.png"
          menuIconWidth={12}
          menuIconHeight={12}
        />
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center h-[100%] mx-[1rem]"
        >
          {menuList.map((menuitem, index) => {
            return (
              <Link
                className="uppercase font-Roboto m-4 text-xl"
                key={index}
                href={menuitem.link}
              >
                {menuitem.name}
              </Link>
            );
          })}
          <div className="flex flex-row items-center justify-between">
            <span className="uppercase font-Roboto m-4 text-xl opacity-40">Pratform</span>
            <span className="uppercase font-Roboto m-4 text-xl opacity-40">
              Coming Soon{" "}
            </span>
          </div>
        </motion.div>
      </motion.div>
      <div className="h-[25vh] flex items-end">
        <SlidingPanel classes="!my-0" />
      </div>
    </motion.div>
  );
}
