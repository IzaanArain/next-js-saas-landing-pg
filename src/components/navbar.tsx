"use client";

import { useState } from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div
        className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl
      mx-auto px-4 py-3 flex justify-between items-center 
      rounded-xl border border-neutral-800"
      >
        <div className="w-30 h-6">
          <Image src={logo} alt="logo" unoptimized />
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-neutral-200">
            How it works
          </Link>
          <Link href="#" className="hover:text-neutral-200">
            Pricing
          </Link>
          <Link href="#" className="hover:text-neutral-200">
            Testimonials
          </Link>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <Link href="#" className="hover:text-neutral-200">
            Login
          </Link>
          <Link
            href="#"
            className="border border-neutral-700 text-white 
            py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
          >
            Get a Demo
          </Link>
          <Link
            href="#"
            className="bg-blue-600 text-white py-2 px-4
          rounded-lg hover:bg-blue-600 transition"
          >
            Start Free Trial
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-neutral-900/60 backdrop-blur-md 
        border border-neutral-800 p-4 rounded-xl mt-2"
        >
          <div className="flex flex-col space-y-4">
            <Link href="#" className="hover:text-neutral-200">
              Product
            </Link>
            <Link href="#" className="hover:text-neutral-200">
              Pricing
            </Link>
            <Link href="#" className="hover:text-neutral-200">
              Resources
            </Link>
            <Link href="#" className="hover:text-white">
              login
            </Link>
            <Link
              href="#"
              className="border border-neutral-700 text-white 
            py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get a Demo
            </Link>
            <Link
              href="#"
              className="bg-blue-600 text-white py-2 px-4
          rounded-lg hover:bg-blue-600 transition"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
