"use client";

import Link from "next/link";

interface Destination {
  name: string;
  flag: string;
  serviceTypes: string[];
  description: string;
}

const DESTINATIONS: Destination[] = [
  {
    name: "France",
    flag: "🇫🇷",
    serviceTypes: ["Travail", "Tourisme"],
    description: "Opportunités professionnelles et touristiques en Europe",
  },
  {
    name: "Allemagne",
    flag: "🇩🇪",
    serviceTypes: ["Travail"],
    description: "Marché du travail dynamique et salaires compétitifs",
  },
  {
    name: "Pologne",
    flag: "🇵🇱",
    serviceTypes: ["Travail"],
    description: "Économie en croissance avec demandes de talents",
  },
  {
    name: "Lituanie",
    flag: "🇱🇹",
    serviceTypes: ["Travail"],
    description: "Technologie et innovations en Europe de l'Est",
  },
  {
    name: "Bulgarie",
    flag: "🇧🇬",
    serviceTypes: ["Travail"],
    description: "Coût de vie abordable et secteur IT florissant",
  },
  {
    name: "Turquie",
    flag: "🇹🇷",
    serviceTypes: ["Travail"],
    description: "Pont entre l'Europe et l'Asie avec opportunités uniques",
  },
  {
    name: "Russie",
    flag: "🇷🇺",
    serviceTypes: ["Travail", "Études"],
    description: "Grande économie avec secteurs variés",
  },
  {
    name: "Australie",
    flag: "🇦🇺",
    serviceTypes: ["Études"],
    description: "Universités de classe mondiale et qualité de vie exceptionnelle",
  },
  {
    name: "Nouvelle-Zélande",
    flag: "🇳🇿",
    serviceTypes: ["Études"],
    description: "Éducation de qualité dans un environnement idyllique",
  },
  {
    name: "Malaisie",
    flag: "🇲🇾",
    serviceTypes: ["Études"],
    description: "Études abordables avec diversité culturelle",
  },
  {
    name: "Belgique",
    flag: "🇧🇪",
    serviceTypes: ["Études"],
    description: "Centre de l'Europe avec institutions académiques prestigieuses",
  },
  {
    name: "Espagne",
    flag: "🇪🇸",
    serviceTypes: ["Tourisme"],
    description: "Culture, plages et style de vie méditerranéen",
  },
  {
    name: "Suisse",
    flag: "🇨🇭",
    serviceTypes: ["Tourisme"],
    description: "Paysages alpins spectaculaires et luxe",
  },
  {
    name: "Géorgie",
    flag: "🇬🇪",
    serviceTypes: ["Tourisme"],
    description: "Destination émergente avec charme unique",
  },
  {
    name: "Thaïlande",
    flag: "🇹🇭",
    serviceTypes: ["Tourisme"],
    description: "Aventure tropicale et expériences exotiques",
  },
];

export default function DestinationGrid() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((destination, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{destination.flag}</div>
                <div className="flex flex-wrap gap-2 flex-1 ml-4">
                  {destination.serviceTypes.map((type, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(184, 167, 111, 0.1)",
                        color: "#B8A76F",
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-3">
                {destination.name}
              </h3>

              <p className="font-poppins text-gray-600 mb-6 leading-relaxed">
                {destination.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center font-poppins font-semibold text-sm transition-all duration-300"
                style={{ color: "#B8A76F" }}
              >
                <span>En savoir plus</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vous n&apos;avez pas trouvé votre destination?
          </h2>
          <p className="font-poppins text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour explorer d&apos;autres possibilités ou discuter de votre destination spécifique.
          </p>
          <a
            href="/contact"
            className="inline-block font-poppins font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: "#B8A76F", color: "white" }}
          >
            Contacter Notre Équipe
          </a>
        </div>
      </div>
    </section>
  );
}
