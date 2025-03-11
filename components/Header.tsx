import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-green-700">
              KB Modern Agriculture
            </h1>
          </div>
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#mentoring"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Mentoring
            </a>
            <a
              href="#business"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Business
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
            >
              Contact
            </a>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#mentoring"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              Mentoring
            </a>
            <a
              href="#business"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              Business
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
