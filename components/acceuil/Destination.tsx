"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  { name: "Canada", image: "/images/destination_img.png" },
  { name: "Australie", image: "/images/australie.jpeg" },
  { name: "Nouvelle-Zélande", image: "/images/nouvelle-zelande.jpeg" },
  { name: "Suisse", image: "/images/suisse.jpeg" },
  { name: "France", image: "/images/france.jpeg" },
  { name: "Allemagne", image: "/images/allemagne.jpeg" },
  { name: "Thaïlande", image: "/images/thailande.jpeg" },
  { name: "Malaisie", image: "/images/malaisie.jpeg" },
];

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
        <div className="overflow-hidden group mb-12">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicated.map((item, index) => (
              <div
                key={index}
                className="w-48 h-40 flex-shrink-0 rounded-xl bg-white
                           shadow-md hover:shadow-xl
                           transition-all duration-300
                           hover:-translate-y-3 hover:scale-105
                           overflow-hidden relative group/card"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent
                              flex flex-col items-center justify-end p-4">
                  <p className="font-semibold text-white text-center">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">
            Explorez nos destinations en détail et trouvez celle qui vous convient
          </p>
          <a
            href="/destination"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: "#B8A76F", color: "white" }}
          >
            Découvrez toutes nos destinations
          </a>
        </div>
      </div>

      <style>{`
        .group:hover div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}