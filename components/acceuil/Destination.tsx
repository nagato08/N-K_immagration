"use client";

import { motion } from "framer-motion";

const destinations = [
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australie", flag: "🇦🇺" },
  { name: "Nouvelle-Zélande", flag: "🇳🇿" },
  { name: "Suisse", flag: "🇨🇭" },
  { name: "France", flag: "🇫🇷" },
  { name: "Allemagne", flag: "🇩🇪" },
  { name: "Thaïlande", flag: "🇹🇭" },
  { name: "Malaisie", flag: "🇲🇾" },
  { name: "Bulgarie", flag: "🇧🇬" },
  { name: "Lituanie", flag: "🇱🇹" },
  { name: "Pologne", flag: "🇵🇱" },
  { name: "Belgique", flag: "🇧🇪" },
  { name: "Russie", flag: "🇷🇺" },
  { name: "Espagne", flag: "🇪🇸" },
];

// duplication pour effet infini
const duplicated = [...destinations, ...destinations];

export default function Destination() {
  return (
    <section className="w-full py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos <span style={{ color: "#B8A76F" }}>Destinations</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explorez les pays disponibles pour votre projet d&apos;immigration
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden group">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {duplicated.map((item, index) => (
              <div
                key={index}
                className="w-44 h-44 flex-shrink-0 rounded-2xl bg-white
                           flex flex-col items-center justify-center
                           shadow-md hover:shadow-xl
                           transition-all duration-300
                           hover:-translate-y-2 hover:scale-105"
              >
                <span className="text-5xl mb-3">{item.flag}</span>
                <p className="font-semibold text-gray-800">
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pause animation on hover */}
      <style>{`
        .group:hover div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}