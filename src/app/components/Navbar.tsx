"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-blue/80 backdrop-blur-md text-white z-50 border-b border-secondary-blue shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-14 w-14 mr-3 transition-transform group-hover:scale-105">
              <Image
                src="/alfa-insurance-logo.png"
                alt="Alpha Trust Insurance Kft."
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-3xl font-bold font-antonio tracking-wider transition-colors group-hover:text-highlight-blue">
              ALPHA TRUST INSURANCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="hover:text-highlight-blue transition font-telegraf relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-highlight-blue after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
            >
              Főoldal
            </Link>
            <a
              href="/szolgaltatasok"
              className="hover:text-highlight-blue transition font-telegraf relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-highlight-blue after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
            >
              Szolgáltatásaink
            </a>
            <a
              href="/bemutatkozas"
              className="hover:text-highlight-blue transition font-telegraf relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-highlight-blue after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
            >
              Bemutatkozás
            </a>
            <a
              href="/kapcsolat"
              className="hover:text-highlight-blue transition font-telegraf relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-highlight-blue after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
            >
              Kapcsolat
            </a>
            <a
              href="#free-quote"
              className="px-5 py-2 rounded-md border-2 font-telegraf font-bold shadow-sm ml-2 transition-colors duration-200"
              style={{
                background: "#E2C044",
                color: "#0C1D3D",
                borderColor: "#E2C044",
                boxShadow: "0 2px 12px 0 rgba(226,192,68,0.10)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#0C1D3D";
                e.currentTarget.style.color = "#E2C044";
                e.currentTarget.style.borderColor = "#E2C044";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#E2C044";
                e.currentTarget.style.color = "#0C1D3D";
                e.currentTarget.style.borderColor = "#E2C044";
              }}
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
              className="h-7 w-7"
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

      {/* Mobile Menu */}
      <div
        className={`bg-secondary-blue/95 backdrop-blur-md md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          boxShadow: isMobileMenuOpen
            ? "0 8px 32px 0 rgba(44,62,80,0.15)"
            : "none",
        }}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            className="text-white hover:text-highlight-blue transition font-telegraf text-lg"
          >
            Főoldal
          </Link>
          <a
            href="/szolgaltatasok"
            className="text-white hover:text-highlight-blue transition font-telegraf text-lg"
          >
            Szolgáltatásaink
          </a>
          <a
            href="/bemutatkozas"
            className="text-white hover:text-highlight-blue transition font-telegraf text-lg"
          >
            Bemutatkozás
          </a>
          <a
            href="/kapcsolat"
            className="text-white hover:text-highlight-blue transition font-telegraf text-lg"
          >
            Kapcsolat
          </a>
          <a
            href="#free-quote"
            className="px-5 py-2 rounded-md border-2 font-telegraf font-bold shadow-sm mt-2 transition-colors duration-200 text-center"
            style={{
              background: "#E2C044",
              color: "#0C1D3D",
              borderColor: "#E2C044",
              boxShadow: "0 2px 12px 0 rgba(226,192,68,0.10)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#0C1D3D";
              e.currentTarget.style.color = "#E2C044";
              e.currentTarget.style.borderColor = "#E2C044";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E2C044";
              e.currentTarget.style.color = "#0C1D3D";
              e.currentTarget.style.borderColor = "#E2C044";
            }}
          >
            Ingyenes Ajánlat
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
