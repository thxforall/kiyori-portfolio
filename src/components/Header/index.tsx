'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Menu
          </button>

          {/* Logo */}
          <Link href="/" className="text-white text-xl font-bold">
            Portfolio
          </Link>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Sound Toggle */}
            <button
              onClick={() => setIsSoundOn(!isSoundOn)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isSoundOn ? 'Sound On' : 'Sound Off'}
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="h-full flex flex-col items-center justify-center">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 left-6 text-white"
            >
              Close
            </button>
            <nav className="flex flex-col items-center space-y-8">
              <Link href="/" className="text-white text-2xl hover:text-gray-300">
                Home
              </Link>
              <Link href="/about" className="text-white text-2xl hover:text-gray-300">
                About
              </Link>
              <Link href="/projects" className="text-white text-2xl hover:text-gray-300">
                Projects
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 