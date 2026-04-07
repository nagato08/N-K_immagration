"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/acceuil" },
  { label: "Services", href: "/services" },
  { label: "À Propos", href: "/apropos" },
  { label: "Destinations", href: "/destination" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || (href === "/acceuil" && pathname === "/");
  };

  return (
    <>
      <style>{`
        @keyframes slideDownMenu {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mobile-menu-open {
          animation: slideDownMenu 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/acceuil" className="flex items-center gap-2">
              <Image
                src="/logo_remove.png"
                alt="NK Immigration"
                width={50}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-poppins transition-colors duration-200 text-sm font-medium ${
                  isActive(link.href)
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Button & Mobile Menu Toggle - Right */}
          <div className="flex items-center gap-4">
            {/* Contactez-Nous Button - Desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-block font-poppins font-semibold px-6 py-2 rounded-lg
                         transition-all duration-300
                         hover:shadow-md
                         active:scale-95"
              style={{
                backgroundColor: "#B8A76F",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Contactez-Nous
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3 mobile-menu-open">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-poppins px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-amber-50 text-amber-600"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block font-poppins font-semibold px-4 py-2 text-white rounded-lg
                         transition-all duration-300 text-center mt-4
                         hover:shadow-md
                         active:scale-95"
              style={{
                backgroundColor: "#B8A76F",
              }}
              onClick={() => setIsOpen(false)}
            >
              Contactez-Nous
            </Link>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
