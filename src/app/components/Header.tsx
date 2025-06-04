"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-purdue-black text-white py-4 border-double border-b-2 border-purdue-gold">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo and Lab Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center h-10 w-10 md:h-12 md:w-12">
                <Image
                  src="/lab-logo.png"
                  alt="Ciampitti Lab Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  priority
                />
              </div>
              <h1 className="text-purdue-white text-xl md:text-2xl">
                Ciampitti Lab
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-heading">
            <Link href="/" className="hover:text-purdue-gold transition-colors">
              Home
            </Link>
            <Link
              href="/research"
              className="hover:text-purdue-gold transition-colors"
            >
              Research
            </Link>
            <Link
              href="/projects"
              className="hover:text-purdue-gold transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="hover:text-purdue-gold transition-colors"
            >
              Team Members
            </Link>
            <Link
              href="/news"
              className="hover:text-purdue-gold transition-colors"
            >
              News & Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-purdue-gold transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3 font-heading">
            <Link
              href="/"
              className="block hover:text-purdue-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/research"
              className="block hover:text-purdue-gold transition-colors"
            >
              Research
            </Link>
            <Link
              href="/projects"
              className="block hover:text-purdue-gold transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/news"
              className="block hover:text-purdue-gold transition-colors"
            >
              News & Blog
            </Link>
            <Link
              href="/team"
              className="block hover:text-purdue-gold transition-colors"
            >
              Team Members
            </Link>
            <Link
              href="/about"
              className="block hover:text-purdue-gold transition-colors"
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
