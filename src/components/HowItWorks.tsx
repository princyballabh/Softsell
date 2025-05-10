"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUpload, FaSearchDollar, FaMoneyCheckAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={40} className="text-[#4d4d7a]" />,
    title: "Upload License",
    description:
      "Easily upload your unused software license in just a few clicks. No tech skills needed.",
  },
  {
    icon: <FaSearchDollar size={40} className="text-[#4d4d7a]" />,
    title: "Get Valuation",
    description:
      "Our system instantly provides a fair market valuation for your license.",
  },
  {
    icon: <FaMoneyCheckAlt size={40} className="text-[#4d4d7a]" />,
    title: "Get Paid",
    description:
      "Accept the offer and receive your payment quickly and securely.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.7,
      type: "spring",
      bounce: 0.5,
    },
  }),
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="w-full py-20 bg-gradient-to-b from-[#c5baff] via-[#c4d9ff] to-[#e8f9ff] flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#4d4d7a] mb-12 text-center">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl px-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-8 flex-1 min-h-[240px] min-w-[260px] max-w-xs"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={cardVariants}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold text-[#4d4d7a] mb-2">
              {step.title}
            </h3>
            <p className="text-[#4d4d7a] text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
