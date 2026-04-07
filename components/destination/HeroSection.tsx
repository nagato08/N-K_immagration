export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <span
              className="font-poppins text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#B8A76F" }}
            >
              Explorez le Monde
            </span>
          </div>

          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Nos <span style={{ color: "#B8A76F" }}>Destinations</span>
          </h1>

          <p className="font-poppins text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Découvrez les destinations que nous servons à travers nos services d&apos;immigration spécialisés.
            Que vous aspiriez à travailler, étudier ou voyager, nous avons les ressources pour vous aider.
          </p>
        </div>
      </div>
    </section>
  );
}
