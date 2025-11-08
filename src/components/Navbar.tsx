"use client";

import { navItems } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass-navbar border-b border-glow sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-white font-bold text-xl hover:text-accent-100 group"
          >
            <span className="text-x tracking-tighter">
              <span className="font-bold">deep</span>
              <span className="font-light">variance</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="btn-ghost px-6 py-2">
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-accent-300 hover:text-white focus:outline-none p-2 hover:bg-surface-light/50"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)"
                }}
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-glow">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-surface-light/30">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-accent-300 hover:text-white hover:bg-surface-light/50 font-medium border border-transparent hover:border-glow"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-glow mt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center btn-secondary py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
