"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quel est le délai moyen pour obtenir un visa?",
    answer:
      "Le délai varie selon le type de visa et le pays destination. En général, les délais varient de 2 à 6 mois. Notre équipe vous fournira une estimation précise lors de la consultation initiale en fonction de votre situation.",
  },
  {
    question: "Quels documents dois-je préparer?",
    answer:
      "Cela dépend du type de visa. En général, vous aurez besoin d'un passeport valide, d'une lettre de motivation, de preuves financières, et de documents spécifiques au programme (offre d'emploi, lettre d'admission, etc.). Nous vous fournirons une liste complète personnalisée.",
  },
  {
    question: "Combien coûte votre service?",
    answer:
      "Nos tarifs sont compétitifs et dépendent du type de visa et de la complexité de votre dossier. Nous offrons une consultation gratuite pour discuter de vos besoins et vous proposer un devis transparent sans frais cachés.",
  },
  {
    question: "Garantissez-vous l'obtention du visa?",
    answer:
      "Bien que nous ne puissions pas garantir l'approbation, notre taux de réussite élevé (20+ dossiers réussis) démontre notre expertise. Nous mettons tout en œuvre pour préparer un dossier solide et conforme à toutes les exigences.",
  },
  {
    question: "Puis-je demander un visa pour un autre pays?",
    answer:
      "Oui! Nous couvrons 14+ destinations internationales incluant la France, l'Allemagne, l'Australie, le Canada et bien d'autres. Si votre destination n'est pas listée, contactez-nous pour discuter des possibilités.",
  },
  {
    question: "Que se passe-t-il après l'obtention de mon visa?",
    answer:
      "Notre soutien ne s'arrête pas à l'obtention du visa. Nous vous guidons avec des conseils de préparation, des informations sur la vie dans votre nouveau pays, et restons disponibles pour toute assistance supplémentaire.",
  },
  {
    question: "Puis-je parler à quelqu'un de votre équipe directement?",
    answer:
      "Absolument! Nous offrons un support 24/7 et sommes toujours disponibles pour répondre à vos questions. Vous pouvez nous contacter par téléphone, WhatsApp, ou via notre formulaire de contact.",
  },
  {
    question: "Quel est le type de visa le plus facile à obtenir?",
    answer:
      "Le visa touristique est généralement plus facile à obtenir qu'un visa de travail ou d'études. Cependant, les exigences varient selon le pays destination. Lors de votre consultation, nous évaluerons votre profil et vous recommanderons le type de visa le plus adapté.",
  },
];

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
      >
        <div className="text-left flex-1">
          <h3 className="font-poppins text-lg font-semibold text-gray-900">
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
          style={{ color: "#B8A76F" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-gray-200"
      >
        <div className="p-6 bg-gray-50">
          <p className="font-poppins text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Faq() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle size={24} style={{ color: "#B8A76F" }} />
            <span
              className="font-poppins text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#B8A76F" }}
            >
              Questions Fréquentes
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vous avez des <span style={{ color: "#B8A76F" }}>Questions?</span>
          </h2>

          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur nos services d&apos;immigration
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItemComponent key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-poppins text-gray-600 mb-6 text-lg">
            Vous ne trouvez pas votre réponse?
          </p>
          <a
            href="/contact"
            className="inline-block font-poppins font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: "#B8A76F", color: "white" }}
          >
            Nous Contacter Directement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
