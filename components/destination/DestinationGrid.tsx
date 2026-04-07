"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CONTINENTS = [
  {
    name: "Découvrez nos destinations en Europe",
    region: "europe",
    countries: [
      { name: "France", image: "/images/france.jpeg", desc: "Pays de culture, gastronomie et innovation. La France offre une richesse unique de traditions et de modernité." },
      { name: "Allemagne", image: "/images/allemagne.jpeg", desc: "Pays d\u2019industrie et de histoire. L\u2019Allemagne offre des villes modernes et un patrimoine culturel riche." },
      { name: "Belgique", image: "/images/belgique.jpeg", desc: "Carrefour de l\u2019Europe reconnu pour ses institutions internationales et ses villes dynamiques." },
      { name: "Espagne", image: "/images/espagne.jpeg", desc: "Culture vibrante, plages ensoleillées et style de vie méditerranéen incomparable." },
      { name: "Suisse", image: "/images/suisse.jpeg", desc: "Paysages alpins spectaculaires et opportunités professionnelles de prestige." },
      { name: "Pologne", image: "/images/pologne.jpeg", desc: "Économie en pleine croissance avec des opportunités de travail diversifiées." },
      { name: "Lituanie", image: "/images/lituanie.jpeg", desc: "Technologie et innovations au cœur des pays baltes en plein essor." },
      { name: "Bulgarie", image: "/images/bulgarie.jpeg", desc: "Coût de vie abordable et secteur technologique florissant en Europe de l\u2019Est." },
      { name: "Géorgie", image: "/images/georgie.jpeg", desc: "Destination émergente avec un charme unique entre Europe et Asie." },
    ],
  },
  {
    name: "Découvrez nos destinations en Asie",
    region: "asia",
    countries: [
      { name: "Turquie", image: "/images/turquie.jpeg", desc: "Pont entre l\u2019Europe et l\u2019Asie avec des opportunités uniques et une culture millénaire." },
      { name: "Russie", image: "/images/russie.jpeg", desc: "Vaste territoire aux opportunités académiques et professionnelles variées." },
      { name: "Malaisie", image: "/images/malaisie.jpeg", desc: "Hub éducatif d\u2019Asie du Sud-Est avec des universités internationalement réputées." },
      { name: "Thaïlande", image: "/images/thailande.jpeg", desc: "Aventure tropicale et opportunités d\u2019affaires dans un cadre exotique." },
    ],
  },
  {
    name: "Découvrez nos destinations en Océanie",
    region: "oceania",
    countries: [
      { name: "Australie", image: "/images/australie.jpeg", desc: "Universités de classe mondiale et qualité de vie exceptionnelle au bout du monde." },
      { name: "Nouvelle-Zélande", image: "/images/nouvelle-zelande.jpeg", desc: "Éducation de qualité dans un environnement naturel idyllique et accueillant." },
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
