import React from "react";
import { motion } from "framer-motion";

export default function Nft() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="h-screen font-Roboto flex justify-center items-center text-3xl"
    >
      <motion.div
        initial={{ width: "0vw", x: "50vw" }}
        animate={{ width: "15vw", x: 0 }}
        transition={{ duration: 1, origin: 1 }}
      >
        NFT
      </motion.div>
    </motion.div>
  );
}
