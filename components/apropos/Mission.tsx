"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Données adaptées à l'immigration
const PILLARS = [
  {
    title: "Visa Travail",
    desc: "Accompagnement complet pour vos projets professionnels. Nous gérons la documentation, les démarches administratives et le suivi jusqu'à l'obtention du visa.",
    icon: (
      <path d="M4 11.5l8-6 8 6V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Visa Étudiant",
    desc: "Réalisez vos rêves académiques. Nous facilitons votre admission dans les meilleures universités avec un soutien administratif expert.",
    icon: (
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Visa Tourisme & Affaires",
    desc: "Voyagez sereinement ou développez vos affaires à l'étranger. Nous simplifions les démarches pour vos projets touristiques et commerciaux.",
    icon: (
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Accompagnement Personnalisé",
    desc: "Suivi individualisé du début à la fin. Notre équipe s'engage à répondre à vos questions et à optimiser vos chances de succès.",
    icon: (
      <path d="M3 3h18v4H3V3zm2 8h14M5 16h14M3 20l9-4 9 4"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

const PROMISES = [
  "Respect des délais administratifs",
  "Expertise légale confirmée",
  "Transparence totale",
  "Soutien personnalisé 24/7",
];

const STATS = [
  { value: "2024",   label: "Fondation", gold: false },
  { value: "20+",    label: "Dossiers réussis", gold: true  },
  { value: "7j/7",   label: "Support", gold: false },
  { value: "98%",    label: "Taux réussite", gold: true  },
];

const Mission = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUpM {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRightM {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes borderDraw {
          0%   { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        .mv .m-u1 { animation: fadeUpM 0.7s ease 0.05s both; }
        .mv .m-u2 { animation: fadeUpM 0.7s ease 0.18s both; }
        .mv .m-u3 { animation: fadeUpM 0.7s ease 0.32s both; }
        .mv .m-r1 { animation: fadeRightM 0.8s ease 0.25s both; }

        .shimmer-text {
          background: linear-gradient(90deg, #B8A76F 0%, #D4C28A 35%, #B8A76F 55%, #9D8F5C 85%, #B8A76F 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerGold 4s linear infinite;
        }

        /* Cartes services */
        .pillar-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.5rem;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(184, 167, 111, 0.12);
          position: relative;
          overflow: hidden;
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px -12px rgba(184, 167, 111, 0.2);
          border-color: rgba(184, 167, 111, 0.3);
        }
        /* Bordure animée au survol (SVG) */
        .pillar-card .border-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-radius: 1.25rem;
        }
        .pillar-card .border-svg rect {
          fill: none;
          stroke: #B8A76F;
          stroke-width: 2;
          rx: 18;
          ry: 18;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          transition: stroke-dashoffset 0s;
        }
        .pillar-card:hover .border-svg rect {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        /* Trait doré sous le titre */
        .title-bar {
          height: 2.5px;
          background: #B8A76F;
          border-radius: 2px;
          width: 36px;
          margin: 0.75rem 0 1rem 0;
          transition: width 0.35s ease;
        }
        .pillar-card:hover .title-bar {
          width: 64px;
        }
        .icon-wrapper {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 0.875rem;
          background: rgba(184, 167, 111, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B8A76F;
          margin-bottom: 1.25rem;
        }

        /* Améliorations générales */
        .mission-h2 {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .stat-card {
          transition: all 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-3px);
          background: white;
          box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.1);
          border-color: #B8A76F;
        }
      `}</style>

      <section
        ref={ref}
        className={`relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-12 md:py-16 lg:py-20 ${visible ? "mv" : ""}`}
      >
        {/* Éléments décoratifs de fond */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#B8A76F]/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B8A76F]/5 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* En-tête de section */}
          <div className="m-u1 text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-12 md:mb-16">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#B8A76F] rounded-full" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]" style={{ color: "#B8A76F" }}>
                Notre mission
              </span>
            </div>
            <h2 className="mission-h2 text-gray-900">
              Transformer vos rêves<br />
              <span className="shimmer-text">en réalité d&apos;immigration</span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
              N&K Immigration accompagne les individus et les professionnels dans la réalisation
              de leurs projets d&apos;immigration, de la consultation initiale à l&apos;obtention du visa,
              avec expertise, transparence et un soutien personnalisé reconnu.
            </p>
          </div>

          {/* Grille principale : services + bloc latéral */}
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px] xl:gap-12">

            {/* Colonne gauche : services */}
            <div className="flex flex-col gap-8">
              <div className="m-u2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PILLARS.map((p) => (
                  <article key={p.title} className="pillar-card group">
                    <svg className="border-svg" viewBox="0 0 100% 100%" preserveAspectRatio="none">
                      <rect x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="18" ry="18" />
                    </svg>
                    <div className="icon-wrapper">
                      <svg width="22" height="22" viewBox="0 0 24 24">{p.icon}</svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">{p.title}</h3>
                    <div className="title-bar" />
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </article>
                ))}
              </div>

              {/* Bloc des engagements */}
              <div className="m-u3 rounded-2xl bg-white/70 backdrop-blur-sm p-6 border border-[#B8A76F]/10 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: "#B8A76F" }}>
                    Nos engagements
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#B8A76F]/30 to-transparent" />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROMISES.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="rgba(184, 167, 111, 0.12)" />
                        <path d="M8 12l3 3 5-5" stroke="#B8A76F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne droite : image + statistiques */}
            <div className="m-r1 flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                <div className="relative w-full h-72 md:h-80">
                  <Image
                    src="/images/mission1.png"
                    alt="N&K Immigration Mission"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3">
                    <p className="text-white font-bold text-sm">Expertise Immigration</p>
                    <p className="text-white/70 text-xs">De la consultation à l&apos;obtention du visa</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="stat-card rounded-xl bg-white p-4 border border-gray-100 shadow-sm transition-all duration-200"
                  >
                    <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">{s.label}</div>
                    <div className={`text-2xl font-extrabold tracking-tight mt-1 ${s.gold ? "text-[#B8A76F]" : "text-gray-700"}`}>
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Petit plus : lien vers contact */}
              <div className="mt-2 text-center lg:text-left">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link"
                  style={{ color: "#B8A76F" }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  Commencez votre parcours
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
