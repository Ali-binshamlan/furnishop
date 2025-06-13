
"use client";
import Image from "next/image";
import furnitureImage from "../images/insert-image-here.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FeatureSection() {
  // Container animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Item animation variants for fade and slide up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Main container holding image and text side-by-side on desktop, stacked on mobile
    <motion.div
      className="flex flex-col-reverse md:flex-row items-center gap-15 px-6 py-12 max-w-[1150px] mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image section with subtle hover scale effect */}
      <motion.div
        className="w-full md:w-1/2"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={furnitureImage}
          alt="Furniture"
          className="w-full h-auto rounded-lg object-cover"
        />
      </motion.div>

      {/* Text content section with heading, description and features */}
      <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800"
          variants={itemVariants}
        >
          We Create your home more aestetic
        </motion.h2>

        <motion.p className="text-gray-600" variants={itemVariants}>
          Furnitre power is a software as services for multipurpose business management system.
        </motion.p>

        {/* Features list with icon and descriptions */}
        {[
          {
            title: "Valuation Services",
            description:
              "Sometimes features require a short description. This can be detailed description.",
          },
          {
            title: "Development of Furniture Models",
            description:
              "Sometimes features require a short description. This can be detailed description.",
          },
        ].map(({ title, description }, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4"
            variants={itemVariants}
          >
            <FaCheckCircle className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
              <p className="text-gray-600">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
