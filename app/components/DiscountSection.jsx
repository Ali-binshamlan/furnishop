"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Discountimg_Ds from "../images/Rectangle928.png";
import Discountimg_Mb from "../images/Rectangle929.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const DiscountSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${isMobile ? Discountimg_Mb.src : Discountimg_Ds.src})`,
        backgroundPosition: isMobile ? "left" : "center center",
        backgroundSize: "cover",
        height: "455px",
        minHeight: "455px",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:items-end items-center h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-4 my-auto">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Get more discount
            <br />
            Off your order
          </h2>
          <p className="text-sm text-gray-200">Join our mailing list</p>

          <form className="flex flex-row justify-center items-center gap-3 mt-28 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 w-[185px] sm:w-72 rounded-md bg-white text-black text-sm"
            />

            <button
              type="submit"
              className="bg-[#23262F] text-white px-6 py-3 rounded-md hover:bg-black transition font-bold text-sm sm:text-base"
            >
              Shop Now
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default DiscountSection;
