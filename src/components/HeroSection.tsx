"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="p-0 m-0 h-screen min-h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#fbfbfb] via-[#e8f9ff] via-40% to-[#c5baff]">
      <h1 className="text-4xl font-extrabold text-[#4d4d7a] mb-6 drop-shadow-lg">
        Turn Unused Software Into Instant Cash
      </h1>
      <motion.p
        className="text-lg md:text-2xl text-[#4d4d7a] max-w-2xl font-medium "
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
      >
        Sell your unused licenses in minutes. Get a free valuation and fast
        payout - no tech skills required.
      </motion.p>

      <motion.button
        className="relative top-15 bg-[#c5baff] text-[#4d4d7a] font-semibold px-5 py-2 rounded-full shadow hover:bg-[#c4d9ff] transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default HeroSection;
