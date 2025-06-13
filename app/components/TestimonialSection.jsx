"use client";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import personImg from "../images/Ellipse202.png";
import testimonialImg from "../images/Rectangle925.png";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const TestimonialSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white max-w-sm sm:max-w-md md:max-w-full mx-auto">
      
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-start self-start space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <h2 className="text-2xl md:text-[38px] font-bold text-gray-800 mb-10">
          What People Are Saying About Us
        </h2>

        <div className="flex items-center gap-4 ">
          <Image
            src={personImg}
            alt="Josh Smith"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">Josh Smith</h4>
            <p className="text-sm text-gray-500 ">Manager of The New York Times</p>
          </div>
        </div>

        <p className="text-gray-600 text-base leading-relaxed max-w-md mb-10">
          “They are have a perfect touch for make something so professional,
          interest and useful for a lot of people.”
        </p>

        <div className="flex gap-4">
          <button className="cursor-pointer p-3 border rounded-full hover:bg-[#286F6C] hover:text-white transition">
            <FiArrowLeft />
          </button>
          <button className="cursor-pointer p-3 border rounded-full hover:bg-[#286F6C] hover:text-white transition">
            <FiArrowRight />
          </button>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <Image
          src={testimonialImg}
          alt="Testimonial"
          width={562}
          height={400}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
