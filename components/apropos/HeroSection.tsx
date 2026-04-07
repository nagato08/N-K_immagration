export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span
              className="font-poppins text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#B8A76F" }}
            >
              Qui Sommes-Nous
            </span>
          </div>

          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            NK <span style={{ color: "#B8A76F" }}>Immigration</span>
          </h1>

          <p className="font-poppins text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            L&apos;immigration c&apos;est notre affaire, la réussite c&apos;est la vôtre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#B8A76F" }}
            >
              <span className="text-3xl text-white font-bold">2+</span>
            </div>
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">Ans</h3>
            <p className="font-poppins text-gray-600">d&apos;expérience en immigration</p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#B8A76F" }}
            >
              <span className="text-3xl text-white font-bold">20+</span>
            </div>
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">Dossiers</h3>
            <p className="font-poppins text-gray-600">traités avec succès</p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#B8A76F" }}
            >
              <span className="text-3xl text-white font-bold">14+</span>
            </div>
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">Destinations</h3>
            <p className="font-poppins text-gray-600">couvertes mondialement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
