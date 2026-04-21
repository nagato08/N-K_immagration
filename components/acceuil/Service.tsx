"use client";

import Link from "next/link";
import { Plane, Briefcase, BookOpen, Building2, Users, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Visa Touristique",
    description:
      "Explorez de nouvelles destinations avec un visa obtenu rapidement et en toute sérénité.",
    tag: "Populaire",
  },
  {
    icon: Briefcase,
    title: "Visa Travail",
    description:
      "Accédez aux meilleures opportunités professionnelles à l'étranger grâce à un accompagnement sur mesure.",
    tag: null,
  },
  {
    icon: BookOpen,
    title: "Visa Étudiant",
    description:
      "Intégrez les meilleures universités du monde avec une aide complète pour votre dossier d'admission.",
    tag: null,
  },
  {
    icon: Building2,
    title: "Visa Affaires",
    description:
      "Développez votre activité à l'international avec des solutions d'immigration adaptées aux entrepreneurs.",
    tag: null,
  },
  {
    icon: Users,
    title: "Accompagnement Personnalisé",
    description:
      "Un suivi de A à Z par nos experts pour garantir la réussite de votre projet migratoire.",
    tag: null,
  },
  {
    icon: MapPin,
    title: "Réservation & Hébergement",
    description:
      "Organisez votre installation à l'étranger grâce à nos services complets de réservation.",
    tag: null,
  },
];

const GOLD = "#B8A76F";
const GOLD_LIGHT = "#F5F0E8";

export default function Service() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p
            className="font-poppins text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: GOLD }}
          >
            Ce que nous proposons
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            >
              Nos <span style={{ color: GOLD }}>Services</span>
            </h2>
            <p
              className="font-poppins text-gray-500 text-base max-w-sm"
            >
              Un accompagnement complet et professionnel pour concrétiser votre projet d&apos;immigration
            </p>
          </div>
          {/* Divider */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />
            <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: GOLD }} />
            <div className="h-px flex-1 bg-gray-100" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href="/services"
                className="group relative bg-white border border-gray-100 rounded-2xl p-7
                           hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ "--hover-border": GOLD } as React.CSSProperties}
              >
                {/* Tag */}
                {service.tag && (
                  <span
                    className="font-poppins absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: GOLD_LIGHT,
                      color: GOLD,
                    }}
                  >
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5
                             group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: GOLD_LIGHT }}
                >
                  <Icon size={22} style={{ color: GOLD }} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3
                  className="font-poppins text-gray-900 font-semibold text-lg mb-2"
                >
                  {service.title}
                </h3>
                <p
                  className="font-poppins text-gray-500 text-sm leading-relaxed"
                >
                  {service.description}
                </p>

                {/* Link */}
                <div
                  className="font-poppins mt-5 flex items-center gap-1.5 text-sm font-medium
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: GOLD }}
                >
                  En savoir plus
                  <ArrowRight size={14} strokeWidth={2} />
                </div>

                {/* Bottom border accent */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full
                             scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: GOLD }}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6
                     bg-gray-50 rounded-2xl px-8 py-8 border border-gray-100"
        >
          <div>
            <h3
              className="font-poppins text-gray-900 font-bold text-xl mb-1"
            >
              Prêt à démarrer votre projet ?
            </h3>
            <p
              className="font-poppins text-gray-500 text-sm"
            >
              Consultation gratuite et personnalisée avec l&apos;un de nos experts
            </p>
          </div>
          <a
            href="/contact"
            className="font-poppins flex-shrink-0 flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-white
                       transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95 text-sm"
            style={{
              backgroundColor: GOLD,
            }}
          >
            Demander une consultation
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

      </div>
    </section>
  );
}