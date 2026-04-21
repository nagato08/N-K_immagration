"use client";

import { useEffect, useRef, useState } from "react";

const avis = [
  {
    nom: "Marie Nkomo",
    poste: "Travailleuse en Allemagne",
    texte:
      "N&K Immigration m'a accompagnée tout au long de mon projet de visa de travail en Allemagne. Leur équipe est très professionnelle, réactive et m'a guidée à chaque étape. J'ai pu concrétiser mon rêve grâce à eux. Je recommande vivement!",
    note: 5,
    initiales: "MN",
    couleur: "#B8A76F",
  },
  {
    nom: "Paul Fotso",
    poste: "Étudiant en Australie",
    texte:
      "Grâce à N&K Immigration, j'ai obtenu mon visa d'études pour l'Australie sans complications. Leur connaissance des procédures est impressionnante et ils m'ont sauvé du stress administratif. Équipe de confiance!",
    note: 4,
    initiales: "PF",
    couleur: "#B8A76F",
  },
  {
    nom: "Amandine Tchamba",
    poste: "Entrepreneur au Canada",
    texte:
      "J'ai travaillé avec N&K Immigration pour mon visa d'affaires au Canada. Ils ont géré tous les détails complexes avec rigueur et professionnalisme. En tant qu'entrepreneur, j'apprécie leur expertise et leur suivi régulier.",
    note: 4,
    initiales: "AT",
    couleur: "#B8A76F",
  },
  {
    nom: "David Etoundi",
    poste: "Travailleur en France",
    texte:
      "N&K Immigration a été mon meilleur choix pour mon projet de travail en France. Leur approche personnalisée et leur accompagnement de A à Z m'ont permis d'arriver sans stress. Merci pour tout!",
    note: 5,
    initiales: "DE",
    couleur: "#B8A76F",
  },
  {
    nom: "Sylvie Mbarga",
    poste: "Touriste en Suisse",
    texte:
      "Simple besoin d'un visa touristique, mais N&K Immigration a facilité tout le processus. Service rapide, explications claires et dossier accepté en premier coup. Excellent service!",
    note: 4,
    initiales: "SM",
    couleur: "#B8A76F",
  },
];

function Etoile({ remplie }: { remplie: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4" fill={remplie ? "#B8A76F" : "#e5e7eb"}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Client() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [actif, setActif] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActif((prev) => (prev + 1) % avis.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (i: number) => {
    setActif(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActif((prev) => (prev + 1) % avis.length);
    }, 5000);
  };

  const avisActif = avis[actif];

  return (
    <>
      <style>{`
        @keyframes fadeUpAvis {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .av-visible .av-1 { animation: fadeUpAvis 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .av-visible .av-2 { animation: fadeUpAvis 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .av-visible .av-3 { animation: fadeUpAvis 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both; }

        @keyframes slideAvis {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .avis-slide { animation: slideAvis 0.45s cubic-bezier(0.22,1,0.36,1) both; }

        .dot-btn {
          transition: width 0.35s cubic-bezier(0.22,1,0.36,1), background 0.35s ease;
        }
        .card-avis {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-avis:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(184,167,111,0.12);
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`relative w-full bg-white overflow-hidden py-8 md:py-24 ${visible ? "av-visible" : ""}`}
      >
        {/* Déco fond */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(184,167,111,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(184,167,111,0.05) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* ── En-tête ── */}
          <div className="av-1 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: "#B8A76F" }} />
                <span className="text-[10px] font-black uppercase tracking-[0.28em]" style={{ color: "#B8A76F" }}>
                  Témoignages clients
                </span>
              </div>
              <h2
                className="font-black uppercase leading-none text-gray-900"
                style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)" }}
              >
                Ce que disent<br />
                <span style={{ color: "#B8A76F" }}>nos clients heureux</span>
              </h2>
            </div>

            {/* Compteur */}
            <div className="hidden md:flex items-center gap-2 text-gray-900/30 font-black" style={{ fontSize: "1.1rem" }}>
              <span style={{ color: "#B8A76F", fontSize: "1.8rem" }}>
                {String(actif + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span>{String(avis.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* ── Layout principal ── */}
          <div className="av-2 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* ── Avis featured (grande carte) ── */}
            <div className="lg:col-span-3 w-full">
              <div
                key={actif}
                className="avis-slide relative bg-white border border-gray-900/10 p-8 md:p-10"
                style={{ boxShadow: "0 8px 40px rgba(184,167,111,0.08)" }}
              >
                {/* Guillemet décoratif */}
                <div
                  className="absolute top-6 right-8 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: "7rem", color: "#B8A76F", opacity: 0.07, lineHeight: 1 }}
                >
                  &quot;
                </div>

                {/* Étoiles */}
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Etoile key={i} remplie={i < avisActif.note} />
                  ))}
                </div>

                {/* Texte */}
                <p className="text-[15px] text-gray-900/75 leading-relaxed mb-8 relative z-10">
                  &quot;{avisActif.texte}&quot;
                </p>

                {/* Auteur */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0"
                    style={{ background: avisActif.couleur }}
                  >
                    {avisActif.initiales}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">{avisActif.nom}</p>
                    <p className="text-[11px] text-gray-900/50 mt-0.5">{avisActif.poste}</p>
                  </div>
                </div>
              </div>

              {/* Dots navigation */}
              <div className="flex items-center gap-2 mt-6">
                {avis.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Avis ${i + 1}`}
                    className="dot-btn h-1.5 rounded-full"
                    style={{
                      width: i === actif ? "32px" : "8px",
                      background: i === actif ? "#B8A76F" : "rgba(184,167,111,0.2)",
                    }}
                  />
                ))}
                {/* Flèches */}
                <div className="flex gap-2 ml-auto">
                  <button
                    onClick={() => goTo((actif - 1 + avis.length) % avis.length)}
                    className="w-9 h-9 border flex items-center justify-center hover:text-white transition-all"
                    style={{ borderColor: "rgba(184,167,111,0.3)", color: "rgba(184,167,111,0.6)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#B8A76F";
                      e.currentTarget.style.backgroundColor = "#B8A76F";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(184,167,111,0.3)";
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(184,167,111,0.6)";
                    }}
                    aria-label="Précédent"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                      <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={() => goTo((actif + 1) % avis.length)}
                    className="w-9 h-9 flex items-center justify-center text-white transition-all"
                    style={{ background: "#B8A76F" }}
                    aria-label="Suivant"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Liste des autres avis ── */}
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-3">
              {avis.map((a, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="card-avis text-left w-full p-5 border transition-colors duration-200"
                  style={{
                    border: i === actif ? "1.5px solid #B8A76F" : "1.5px solid rgba(184,167,111,0.1)",
                    background: i === actif ? "rgba(184,167,111,0.04)" : "white",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-xs shrink-0"
                      style={{ background: a.couleur, opacity: i === actif ? 1 : 0.6 }}
                    >
                      {a.initiales}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-gray-900 text-sm truncate">{a.nom}</p>
                      <p className="text-[10px] text-gray-900/45 truncate mt-0.5">{a.poste}</p>
                    </div>
                    {i === actif && (
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#B8A76F" }} />
                    )}
                  </div>
                  {i === actif && (
                    <p className="text-[11.5px] text-gray-900/60 leading-relaxed mt-3 line-clamp-2">
                      {a.texte}
                    </p>
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
