"use client";

import { Element } from "react-scroll";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";
import React from "react";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Element name="hero">
        <HeroSection />
      </Element>
      <Element name="how-it-works">
        <HowItWorks />
      </Element>
      <Element name="why-choose-us">
        <WhyChooseUs />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <ContactForm />
      </Element>
      <ChatWidget />
    </>
  );
};

export default page;
