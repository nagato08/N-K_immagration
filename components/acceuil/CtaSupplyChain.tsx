import { Layers, Share2, TrendingUp, ArrowUpRight } from "lucide-react";

const CtaSupplyChain = () => {
  const steps = [
    {
      icon: Layers,
      title: "Structurer",
      desc: "Nous organisons chaque mission en amont : choix du camion, planification du chargement, anticipation des étapes — pour des opérations sans improvisation.",
    },
    {
      icon: Share2,
      title: "Coordonner",
      desc: "Communication directe avec votre équipe et nos chauffeurs, mise en relation avec nos partenaires logistiques sur l'ensemble du parcours.",
    },
    {
      icon: TrendingUp,
      title: "Optimiser",
      desc: "Itinéraires choisis, délais maîtrisés, coûts optimisés — nous améliorons en continu nos process pour livrer plus vite et plus sûr.",
    },
  ];

  return (
    <section className="relative w-full  py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Carte centrée style image */}
        <div className="relative overflow-hidden rounded-3xl bg-[#14181F] px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-12 sm:pb-14">
          {/* Texte watermark en arrière-plan */}
          <span
            aria-hidden
            className="hidden sm:block absolute -top-2 left-6 sm:left-12 lg:left-16 font-poppins font-bold text-white/4 select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}
          >
            Supply Chain
          </span>

          {/* Petit label souligné */}
          <p className="relative font-poppins text-[11px] font-semibold tracking-[0.2em] uppercase text-white inline-block mb-5">
            Groupe Ntchoupe
            <span className="absolute left-0 -bottom-1 h-px w-full bg-white/70" />
          </p>

          {/* Titre principal */}
          <h2 className="relative font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-white mb-12 sm:mb-16 max-w-3xl">
            Notre branche logistique pour le{" "}
            <span style={{ color: "#B8A76F" }}>transport de marchandises.</span>
          </h2>

          {/* Stepper horizontal */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-12">
            {/* Icônes + lignes pointillées */}
            <div className="hidden md:grid md:col-span-3 md:grid-cols-3 items-center gap-4 mb-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                return (
                  <div key={`icon-${index}`} className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-full shrink-0"
                      style={{ backgroundColor: "#B8A76F" }}
                    >
                      <Icon size={20} className="text-[#0B1220]" strokeWidth={2.5} />
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 h-px"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgba(255,255,255,0.25) 50%, transparent 50%)",
                          backgroundSize: "10px 1px",
                          backgroundRepeat: "repeat-x",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Textes des étapes */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={`text-${index}`} className="flex flex-col">
                  {/* Icône visible uniquement sur mobile */}
                  <div
                    className="md:hidden flex items-center justify-center h-12 w-12 rounded-full mb-4"
                    style={{ backgroundColor: "#B8A76F" }}
                  >
                    <Icon size={20} className="text-[#0B1220]" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-poppins text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-poppins text-sm leading-relaxed text-white/55">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 border-t border-white/5">
            <p className="font-poppins text-sm text-white/55 sm:flex-1 pt-4">
              Découvrez l&apos;ensemble de nos services logistiques au Cameroun &amp; en Afrique centrale.
            </p>
            <a
              href="https://ntchoupe-supply-chain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-poppins font-semibold text-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,167,111,0.35)] hover:scale-105 active:scale-95 mt-4 sm:mt-0"
              style={{ backgroundColor: "#B8A76F", color: "#0B1220" }}
            >
              Visiter le site
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSupplyChain;
