"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CONTINENTS = [
  {
    name: "Découvrez nos destinations en Europe",
    region: "europe",
    countries: [
      { name: "Italie", image: "/images/italie.jpeg", desc: "Visa touristique et contrat de travail (visa national D). Bâtiment, industrie, santé, agriculture, hôtellerie et restauration." },
      { name: "Russie", image: "/images/russie.jpeg", desc: "Études 2026/2027 dans plus de 900 universités et visa touristique pour Moscou, Saint-Pétersbourg et bien plus." },
      { name: "Turquie", image: "/images/turquie.jpeg", desc: "Travail avec contrat : manutention, magasinage, hôtellerie, commerce et restauration. Salaire estimé 350 000 à 475 000 XAF." },
    ],
  },
  {
    name: "Découvrez nos destinations en Amérique du Nord",
    region: "america",
    countries: [
      { name: "Canada", image: "/images/canada.jpeg", desc: "Contrat de travail et accompagnement complet : construction, agriculture, industrie, restauration, santé, logistique." },
    ],
  },
  {
    name: "Découvrez nos destinations en Asie",
    region: "asia",
    countries: [
      { name: "Chine", image: "/images/chine.jpeg", desc: "Visa étudiant et visa d\u2019affaires : universités reconnues, frais compétitifs, salons et prospection de partenaires." },
    ],
  },
];

export default function DestinationGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dg-visible .dg-anim {
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }

        .country-card {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .country-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(184,167,111,0.18);
        }
        .country-card img {
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .country-card:hover img {
          transform: scale(1.07);
        }

        .card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,15,30,0.88) 0%, rgba(10,15,30,0.45) 45%, transparent 100%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 22px;
        }

        .card-bar {
          width: 40px; height: 3px; border-radius: 3px;
          background: #B8A76F;
          margin-top: 12px;
          transition: width 0.4s ease;
        }
        .country-card:hover .card-bar { width: 64px; }
      `}</style>

      <section
        ref={sectionRef}
        className={`w-full bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-12 ${visible ? "dg-visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto space-y-24">
          {CONTINENTS.map((continent, cIdx) => (
            <div key={continent.region} className="dg-anim" style={{ animationDelay: `${cIdx * 0.15}s` }}>

              {/* En-tête continent */}
              <div className="mb-10">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#B8A76F" }}
                >
                  Nos Destinations
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                  {continent.name}
                </h2>
              </div>

              {/* Grille pays */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {continent.countries.map((country) => (
                  <div key={country.name} className="country-card aspect-[4/3]">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="card-overlay">
                      <h3 className="text-white text-xl font-bold leading-tight">{country.name}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mt-2">{country.desc}</p>
                      <div className="card-bar" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
