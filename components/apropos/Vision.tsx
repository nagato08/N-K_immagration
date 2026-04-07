"use client";

import { useEffect, useRef, useState } from "react";

const CENTRAL_PROMISE = {
  title: "Réaliser vos rêves d'immigration avec expertise et confiance.",
  desc: "De la consultation initiale à l'obtention de votre visa, N&K Immigration structure chaque étape de votre parcours avec rigueur, transparence et un accompagnement personnalisé reconnu.",
};

const PILLARS = [
  {
    title: "Expertise légale et administrative",
    desc: "Maîtrise complète des procédures d'immigration, de la documentation, des démarches administratives et des normes légales pour des dossiers solides et conformes.",
  },
  {
    title: "Innovation et accompagnement personnalisé",
    desc: "Intégration d'une approche moderne, de suivi continu et de conseils adaptés à votre profil pour optimiser vos chances de succès et garantir une transition réussie.",
  },
  {
    title: "Support de bout en bout",
    desc: "De l'évaluation initiale à l'obtention du visa, en passant par la gestion des dossiers, le suivi technique et la réservation d'hébergement, nous couvrons l'ensemble du processus.",
  },
];

const Vision = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUpV {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vv .v-fade-up { animation: fadeUpV 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .vv .v-delay-1 { animation-delay: 0.1s; }
        .vv .v-delay-2 { animation-delay: 0.2s; }
        .vv .v-delay-3 { animation-delay: 0.3s; }

        .vision-card {
          position: relative;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s ease;
        }
        .vision-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 24px 60px rgba(184, 167, 111, 0.15);
        }

        /* Le SVG couvre exactement la carte, stroke centré sur le bord */
        .vision-card .border-svg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          overflow: hidden; /* clip le stroke qui déborde vers l'extérieur */
          border-radius: 16px;
        }
        .vision-card .border-svg rect {
          fill: none;
          stroke: #B8A76F;
          stroke-width: 0.75;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          stroke-linecap: round;
          transition: stroke-dashoffset 0s;
        }
        .vision-card:hover .border-svg rect {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1);
        }

        .title-bar-vision {
          height: 2px; background: #B8A76F; border-radius: 2px;
          width: 32px; margin-bottom: 12px;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .vision-card:hover .title-bar-vision { width: 64px; }
      `}</style>

      <section
        ref={ref}
        className={`relative overflow-hidden py-6 md:py-12 ${visible ? "vv" : ""}`}
        style={{ background: "#ffffff" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 opacity-40"
          style={{ background: "radial-gradient(circle, rgba(184, 167, 111, 0.08) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 opacity-30"
          style={{ background: "radial-gradient(circle, rgba(184, 167, 111, 0.05) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">

          {/* Badge */}
          <div className="v-fade-up mb-6 flex items-center gap-3">
            <div style={{ width: 32, height: 2, background: "#B8A76F", borderRadius: 2 }} />
            <span
              className="text-xs md:text-md lg:text-lg font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#B8A76F" }}
            >
              Vision &amp; Stratégie
            </span>
          </div>

          {/* Promesse centrale */}
          <div className="v-fade-up v-delay-1 mb-12 grid grid-cols-1 items-end justify-between gap-6 lg:grid-cols-2 lg:mb-16">
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "#0d1b2e",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "700px",
              }}
            >
              {CENTRAL_PROMISE.title}
            </h2>
            <p className="text-gray-600 leading-relaxed lg:text-lg lg:max-w-md" style={{ color: "#2d3a4f" }}>
              {CENTRAL_PROMISE.desc}
            </p>
          </div>

          {/* Grille des 3 piliers */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`v-fade-up ${index === 1 ? "v-delay-2" : ""} ${index === 2 ? "v-delay-3" : ""} vision-card flex h-full flex-col rounded-2xl bg-white p-8`}
                style={{ border: "1px solid rgba(184, 167, 111, 0.12)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
              >
                <svg
                  className="border-svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.75" y="0.75" width="98.5" height="98.5" rx="4" ry="4" />
                </svg>

                <h3 className="mb-3 text-xl font-semibold md:text-2xl" style={{ color: "#1A2B5F" }}>
                  {pillar.title}
                </h3>
                <div className="title-bar-vision" />
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Encart citation */}
          <div
            className="v-fade-up v-delay-3 mx-auto mt-16 max-w-3xl rounded-xl p-6 text-center md:p-8"
            style={{ background: "linear-gradient(145deg, #f9fafc 0%, #ffffff 100%)", border: "1px solid rgba(184, 167, 111, 0.15)" }}
          >
            <p className="text-base italic leading-relaxed md:text-lg" style={{ color: "#1f2a3f" }}>
              &ldquo; Une approche intégrée qui combine{" "}
              <span style={{ color: "#1A2B5F", fontWeight: 600 }}>
                consultation, expertise et accompagnement
              </span>
              {" "}pour offrir une solution complète, de l&apos;évaluation initiale à l&apos;obtention de votre visa. &rdquo;
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px w-8" style={{ background: "#B8A76F" }} />
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#1A2B5F" }}>
                N&K Immigration
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Vision;
