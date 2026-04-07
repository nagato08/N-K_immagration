"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    ville: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    ville: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation des champs
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
      number: "",
      ville: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
      isValid = false;
    }

    const phoneRegex = /^[0-9+\-\s()]{8,}$/;
    if (!formData.number.trim()) {
      newErrors.number = "Le numéro de téléphone est requis";
      isValid = false;
    } else if (!phoneRegex.test(formData.number.trim())) {
      newErrors.number = "Numéro de téléphone invalide";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Adresse email invalide";
      isValid = false;
    }

    if (!formData.ville.trim()) {
      newErrors.ville = "La ville est requise";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Veuillez corriger les erreurs dans le formulaire");
      return;
    }

    setIsSubmitting(true);

    try {
      // Formater le message pour WhatsApp
      const message = `*Nouveau Message de Contact*%0A%0A*Nom:* ${encodeURIComponent(formData.name)}%0A*Téléphone:* ${encodeURIComponent(formData.number)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Ville:* ${encodeURIComponent(formData.ville)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;

      // Ouvrir WhatsApp avec le message
      const whatsappUrl = `https://wa.me/237655118623?text=${message}`;
      window.open(whatsappUrl, "_blank");

      alert("Redirection vers WhatsApp en cours...");
      setFormData({
        name: "",
        email: "",
        message: "",
        number: "",
        ville: "",
      });
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour déterminer si le label doit être en position haute
  const isLabelFloating = (fieldName: string) => {
    return focusedField === fieldName || formData[fieldName as keyof typeof formData] !== "";
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden py-12 lg:py-20">
      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 rounded-sm" style={{ backgroundColor: "#B8A76F" }} />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em]" style={{ color: "#B8A76F" }}>
              Contactez-nous
            </span>
            <div className="w-8 h-0.5 rounded-sm" style={{ backgroundColor: "#B8A76F" }} />
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Parlons de votre{" "}
            <span style={{ color: "#B8A76F" }}>projet d&apos;immigration</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            Notre équipe est prête à vous aider à réaliser votre rêve d&apos;immigration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Formulaire */}
          <div className="relative rounded-2xl bg-white p-6 md:p-8 border border-gray-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`w-full rounded-xl px-4 pt-6 pb-2 text-gray-700 text-base border transition-all duration-300 focus:outline-none focus:ring-2 hover:border-amber-200 ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-amber-400 focus:ring-amber-400/20'
                  }`}
                  style={{ borderColor: errors.name ? undefined : focusedField === 'name' ? '#B8A76F' : undefined }}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isLabelFloating('name')
                      ? 'top-2 text-xs font-medium'
                      : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
                  }`}
                  style={{ color: isLabelFloating('name') ? '#B8A76F' : undefined }}
                >
                  Nom complet <span style={{ color: '#B8A76F' }}>*</span>
                </label>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Téléphone */}
              <div className="relative">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  onFocus={() => handleFocus('number')}
                  onBlur={handleBlur}
                  className={`w-full rounded-xl px-4 pt-6 pb-2 text-gray-700 text-base border transition-all duration-300 focus:outline-none focus:ring-2 hover:border-amber-200 ${
                    errors.number ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-amber-400 focus:ring-amber-400/20'
                  }`}
                  style={{ borderColor: errors.number ? undefined : focusedField === 'number' ? '#B8A76F' : undefined }}
                />
                <label
                  htmlFor="number"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isLabelFloating('number')
                      ? 'top-2 text-xs font-medium'
                      : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
                  }`}
                  style={{ color: isLabelFloating('number') ? '#B8A76F' : undefined }}
                >
                  Numéro téléphone <span style={{ color: '#B8A76F' }}>*</span>
                </label>
                {errors.number && (
                  <p className="text-red-500 text-xs mt-1">{errors.number}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full rounded-xl px-4 pt-6 pb-2 text-gray-700 text-base border transition-all duration-300 focus:outline-none focus:ring-2 hover:border-amber-200 ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-amber-400 focus:ring-amber-400/20'
                  }`}
                  style={{ borderColor: errors.email ? undefined : focusedField === 'email' ? '#B8A76F' : undefined }}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isLabelFloating('email')
                      ? 'top-2 text-xs font-medium'
                      : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
                  }`}
                  style={{ color: isLabelFloating('email') ? '#B8A76F' : undefined }}
                >
                  Email <span style={{ color: '#B8A76F' }}>*</span>
                </label>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Ville */}
              <div className="relative">
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  onFocus={() => handleFocus('ville')}
                  onBlur={handleBlur}
                  className={`w-full rounded-xl px-4 pt-6 pb-2 text-gray-700 text-base border transition-all duration-300 focus:outline-none focus:ring-2 hover:border-amber-200 ${
                    errors.ville ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-amber-400 focus:ring-amber-400/20'
                  }`}
                  style={{ borderColor: errors.ville ? undefined : focusedField === 'ville' ? '#B8A76F' : undefined }}
                />
                <label
                  htmlFor="ville"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isLabelFloating('ville')
                      ? 'top-2 text-xs font-medium'
                      : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
                  }`}
                  style={{ color: isLabelFloating('ville') ? '#B8A76F' : undefined }}
                >
                  Ville <span style={{ color: '#B8A76F' }}>*</span>
                </label>
                {errors.ville && (
                  <p className="text-red-500 text-xs mt-1">{errors.ville}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows={5}
                  className={`w-full rounded-xl px-4 pt-6 pb-2 text-gray-700 text-base border transition-all duration-300 focus:outline-none focus:ring-2 hover:border-amber-200 resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-amber-400 focus:ring-amber-400/20'
                  }`}
                  style={{ borderColor: errors.message ? undefined : focusedField === 'message' ? '#B8A76F' : undefined }}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isLabelFloating('message')
                      ? 'top-2 text-xs font-medium'
                      : 'top-6 text-sm text-gray-500'
                  }`}
                  style={{ color: isLabelFloating('message') ? '#B8A76F' : undefined }}
                >
                  Votre message <span style={{ color: '#B8A76F' }}>*</span>
                </label>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Bouton submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl py-4 px-6 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{ backgroundColor: '#B8A76F' }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Carte des horaires */}
            <div className="relative rounded-2xl bg-white p-6 md:p-8 border border-gray-200 shadow-lg">
              <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 rounded" style={{ backgroundColor: '#B8A76F' }} />
                Horaires d&apos;ouverture
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#B8A76F' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lundi - Vendredi</p>
                    <p className="font-semibold text-gray-900">7h30 - 17h30</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#B8A76F' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Samedi - Dimanche</p>
                    <p className="font-semibold text-gray-900">Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte des coordonnées */}
            <div className="relative rounded-2xl bg-white p-6 md:p-8 border border-gray-200 shadow-lg">
              <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 rounded" style={{ backgroundColor: '#B8A76F' }} />
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/237655118623?text=Salut%20je%20suis%20intéressé%20par%20vos%20services%20d'immigration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#B8A76F' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2c-5.35 0-9.71 4.34-9.716 9.69-.002 1.708.445 3.374 1.29 4.852L2.5 21.5l5.066-1.324c1.416.767 3.01 1.173 4.648 1.174h.004c5.35 0 9.71-4.34 9.716-9.69.003-2.587-1.003-5.019-2.89-6.906zM12.012 19.86h-.003c-1.446 0-2.86-.389-4.075-1.12l-.292-.174-3.013.788.804-2.937-.19-.302a7.96 7.96 0 0 1-1.224-4.25c.005-4.39 3.575-7.96 7.972-7.96 2.13 0 4.13.83 5.635 2.337a7.933 7.933 0 0 1 2.335 5.648c-.005 4.39-3.574 7.96-7.96 7.96z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-gray-900">+237 655 11 86 23</p>
                  </div>
                </a>

                {/* Téléphone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#B8A76F' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-semibold text-gray-900">+237 670 35 92 59</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#B8A76F' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900">contact@nk-immigration.com</p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#B8A76F' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p className="font-semibold text-gray-900">Bepanda One To One</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="max-w-6xl mx-auto mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">

            {/* Header */}
            <div className="flex items-center justify-between bg-white px-5 py-4" style={{ borderBottom: "1px solid rgba(184,167,111,0.1)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#B8A76F" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-poppins text-sm font-semibold text-gray-900">N&K Immigration Angency</p>
                  <p className="text-xs text-gray-500">Douala — Bepanda, Cameroun</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Bepanda,Douala,Cameroun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                style={{ color: "#B8A76F" }}
              >
                Ouvrir dans Maps
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>

            {/* Google Maps embed — Bepanda, Douala */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.2568181652157!2d9.751234!3d4.052222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106112a1a1a1a1a1%3A0x0!2sBepanda%2C+Douala%2C+Cameroon!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="400"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
