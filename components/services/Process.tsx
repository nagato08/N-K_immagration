"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  FileText,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  details: string[];
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Consultation Gratuite",
    description:
      "Nous écoutons vos objectifs et évaluons votre situation d'immigration.",
    icon: Phone,
    details: [
      "Évaluation de votre profil",
      "Discussion de vos objectifs",
      "Identification des options possibles",
    ],
  },
  {
    number: 2,
    title: "Préparation des Documents",
    description:
      "Notre équipe prépare tous les documents nécessaires avec rigueur.",
    icon: FileText,
    details: [
      "Liste complète des documents",
      "Vérification de la validité",
      "Traduction si nécessaire",
    ],
  },
  {
    number: 3,
    title: "Soumission du Dossier",
    description:
      "Nous soumettons votre dossier auprès des autorités compétentes.",
    icon: Send,
    details: [
      "Dépôt du dossier",
      "Paiement des frais",
      "Confirmation de réception",
    ],
  },
  {
    number: 4,
    title: "Suivi et Communication",
    description:
      "Nous suivons votre dossier et vous tenons informé à chaque étape.",
    icon: MessageSquare,
    details: [
      "Mises à jour régulières",
      "Réponse aux questions",
      "Gestion des demandes supplémentaires",
    ],
  },
  {
    number: 5,
    title: "Succès et Installation",
    description:
      "Visa approuvé! Nous vous guidons pour vos préparatifs finaux.",
    icon: CheckCircle,
    details: [
      "Récupération du visa",
      "Conseils de préparation",
      "Support à l'arrivée",
    ],
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex gap-6 md:gap-8"
    >
      {/* Conteneur Gauche - Numéro et connecteur */}
      <div className="flex flex-col items-center shrink-0">
        {/* Cercle avec numéro */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-md"
          style={{ backgroundColor: "#B8A76F" }}
        >
          <span className="font-poppins text-2xl font-bold text-white">
            {step.number}
          </span>
        </motion.div>

        {/* Ligne connectrice */}
        {index < STEPS.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              backgroundColor: "#B8A76F",
              originY: 0,
            }}
            className="w-1 h-24 md:h-32 mt-4"
          />
        )}
      </div>

      {/* Conteneur Droite - Contenu */}
      <div className="flex-1 pt-2 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="p-3 rounded-lg shrink-0"
              style={{ backgroundColor: "rgba(184, 167, 111, 0.1)" }}
            >
              <Icon size={24} className="text-amber-600" />
            </div>
            <h3 className="font-poppins text-xl font-semibold text-gray-900">
              {step.title}
            </h3>
          </div>

          <p className="font-poppins text-gray-600 mb-4 leading-relaxed">
            {step.description}
          </p>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isInView ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-2 overflow-hidden"
          >
            {step.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: "#B8A76F" }}
                />
                <span className="font-poppins">{detail}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span
              className="font-poppins text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#B8A76F" }}
            >
              Notre Processus
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            5 Étapes Vers <span style={{ color: "#B8A76F" }}>Votre Succès</span>
          </h2>

          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            Un processus structuré et transparent pour concrétiser votre projet d&apos;immigration
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {STEPS.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
