"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-blue text-white z-50 border-b border-secondary-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image
                src="/alfa-insurance-logo.png"
                alt="Alpha Trust Insurance Kft."
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-2xl font-bold font-antonio">
              ALPHA TRUST INSURANCE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="hover:text-blue-300 transition font-telegraf"
            >
              Szolgáltatásaink
            </a>
            <a
              href="#about"
              className="hover:text-blue-300 transition font-telegraf"
            >
              Bemutatkozás
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 transition font-telegraf"
            >
              Kapcsolat
            </a>
            <a
              href="#free-quote"
              className="bg-highlight-blue px-4 py-2 rounded-md hover:bg-light-blue transition font-telegraf font-bold"
            >
              Ingyenes Ajánlat
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-secondary-blue md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <a
              href="#services"
              className="text-white hover:text-blue-300 transition font-telegraf"
            >
              Szolgáltatásaink
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-300 transition font-telegraf"
            >
              Bemutatkozás
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 transition font-telegraf"
            >
              Kapcsolat
            </a>
            <a
              href="#free-quote"
              className="bg-highlight-blue px-4 py-2 rounded-md hover:bg-light-blue transition text-center font-telegraf font-bold"
            >
              Ingyenes Ajánlat
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
