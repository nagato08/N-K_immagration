"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const About = () => {
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
        @keyframes fadeUpAD {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInAD {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .adv .ad-u1   { animation: fadeUpAD  0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .adv .ad-u2   { animation: fadeUpAD  0.75s cubic-bezier(0.22,1,0.36,1) 0.20s both; }
        .adv .ad-logo { animation: fadeInAD  0.90s cubic-bezier(0.22,1,0.36,1) 0.30s both; }
      `}</style>

      <section
        ref={ref}
        className={`relative bg-white py-6 lg:py-12 ${visible ? "adv" : ""}`}
      >
        {/* Filet or haut */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B8A76F]/30 to-transparent"
        />

        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 xl:px-20">

          {/* Label section */}
          <div className="ad-u1 flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-[#B8A76F] rounded-sm" />
            <span className="text-xs md:text-md lg:text-lg font-semibold uppercase tracking-[0.22em]" style={{ color: "#B8A76F" }}>
              À propos de nous
            </span>
          </div>

          {/* Intro pleine largeur */}
          <p className="ad-u1 text-[clamp(0.9rem,1.25vw,1.05rem)] font-medium text-gray-800 leading-relaxed text-justify mb-5">
            N&K Immigration Agency est une agence spécialisée dans l&apos;accompagnement complet des projets d&apos;immigration.
            Forte d&apos;une expertise solide et d&apos;une approche innovante, N&K Immigration accompagne ses clients à chaque étape
            de leurs démarches administratives avec professionnalisme, rigueur et transparence. Nous offrons une gamme complète
            de services couvrant les visas de travail, d&apos;études, touristiques et d&apos;affaires.
          </p>

          {/* Logo + texte secondaire */}
          <div className="ad-u2 grid items-center gap-5 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">

            {/* Logo */}
            <div className="ad-logo flex items-center justify-center">
              <div className="relative w-70 h-87 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/pdg.jpeg"
                  alt="PDG N&K Immigration"
                  width={300}
                  height={380}
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Ombre du bas vers le texte */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                  }}
                />
                {/* Nom en bas à gauche */}
                <div className="absolute bottom-3 left-4 z-10">
                  <p className="text-white font-black text-sm leading-tight drop-shadow-md">
                    N&K Immigration
                  </p>
                  <p className="text-white/90 text-[11px] font-medium mt-0.5">
                    Leadership &amp; Expertise
                  </p>
                </div>
              </div>
            </div>

            {/* Texte secondaire */}
            <p className="text-[clamp(0.88rem,1.2vw,1.02rem)] font-medium text-gray-800 leading-relaxed text-justify">
              Depuis notre fondation, nous intervenons dans tous les domaines de l&apos;immigration : consultation, préparation
              de dossiers, suivi administratif, ainsi que des services d&apos;accompagnement personnalisé et de réservation d&apos;hébergement.
              Notre approche est axée sur la qualité, la fiabilité et le respect des délais. De l&apos;évaluation initiale à l&apos;obtention
              du visa, en passant par la gestion des dossiers et le suivi technique, nous accompagnons nos clients à chaque étape.
              Nous assurons également un soutien continu pour garantir une transition réussie vers votre nouvelle destination.
            </p>
          </div>
        </div>

        {/* Filet or bas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B8A76F]/20 to-transparent"
        />
      </section>
    </>
  );
};

export default About;
