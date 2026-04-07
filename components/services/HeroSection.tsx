import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-[40vh] md:h-[50vh] min-h-80">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes kenburns {
          0%   { transform: scale(1.06) translate(0%, 0%); }
          50%  { transform: scale(1.11) translate(-1%, -0.8%); }
          100% { transform: scale(1.06) translate(0%, 0%); }
        }

        .hero-img { animation: kenburns 18s ease-in-out infinite; }

        .hero-badge  { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .hero-title  { animation: fadeUp  0.85s cubic-bezier(0.22,1,0.36,1) 0.30s both; }
        .hero-sub    { animation: fadeUp  0.85s cubic-bezier(0.22,1,0.36,1) 0.50s both; }

        .shimmer-gold {
          background: linear-gradient(90deg, #B8A76F 0%, #D4C28A 35%, #B8A76F 55%, #9D8F5C 85%, #B8A76F 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 4s linear infinite;
        }
      `}</style>

      {/* Image de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero_service.png"
          alt="NK Immigration Services"
          fill
          priority
          className="object-cover hero-img"
          style={{ transformOrigin: "center center" }}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "rgba(22, 30, 43, 0.65)",
        }}
      />

      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Liseré or en bas */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #B8A76F, transparent)" }}
      />

      {/* Contenu */}
      <div className="relative z-10 flex items-center h-full w-full">
        <div className="mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-20" style={{ maxWidth: 1440 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texte - gauche */}
            <div>
              {/* Badge */}
              <div className="hero-badge mb-6">
                <span
                  className="inline-block text-sm font-semibold uppercase tracking-wider text-white"
                  style={{ color: "#B8A76F" }}
                >
                  Nos Services
                </span>
              </div>

              {/* Titre principal */}
              <h1
                className="hero-title text-white leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  fontWeight: 700,
                }}
              >
                Vos Rêves <span className="shimmer-gold">d&apos;Immigration</span>
              </h1>

              {/* Sous-titre */}
              <p
                className="hero-sub text-white/85 mt-6"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
              >
                Avec plus de 2 ans d&apos;expérience, nous offrons une gamme complète de services adaptés à vos besoins.
              </p>
            </div>

            {/* Image - droite */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm aspect-square">
                <Image
                  src="/images/map.webp"
                  alt="Services d'immigration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
