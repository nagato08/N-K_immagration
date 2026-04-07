"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  CheckCircle,
  Headphones,
  TrendingUp,
} from "lucide-react";

interface Reason {
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  description: string;
  stat?: string;
  highlight: string;
}

const REASONS: Reason[] = [
  {
    icon: Award,
    title: "Expertise Reconnue",
    description:
      "2 ans d'expérience dans le domaine de l'immigration avec une approche professionnelle et maîtrisée.",
    stat: "2+",
    highlight: "ans d'expérience",
  },
  {
    icon: CheckCircle,
    title: "Taux de Réussite Élevé",
    description:
      "Nous avons accompagné avec succès plus de 20 clients dans leur parcours d'immigration.",
    stat: "20+",
    highlight: "dossiers réussis",
  },
  {
    icon: Users,
    title: "Équipe Dévouée",
    description:
      "Notre équipe est composée de professionnels qualifiés et passionnés par le succès de nos clients.",
    highlight: "Équipe expérimentée",
  },
  {
    icon: Clock,
    title: "Processus Transparent",
    description:
      "Nous vous tenons informé à chaque étape avec un suivi régulier et clair de votre dossier.",
    highlight: "Suivi en temps réel",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Disponibles pour répondre à vos questions et soutenir votre projet à tout moment.",
    highlight: "Toujours disponibles",
  },
  {
    icon: TrendingUp,
    title: "Destinations Multiples",
    description:
      "Couverture de 14+ destinations internationales pour tous types de visas.",
    stat: "14+",
    highlight: "destinations couvertes",
  },
];

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
        style={{ backgroundColor: "rgba(184, 167, 111, 0.15)" }}
      >
        <Icon size={28} className="text-amber-600" />
      </motion.div>

      <h3 className="font-poppins text-xl font-bold text-gray-900 mb-3">
        {reason.title}
      </h3>

      <p className="font-poppins text-gray-600 text-sm leading-relaxed mb-4">
        {reason.description}
      </p>

      {reason.stat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="flex items-baseline gap-2 pt-4 border-t border-gray-100"
        >
          <span
            className="font-poppins text-3xl font-bold"
            style={{ color: "#B8A76F" }}
          >
            {reason.stat}
          </span>
          <span className="font-poppins text-gray-600 text-sm">
            {reason.highlight}
          </span>
        </motion.div>
      )}

      {!reason.stat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="flex items-center gap-2 pt-4 border-t border-gray-100"
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#B8A76F" }}
          />
          <span className="font-poppins text-gray-700 font-medium text-sm">
            {reason.highlight}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Choose() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span
              className="font-poppins text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#B8A76F" }}
            >
              Nos Avantages
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi <span style={{ color: "#B8A76F" }}>nous Choisir?</span>
          </h2>

          <p className="font-poppins text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            NK Immigration se distingue par son engagement envers l&apos;excellence, son expérience
            reconnue et son dévouement à transformer vos rêves d&apos;immigration en réalité.
          </p>
        </motion.div>

        {/* Raisons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {REASONS.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="bg-linear-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à confier votre projet à des experts?
            </h3>

            <p className="font-poppins text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les dizaines de clients satisfaits qui ont réalisé leur rêve d&apos;immigration
              avec notre aide.
            </p>

            <a
              href="/contact"
              className="inline-block font-poppins font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: "#B8A76F", color: "white" }}
            >
              Commencer Maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
