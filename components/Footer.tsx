"use client";

import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {

  const services = [
    "Visa Touristique",
    "Visa Travail",
    "Visa Étudiant",
    "Visa Affaires",
    "Accompagnement Personnalisé",
    "Réservation & Hébergement",
  ];

  const navLinks = [
    { label: "Accueil", href: "/acceuil" },
    { label: "Services", href: "/services" },
    { label: "Destinations", href: "/destination" },
    { label: "Galerie", href: "/galerie" },
    { label: "À propos", href: "/apropos" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { label: "Facebook", icon: FacebookIcon, href: "#" },
    { label: "WhatsApp", icon: MessageCircle, href:"https://wa.me/237688694728?text=Salut%20je%20viens%20du%20site%20N%26K%20Immigration%20et%20j%27aimerai%20avoir%20plus%20d%27information" },
  ];

  return (
    <>
      <style>{`
        .ftr-link { position: relative; transition: color 0.22s ease; }
        .ftr-link::after { content: ''; position: absolute; left: 0; bottom: -1px; width: 0; height: 1px; background: #B8A76F; transition: width 0.25s ease; }
        .ftr-link:hover::after { width: 100%; }
        .social-btn { transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s; }
        .social-btn:hover { border-color: #B8A76F !important; color: #B8A76F !important; transform: translateY(-2px); background: rgba(184,167,111,0.08) !important; }
        .badge-item { transition: border-color 0.22s, color 0.22s; }
        .badge-item:hover { border-color: rgba(184,167,111,0.6) !important; color: #B8A76F !important; }
        .nav-line { transition: width 0.25s ease, background 0.25s ease; }
        a:hover .nav-line { width: 16px !important; background: #B8A76F !important; }
        .contact-icon-box { background: rgba(184,167,111,0.08); border: 1px solid rgba(184,167,111,0.18); color: rgba(184,167,111,0.8); }
        .dot-texture { background-image: radial-gradient(circle, rgba(184,167,111,1) 1px, transparent 1px); background-size: 28px 28px; }
      `}</style>

      <footer className="relative bg-gray-900 text-white overflow-hidden">

        {/* Top gradient border */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[rgba(184,167,111,0.7)] to-transparent" />

        {/* Dot texture */}
        <div className="dot-texture absolute inset-0 pointer-events-none opacity-[0.025]" />

        {/* Hazes */}
        <div className="absolute left-0 top-0 h-100 w-100 pointer-events-none bg-[radial-gradient(circle,rgba(184,167,111,0.12)_0%,transparent_70%)]" />
        <div className="absolute right-0 bottom-0 h-87.5 w-87.5 pointer-events-none bg-[radial-gradient(circle,rgba(184,167,111,0.07)_0%,transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-12 pb-6">

          {/* ── MAIN GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">

            {/* Brand block */}
            <div className="lg:col-span-4">
              <div className="mb-4">
                <span className="text-[12px] tracking-[0.35em] uppercase font-medium text-[rgba(184,167,111,0.7)]">
                  L&apos;immigration c&apos;est notre affaire
                </span>
              </div>

              <div className="h-24 w-24 rounded-xl mb-4 overflow-hidden">
                <Image
                  src="/logo_remove.png"
                  alt="N&K Immigration Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Separator */}
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-[#B8A76F] to-transparent" />
                <div className="h-1 w-1 rounded-full bg-[#B8A76F]" />
              </div>

              <p className="text-[13.5px] leading-[1.8] mb-5 max-w-xs text-white/80">
                Agence d&apos;immigration spécialisée dans l&apos;accompagnement personnalisé. Visa travail, études, tourisme et affaires. La réussite c&apos;est la vôtre.
              </p>

              {/* Socials */}
              <div className="flex gap-2.5">
                {socials.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="social-btn w-9 h-9 flex items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.03)]"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-[12px] tracking-[0.28em] uppercase font-semibold mb-3 text-[#B8A76F]">
                Nos Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((item) => (
                  <li key={item}>
                    <Link href="/services" className="ftr-link flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white">
                      <span className="nav-line inline-block h-px w-3 bg-[rgba(184,167,111,0.4)] shrink-0" />
                      <span className="transition-colors duration-200">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h4 className="text-[12px] tracking-[0.28em] uppercase font-semibold mb-3 text-[#B8A76F]">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="ftr-link flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white">
                      <span className="nav-line inline-block h-px w-3 bg-[rgba(184,167,111,0.4)] shrink-0" />
                      <span className="transition-colors duration-200">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h4 className="text-[12px] tracking-[0.28em] uppercase font-semibold mb-3 text-[#B8A76F]">
                Nous contacter
              </h4>

              <ul className="space-y-3">
                {/* Localisation */}
                <li className="flex items-start gap-3">
                  <div className="contact-icon-box mt-0.5 shrink-0 grid h-7 w-7 place-items-center rounded-lg">
                    <MapPin size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] tracking-widest uppercase mb-0.5 text-white/25">
                      Localisation
                    </span>
                    <p className="text-white/80 text-[13px] leading-[1.6]">
                      Douala - Bépanda
                    </p>
                  </div>
                </li>

                {/* Téléphone Cameroun */}
                <li className="flex items-start gap-3">
                  <div className="contact-icon-box mt-0.5 shrink-0 grid h-7 w-7 place-items-center rounded-lg">
                    <Phone size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] tracking-widest uppercase mb-0.5 text-white/25">
                      Téléphone (Cameroun)
                    </span>
                    <a href="tel:+237688694728" className="ftr-link text-white/80 text-[13px] leading-[1.6] hover:text-[#B8A76F] transition-colors duration-200">
                      +237 688 69 47 28
                    </a>
                  </div>
                </li>

                {/* Téléphone France */}
                <li className="flex items-start gap-3">
                  <div className="contact-icon-box mt-0.5 shrink-0 grid h-7 w-7 place-items-center rounded-lg">
                    <Phone size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] tracking-widest uppercase mb-0.5 text-white/25">
                      Téléphone (France)
                    </span>
                    <a href="tel:+33756830918" className="ftr-link text-white/80 text-[13px] leading-[1.6] hover:text-[#B8A76F] transition-colors duration-200">
                      +33 756 83 09 18
                    </a>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex items-start gap-3">
                  <div className="contact-icon-box mt-0.5 shrink-0 grid h-7 w-7 place-items-center rounded-lg">
                    <MessageCircle size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] tracking-widest uppercase mb-0.5 text-white/25">
                      WhatsApp
                    </span>
                    <a href="https://wa.me/237688694728?text=Salut%20je%20viens%20du%20site%20N%26K%20Immigration%20et%20j%27aimerai%20avoir%20plus%20d%27information"
               className="ftr-link text-white/80 text-[13px] leading-[1.6] hover:text-[#B8A76F] transition-colors duration-200">
                      +237 688 69 47 28
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  <div className="contact-icon-box mt-0.5 shrink-0 grid h-7 w-7 place-items-center rounded-lg">
                    <Mail size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[12px] tracking-widest uppercase mb-0.5 text-white/25">
                      Email
                    </span>
                    <a href="mailto:info@nkimmigration.com" className="ftr-link text-white/80 text-[13px] leading-[1.6] hover:text-[#B8A76F] transition-colors duration-200 break-all">
                      info@nkimmigration.com
                    </a>
                  </div>
                </li>

                {/* Horaires */}
                <li className="flex items-start gap-3">
                  <div className="contact-icon-box mt-0.5 shrink-0 grid h-7 w-7 place-items-center rounded-lg">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[12px] tracking-widest uppercase mb-0.5 text-white/25">
                      Horaires
                    </span>
                    <span className="text-white/80 text-[13px] leading-[1.6]">
                      Lun – Ven : 8h00 – 18h00
                    </span>
                  </div>
                </li>
              </ul>

            </div>
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="border-t border-[rgba(184,167,111,0.2)] pt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-3.5 w-[1.5px] rounded-full bg-[rgba(184,167,111,0.5)]" />
                <p className="text-[11.5px] text-white/50">
                  2026 N&amp;K Immigration Agency — Tous droits réservés.
                </p>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
