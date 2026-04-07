"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-150 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/hero_acceuil.png)",
      }}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-150 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Slogan */}
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            L&apos;immigration c&apos;est notre affaire,{" "}
            <span style={{ color: "#B8A76F" }}>la réussite c&apos;est la vôtre</span>
          </h1>

          {/* Description */}
          <p className="font-poppins text-lg sm:text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Avec plus de 2 ans d&apos;expérience et 20+ dossiers traités avec succès,
            nous transformons vos rêves d&apos;immigration en réalité.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Button 1: Contacter */}
            <Link
              href="/contact"
              className="font-poppins font-semibold px-8 py-4 text-white rounded-lg
                         transition-all duration-300 ease-out
                         hover:shadow-lg hover:scale-105
                         active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2
                         w-full sm:w-auto inline-block text-center"
              style={{
                backgroundColor: "#B8A76F",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Contacter
            </Link>

            {/* Button 2: Découvrez nos services */}
            <Link
              href="/services"
              className="font-poppins font-semibold px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg
                         transition-all duration-300 ease-out
                         hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105
                         active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                         w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Découvrez nos services
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-12 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-poppins text-3xl font-bold" style={{ color: "#B8A76F" }}>2+</p>
              <p className="font-poppins text-sm text-gray-200 mt-1">Ans d&apos;expérience</p>
            </div>
            <div className="text-center">
              <p className="font-poppins text-3xl font-bold text-amber-400">20+</p>
              <p className="font-poppins text-sm text-gray-200 mt-1">Dossiers réussis</p>
            </div>
            <div className="text-center">
              <p className="font-poppins text-3xl font-bold text-amber-400">14+</p>
              <p className="font-poppins text-sm text-gray-200 mt-1">Destinations</p>
            </div>
            <div className="text-center">
              <p className="font-poppins text-3xl font-bold text-amber-400">24/7</p>
              <p className="font-poppins text-sm text-gray-200 mt-1">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
