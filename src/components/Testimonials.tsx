"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "IT Manager",
    company: "TechNova Solutions",
    review:
      "“Selling our unused software licenses was effortless. The valuation was fair and the payout was lightning fast!”",
  },
  {
    name: "Rohan Verma",
    role: "Business Lead",
    company: "BluePeak Enterprises",
    review:
      "“A seamless experience from start to finish. Highly recommended for any business looking to optimize software spend.”",
  },
];

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => (
  <section
    id="testimonials"
    className="w-full py-20 bg-gradient-to-b from-[#fbfbfb] via-[#e8f9ff] to-[#c4d9ff] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#4d4d7a] mb-12 text-center">
      Customer Testimonials
    </h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl px-4">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 max-w-md w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={i}
          variants={cardVariants}
        >
          <FaUserCircle size={54} className="text-[#c5baff] mb-4" />
          <div className="text-center mb-4">
            <div className="text-lg font-semibold text-[#4d4d7a]">{t.name}</div>
            <div className="text-sm text-[#4d4d7a] opacity-80">
              {t.role}, {t.company}
            </div>
          </div>
          <blockquote className="italic text-[#4d4d7a] text-base leading-relaxed">
            {t.review}
          </blockquote>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
