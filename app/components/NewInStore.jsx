
"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import Chair from "../images/lui-peng-8NxTrV6i4WQ-unsplash.png";
import Bad from "../images/erik-mclean-Ij9nIghkI6k-unsplash.png";
import Cupboard from "../images/sanibell-bv-g01h0WtY22s-unsplash.png";
import Lighting from "../images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.png";

const images = [
  { src: Chair, title: "Chair" },
  { src: Bad, title: "Bad" },
  { src: Cupboard, title: "Cupboard" },
  { src: Lighting, title: "Lighting" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInX = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function NewInStore() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
      <motion.div
        className="md:w-1/4 flex flex-col gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap md:whitespace-normal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h3
          className="inline-block text-4xl font-extrabold text-[#23262F] font-saira capitalize mr-6"
          variants={fadeInUp}
        >
          New In
        </motion.h3>
        <motion.h2
          className="inline-block text-[40px] font-semibold leading-[130%] text-[#23262F] mb-4 md:mb-20 capitalize mr-6"
          variants={fadeInUp}
        >
          Store Now
        </motion.h2>
        <motion.p
          className="inline-block text-gray-600 max-w-sm mt-2 mb-4 md:mt-10 md:mb-10 mr-6"
          variants={fadeInUp}
        >
          Get the latest items immediately with promo prices
        </motion.p>
        <motion.button
          className="mx-3 cursor-pointer inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition w-max mr-4"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Check All <FiArrowRight className="ml-2 text-lg" />
        </motion.button>
      </motion.div>

      <motion.div
        className="md:w-3/4 flex gap-6 md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-pl-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {images.map(({ src, title }, i) => (
          <motion.div
            key={i}
            className="relative flex-shrink-0 w-[300px] md:flex-1 min-w-[200px] h-[400px] rounded-lg overflow-hidden shadow-md snap-center cursor-pointer"
            variants={slideInX}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={src} alt={title} fill className="object-cover" priority={i < 2} />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2  bg-opacity-50 px-3 py-2 rounded text-white font-semibold text-lg text-center">
              {title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
