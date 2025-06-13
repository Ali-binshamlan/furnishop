
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FurnitureImage from "../images/image 1.png";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function BestFurniture() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-10 md:flex-row md:items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.div className="w-full md:w-1/2" variants={fadeInLeft}>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-6">
          The Best Furniture <br />
          Manufacturer of your choice
        </h2>
        <p className="text-gray-600 text-lg w-full md:w-4/5">
          Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services
        </p>
      </motion.div>

      <motion.div className="w-full md:w-1/2 relative h-64 md:h-96" variants={fadeInRight}>
        <Image
          src={FurnitureImage}
          alt="Furniture"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
