// navbar component
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              HME Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/story" className="hover:text-gray-300">
              Story
            </Link>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-800">
            Home
          </Link>
          <Link href="/story" className="block px-4 py-2 hover:bg-blue-800">
            Story
          </Link>
          <Link href="/products" className="block px-4 py-2 hover:bg-blue-800">
            Products
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-blue-800">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
    </div>
  )
}