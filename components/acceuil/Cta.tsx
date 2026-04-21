import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  const features = [
    "Évaluation gratuite de votre profil",
    "Dossiers traités avec expertise",
    "Suivi personnalisé jusqu'à l'obtention du visa",
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background: "linear-gradient(135deg, #B8A76F 0%, #D4C28A 100%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="text-white">
            <h2 className="font-poppins text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Prêt à concrétiser votre{" "}
              <span className="text-white opacity-90">rêve d&apos;immigration ?</span>
            </h2>

            <p className="font-poppins text-base sm:text-lg leading-relaxed mb-8 text-white/90 max-w-lg">
              Notre équipe d&apos;experts vous guide pas à pas vers votre nouvelle vie à l&apos;étranger.
              Profitez d&apos;un accompagnement sur mesure pour maximiser vos chances de succès.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-white shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-poppins text-base text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-poppins font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ backgroundColor: "white", color: "#B8A76F" }}
            >
              Demander une consultation gratuite
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-96 sm:h-[500px] w-full">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/image.webp"
                alt="Destination immigration"
                fill
                className="object-cover"
                priority
              />

              {/* Success badge */}
              <div
                className="absolute bottom-6 right-6 px-6 py-3 rounded-full font-poppins font-bold text-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  color: "#B8A76F",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                Taux de réussite: 98%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
