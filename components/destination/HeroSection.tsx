"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DESTINATIONS = [
  { id: 1, name: "France", flag: "🇫🇷", image: "/images/destination_img.png", position: "top-0 right-0" },
  { id: 2, name: "Canada", flag: "🇨🇦", image: "/images/destination_img1.png", position: "top-32 md:top-64 left-0" },
  { id: 3, name: "Belgique", flag: "🇧🇪", image: "/images/destination_img2.png", position: "bottom-0 right-0 md:right-12" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes driftPlane {
          0% { transform: translateX(-100px) translateY(0) rotate(15deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(400px) translateY(-100px) rotate(15deg); opacity: 0; }
        }

        .dest-left { animation: fadeInLeft 0.8s ease 0.2s both; }
        .dest-right { animation: fadeInRight 0.8s ease 0.3s both; }
        .dest-card { animation: float 3s ease-in-out infinite; }
        .dest-card:nth-child(2) { animation-delay: 0.5s; }
        .dest-card:nth-child(3) { animation-delay: 1s; }

        .plane-icon {
          position: absolute;
          font-size: 24px;
          opacity: 0;
        }
        .plane-1 { animation: driftPlane 8s infinite; top: 15%; left: -50px; }
        .plane-2 { animation: driftPlane 10s infinite 2s; top: 35%; left: -50px; }
        .plane-3 { animation: driftPlane 9s infinite 4s; top: 55%; left: -50px; }

        .dotted-line {
          position: absolute;
          border: 2px dashed rgba(184, 167, 111, 0.3);
          border-top: none;
          border-left: none;
        }

        .stat-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: rgba(184, 167, 111, 0.08);
          border-radius: 12px;
          border: 1px solid rgba(184, 167, 111, 0.15);
        }
        .stat-badge svg {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
      `}</style>

      <section
        ref={ref}
        className={`relative w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-12 ${visible ? "loaded" : ""}`}
      >
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B8A76F]/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#B8A76F]/5 blur-3xl pointer-events-none" />

        {/* Avions animés */}
        <div className="plane-icon plane-1">✈️</div>
        <div className="plane-icon plane-2">✈️</div>
        <div className="plane-icon plane-3">✈️</div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Colonne gauche */}
            <div className="dest-left">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-8 h-0.5 rounded-full" style={{ background: "#B8A76F" }} />
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]" style={{ color: "#B8A76F" }}>
                  Explorez le monde
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Vos destinations{" "}
                <span style={{ color: "#B8A76F" }}>d&apos;immigration</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Découvrez nos destinations d&apos;exception et réalisez votre projet d&apos;immigration avec confiance et sérénité.
              </p>

              {/* Bouton CTA */}
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 mb-10"
                style={{ background: "#B8A76F" }}
              >
                Découvrir nos destinations
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Stats */}
              <div className="space-y-4">
                <div className="stat-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" style={{ stroke: "#B8A76F" }} />
                  </svg>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Destinations servies</div>
                  </div>
                </div>

                <div className="stat-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" style={{ stroke: "#B8A76F" }} />
                  </svg>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Taux de succès</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite - Cartes */}
            <div className="dest-right relative h-full min-h-[500px] md:min-h-[600px]">
              {DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  className={`dest-card absolute w-72 md:w-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer ${dest.position}`}
                >
                  {/* Image */}
                  <div className="relative w-full h-44 md:h-56">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

                  </div>
                </div>
              ))}

              {/* Pointillés décoratifs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                style={{ stroke: "#B8A76F", strokeWidth: 2, strokeDasharray: "8,4" }}
              >
                <path d="M 100 50 Q 300 150 450 200" fill="none" />
                <path d="M 150 300 Q 350 200 480 100" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
