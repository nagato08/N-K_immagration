import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texte - gauche */}
          <div className="flex flex-col justify-center pr-0 md:pr-8">
            <div className="mb-4">
              <span
                className="font-poppins text-sm font-semibold uppercase tracking-widest"
                style={{ color: "#B8A76F" }}
              >
                Nos Services
              </span>
            </div>

            <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Vos Rêves
              <span style={{ color: "#B8A76F" }}> d&apos;Immigration</span>
            </h1>

            <p className="font-poppins text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Avec plus de 2 ans d&apos;expérience et 20+ dossiers traités avec succès,
              nous offrons une gamme complète de services d&apos;immigration adaptés à vos besoins.
            </p>

            <p className="font-poppins text-gray-500 text-sm sm:text-base">
              Que vous aspiriez à travailler, étudier ou voyager à l&apos;étranger,
              notre équipe expérimentée vous guide à chaque étape du processus.
            </p>
          </div>

          {/* Image - droite */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/images/world-map.webp"
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
    </section>
  );
}
