"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import {
  FaTags,
  FaBolt,
  FaLock,
  FaSmile,
  FaBuilding,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaTags size={36} className="text-[#4d4d7a]" />,
    title: "Best Price Guarantee",
    description:
      "We analyze the market to offer the most competitive prices for your software licenses.",
  },
  {
    icon: (
      <span className="flex space-x-2">
        <FaBolt size={32} className="text-[#4d4d7a]" />
        <FaLock size={28} className="text-[#4d4d7a]" />
      </span>
    ),
    title: "Fast & Secure Payouts",
    description:
      "Get paid quickly and safely through trusted payment gateways.",
  },
  {
    icon: <FaSmile size={36} className="text-[#4d4d7a]" />,
    title: "Hassle-Free Process",
    description:
      "Our 3-step process ensures minimal effort - no complicated forms, no hidden fees.",
  },
  {
    icon: (
      <span className="flex space-x-2">
        <FaBuilding size={32} className="text-[#4d4d7a]" />
        <FaHandshake size={32} className="text-[#4d4d7a]" />
      </span>
    ),
    title: "Trusted by Teams",
    description:
      "Used by professionals and IT teams across industries to reclaim software ROI.",
  },
];

const rowVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.7, type: "spring", bounce: 0.2 },
  }),
};

const WhyChooseUs = () => (
  <section
    id="why-choose-us"
    className="w-full py-20 bg-gradient-to-b from-[#e8f9ff] via-[#c4d9ff] to-[#fbfbfb] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#4d4d7a] mb-12 text-center">
      Why Choose Us
    </h2>
    <div className="w-full max-w-3xl flex flex-col gap-8 px-4">
      {reasons.map((reason, i) => (
        <motion.div
          key={reason.title}
          className="flex items-center bg-white rounded-2xl shadow-md p-6 md:p-8"
          initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={i}
          variants={rowVariants}
        >
          <div className="mr-6 flex-shrink-0">{reason.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-[#4d4d7a] mb-1">
              {reason.title}
            </h3>
            <p className="text-[#4d4d7a] text-base">{reason.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
