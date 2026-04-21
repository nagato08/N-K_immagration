"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const AFFICHE_SELECTION = [
  "/images/affiche3.jpeg",
  "/images/affiche7.jpeg",
  "/images/affiche.jpeg",
  "/images/affiche10.jpeg",
  "/images/affiche5.jpeg",
];

export default function Offres() {
  const affiches = AFFICHE_SELECTION;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-[2px] w-12 bg-gray-300"></div>
              <span className="text-yellow-500 text-xl">★</span>
              <div className="h-[2px] w-12 bg-gray-300"></div>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Découvrez Nos{" "}
              <span style={{ color: "#B8A76F" }}>Offres 2026</span>
            </h2>

            <p className="font-poppins text-gray-600 text-base sm:text-lg leading-relaxed flex items-center justify-center lg:justify-start gap-2">
              <span className="text-blue-500">✔</span>
              Explorez nos programmes et promotions, choisissez votre destination
            </p>
          </div>

          {/* 📱 MOBILE CAROUSEL */}
          <div className="w-full lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {affiches.map((affiche) => (
                <div
                  key={affiche}
                  className="min-w-[70%] snap-center flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(affiche)}
                >
                  <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-white aspect-[9/13]">
                    <Image
                      src={affiche}
                      alt="Offre immigration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 💻 DESKTOP TRIANGLE */}
          <div className="hidden lg:flex flex-1 relative h-[500px] w-full items-center justify-center">
            <div className="relative w-[500px] h-full">

              {affiches.map((affiche, index) => {
                const configs = [
                  { rotate: -25, translateX: -240, translateY: 40, z: 10, scale: 0.85 },
                  { rotate: -12, translateX: -120, translateY: 10, z: 20, scale: 0.92 },
                  { rotate: 0, translateX: 0, translateY: -30, z: 50, scale: 1.15 },
                  { rotate: 12, translateX: 120, translateY: 10, z: 20, scale: 0.92 },
                  { rotate: 25, translateX: 240, translateY: 40, z: 10, scale: 0.85 },
                ];

                const cfg = configs[index];

                return (
                  <div
                    key={affiche}
                    className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      transform: `
                        translateX(${cfg.translateX}px)
                        translateY(${cfg.translateY}px)
                        rotate(${cfg.rotate}deg)
                        scale(${cfg.scale})
                      `,
                      zIndex: cfg.z,
                    }}
                    onClick={() => setSelectedImage(affiche)}
                  >
                    <div className="relative w-56 rounded-xl overflow-hidden shadow-2xl bg-white aspect-[9/13]">
                      <Image
                        src={affiche}
                        alt="Offre immigration"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 animate-fadeIn"
          style={{ zIndex: 9999 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full transition"
            >
              <X size={28} className="text-white" />
            </button>

            <Image
              src={selectedImage}
              alt="Offre détaillée"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}