import React from "react";
import { motion } from "framer-motion";

import { AccordionItem, AccordionProps } from "@/utils/typescriptTypes";

export const Accordion = ({ items }: AccordionProps) => {
  const [openQuestionIndex, setOpenQuestionIndex] = React.useState<number>(-1);

  return (
    <>
      {items.map((item: AccordionItem, index: number) => {
        const isOpen = openQuestionIndex === index;
        return (
          <div
            className="w-full mt-[67px]"
            key={index}
            onClick={() => setOpenQuestionIndex(isOpen ? -1 : index)}
          >
            <motion.div
              transition={{
                layout: {
                  duration: 1,
                  type: "spring",
                },
              }}
              className="flex flex-col cursor-pointer"
            >
              <div
                className="w-100"
                style={{
                  background: isOpen
                    ? "linear-gradient(107.99deg, #FFCC97 -6.66%, #D5D9C5 94.52%)"
                    : "",
                }}
              >
                <div className="w-[80%] flex flex-row justify-between items-center xsm:w-full md:!items-baseline">
                  <span
                    className={`uppercase font-medium text-[28px] xsm:text-[20px] xsm:w-[80%] ${
                      isOpen ? "text-black" : "text-white"
                    }`}
                  >
                    {item.Question}
                  </span>
                  {!isOpen ? (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill="currentColor"
                        d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
                      />
                      <path fill="none" d="M0 0h24v24H0V0z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill={isOpen ? "black" : "white"}
                        d="M19 11H13V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
                      />
                      <path fill="none" d="M0 0h24v24H0V0z" />
                    </svg>
                  )}
                </div>
              </div>
              {isOpen && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  className="font-Roboto opacity-75 my-4 text-[18px] leading-[2rem] w-[80%]"
                >
                  {item.Answer}
                </motion.p>
              )}
            </motion.div>
          </div>
        );
      })}
    </>
  );
};
