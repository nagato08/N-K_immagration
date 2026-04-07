"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Service {
  title: string;
  description: string;
  destinations: string[];
  benefits: string[];
}

const SERVICES: Service[] = [
  {
    title: "Visa de Travail",
    description:
      "Concrétisez votre carrière internationale avec notre service d'assistance pour visa de travail. Nous vous guidons dans les démarches administratives et la préparation de dossiers auprès des employeurs à l'étranger.",
    destinations: ["Allemagne", "France", "Pologne", "Lituanie", "Bulgarie", "Turquie", "Russie"],
    benefits: [
      "Assistance complète du début à la fin",
      "Négociation avec les employeurs",
      "Préparation de tous les documents",
      "Suivi du dossier en temps réel",
    ],
  },
  {
    title: "Visa d'Études",
    description:
      "Accédez aux meilleures universités du monde avec notre service spécialisé en visa d'études. Nous assistons les candidats dans le processus d'admission et de demande de visa.",
    destinations: ["Australie", "Belgique", "Malaisie", "Nouvelle-Zélande", "Russie"],
    benefits: [
      "Sélection d'universités adaptées",
      "Assistance aux demandes d'admission",
      "Préparation dossier financier",
      "Conseil en financement d'études",
    ],
  },
  {
    title: "Visa Touristique & Affaires",
    description:
      "Explorez le monde ou développez vos opportunités commerciales. Notre service couvre l'assistance pour visa touristique et visa d'affaires pour vos déplacements internationaux.",
    destinations: ["Espagne", "France", "Géorgie", "Suisse", "Thaïlande"],
    benefits: [
      "Traitement rapide des dossiers",
      "Documentation touristique complète",
      "Lettre d'invitation professionnelle",
      "Soutien logistique",
    ],
  },
];

export default function ServicesList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos Types de <span style={{ color: "#B8A76F" }}>Services</span>
          </h2>
          <p className="font-poppins text-gray-600 text-center text-lg max-w-2xl mx-auto">
            Découvrez comment nous pouvons transformer votre projet d&apos;immigration en réalité
          </p>
        </div>

        <div className="space-y-4">
          {SERVICES.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="font-poppins text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-gray-600 hidden md:block">{service.description}</p>
                </div>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: "#B8A76F" }}
                >
                  <ChevronDown size={28} />
                </div>
              </button>

              {expandedIndex === index && (
                <div className="border-t border-gray-200 bg-gray-50 px-6 md:px-8 py-8 space-y-6">
                  {/* Description mobile */}
                  <p className="font-poppins text-gray-600 md:hidden">{service.description}</p>

                  {/* Avantages */}
                  <div>
                    <h4
                      className="font-poppins text-lg font-semibold mb-4"
                      style={{ color: "#B8A76F" }}
                    >
                      Avantages de ce service
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: "#B8A76F" }}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="font-poppins text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Destinations */}
                  <div>
                    <h4
                      className="font-poppins text-lg font-semibold mb-4"
                      style={{ color: "#B8A76F" }}
                    >
                      Destinations couvertes
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.destinations.map((destination, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                          style={{ backgroundColor: "rgba(184, 167, 111, 0.05)" }}
                        >
                          <span className="font-poppins text-gray-700 text-sm font-medium">
                            {destination}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="font-poppins text-gray-600 mb-6">
            Prêt à démarrer votre projet d&apos;immigration?
          </p>
          <a
            href="/contact"
            className="inline-block font-poppins font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: "#B8A76F", color: "white" }}
          >
            Demander une Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
