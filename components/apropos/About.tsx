"use client";

import { Heart, Shield, Target, Users } from "lucide-react";

interface Value {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Nous aimons ce que nous faisons. Chaque dossier est traité avec dévouement et enthousiasme pour votre réussite.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description:
      "Vous pouvez compter sur nous. Nous garantissons un suivi rigoureux et des résultats conformes aux normes internationales.",
  },
  {
    icon: Target,
    title: "Expertise",
    description:
      "Notre équipe maîtrise les procédures d'immigration. Nous restons à jour avec les exigences légales de chaque pays.",
  },
  {
    icon: Users,
    title: "Soutien",
    description:
      "Vous n'êtes jamais seul. Nous vous accompagnons à chaque étape avec un soutien personnalisé et attentif.",
  },
];

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: Mission */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Notre <span style={{ color: "#B8A76F" }}>Mission</span>
              </h2>
              <p className="font-poppins text-gray-600 text-lg mb-4 leading-relaxed">
                Chez NK Immigration, notre mission est simple mais puissante: transformer les rêves
                d&apos;immigration en réalité.
              </p>
              <p className="font-poppins text-gray-600 text-lg leading-relaxed">
                Nous croyons que chaque individu mérite la chance de réaliser ses ambitions à l&apos;étranger.
                Grâce à notre expertise et notre dévouement, nous facilitons ce parcours souvent complexe
                en offrant un soutien complet et personnalisé.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div
                    className="w-1 flex-shrink-0 rounded"
                    style={{ backgroundColor: "#B8A76F" }}
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">Procédures Simplifiées</h4>
                    <p className="font-poppins text-sm text-gray-600">
                      Nous démystifions les démarches administratives complexes
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-1 flex-shrink-0 rounded"
                    style={{ backgroundColor: "#B8A76F" }}
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">Taux de Réussite Élevé</h4>
                    <p className="font-poppins text-sm text-gray-600">
                      Plus de 20 dossiers traités avec succès
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-1 flex-shrink-0 rounded"
                    style={{ backgroundColor: "#B8A76F" }}
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">Soutien 24/7</h4>
                    <p className="font-poppins text-sm text-gray-600">
                      Disponibles pour répondre à vos questions à tout moment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Valeurs */}
        <div className="mb-20">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos <span style={{ color: "#B8A76F" }}>Valeurs</span>
          </h2>
          <p className="font-poppins text-gray-600 text-center text-lg max-w-2xl mx-auto mb-12">
            Ces principes fondamentaux guident notre travail quotidien et nos interactions avec nos clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ backgroundColor: "#B8A76F" }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="font-poppins text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Approche */}
        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12">
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Notre <span style={{ color: "#B8A76F" }}>Approche</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#B8A76F" }}
              >
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-poppins text-xl font-semibold text-gray-900 mb-3">Consultation</h4>
              <p className="font-poppins text-gray-600">
                Nous comprenons vos objectifs et évaluons votre situation pour un projet personnalisé.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#B8A76F" }}
              >
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-poppins text-xl font-semibold text-gray-900 mb-3">Préparation</h4>
              <p className="font-poppins text-gray-600">
                Notre équipe prépare tous les documents nécessaires avec attention aux détails.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#B8A76F" }}
              >
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-poppins text-xl font-semibold text-gray-900 mb-3">Suivi</h4>
              <p className="font-poppins text-gray-600">
                Nous suivons votre dossier jusqu&apos;à son aboutissement avec rapports réguliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
