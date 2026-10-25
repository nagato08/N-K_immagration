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
    title: "Visa de Travail avec contrat",
    description:
      "Concrétisez votre carrière internationale : étude de votre profil, recherche d'un employeur via nos partenaires, obtention du contrat de travail, démarches de visa et préparation au départ.",
    destinations: ["Italie", "Canada", "Turquie"],
    benefits: [
      "Offres d'emploi réelles et vérifiées",
      "Recherche d'employeur et obtention du contrat",
      "Préparation complète du dossier de visa",
      "Suivi jusqu'au départ et assistance à l'arrivée",
    ],
  },
  {
    title: "Visa d'Études",
    description:
      "Accédez à des universités reconnues en Chine et en Russie (plus de 900 universités) : choix du programme, admission, invitation, légalisation des documents et demande de visa.",
    destinations: ["Chine", "Russie"],
    benefits: [
      "Choix de l'université et du programme adapté",
      "Demande d'admission et obtention de l'invitation",
      "Traduction et légalisation des documents",
      "Préparation à l'entretien et conseils avant le départ",
    ],
  },
  {
    title: "Visa Touristique & Affaires",
    description:
      "Explorez le monde ou développez vos opportunités commerciales : visa touristique pour l'Italie et la Russie, visa d'affaires pour la Chine (salons, prospection, visites d'entreprises).",
    destinations: ["Italie", "Russie", "Chine"],
    benefits: [
      "Orientation et vérification des documents",
      "Lettre d'invitation touristique ou d'affaires",
      "Conseils pour le voyage (réservation, séjour)",
      "Suivi jusqu'à l'obtention du visa",
    ],
  },
];

export default function ServicesList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
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
                  className={`shrink-0 transition-transform duration-300 ${
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
                            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
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
