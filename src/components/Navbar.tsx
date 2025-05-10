"use client";
import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div className="max-w-7xl mx-auto flex items-center h-20 px-4">
      <div className="flex-1">
        <span className="text-3xl font-extrabold tracking-wide text-[#4d4d7a] font-sans select-none">
          SoftSell
        </span>
      </div>
      <div className="flex-3 flex justify-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-[#c5baff] font-bold"
          className="mx-4 cursor-pointer text-lg font-medium text-[#4d4d7a] hover:text-[#c5baff] transition-all"
        >
          Home
        </Link>
        <Link
          to="how-it-works"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-[#c5baff] font-bold"
          className="mx-9 cursor-pointer text-lg font-medium text-[#4d4d7a] hover:text-[#c5baff] transition-all"
        >
          How It Works
        </Link>
        <Link
          to="why-choose-us"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-[#c5baff] font-bold"
          className="mx-4 cursor-pointer text-lg font-medium text-[#4d4d7a] hover:text-[#c5baff] transition-all"
        >
          Why Choose Us
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-[#c5baff] font-bold"
          className="mx-4 cursor-pointer text-lg font-medium text-[#4d4d7a] hover:text-[#c5baff] transition-all"
        >
          Testimonials
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-[#c5baff] font-bold"
          className="mx-4 cursor-pointer text-lg font-medium text-[#4d4d7a] hover:text-[#c5baff] transition-all"
        >
          Contact
        </Link>
      </div>
      <div className="flex-1"></div>
    </div>
  </nav>
);

export default Navbar;
