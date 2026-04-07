"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ImageCategory = "all" | "affiches" | "certificats" | "visa";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<ImageCategory, "all">;
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Affiches
  { id: "affiche1", src: "/images/affiche.jpeg", alt: "Affiche 1", category: "affiches" },
  { id: "affiche2", src: "/images/affiche2.jpeg", alt: "Affiche 2", category: "affiches" },
  { id: "affiche3", src: "/images/affiche3.jpeg", alt: "Affiche 3", category: "affiches" },
  { id: "affiche4", src: "/images/affiche4.jpeg", alt: "Affiche 4", category: "affiches" },
  { id: "affiche5", src: "/images/affiche5.jpeg", alt: "Affiche 5", category: "affiches" },
  { id: "affiche6", src: "/images/affiche6.jpeg", alt: "Affiche 6", category: "affiches" },
  { id: "affiche7", src: "/images/affiche7.jpeg", alt: "Affiche 7", category: "affiches" },
  { id: "affiche8", src: "/images/affiche8.jpeg", alt: "Affiche 8", category: "affiches" },
  { id: "affiche9", src: "/images/affiche9.jpeg", alt: "Affiche 9", category: "affiches" },
  { id: "affiche10", src: "/images/affiche10.jpeg", alt: "Affiche 10", category: "affiches" },
  { id: "affiche11", src: "/images/affiche11.jpeg", alt: "Affiche 11", category: "affiches" },
  { id: "affiche12", src: "/images/affiche12.jpeg", alt: "Affiche 12", category: "affiches" },
  { id: "affiche13", src: "/images/affiche13.jpeg", alt: "Affiche 13", category: "affiches" },
  { id: "affiche14", src: "/images/affiche14.jpeg", alt: "Affiche 14", category: "affiches" },
  { id: "affiche15", src: "/images/affiche15.jpeg", alt: "Affiche 15", category: "affiches" },
  { id: "affiche16", src: "/images/affiche16.jpeg", alt: "Affiche 16", category: "affiches" },
  { id: "affiche17", src: "/images/affiche17.jpeg", alt: "Affiche 17", category: "affiches" },

  // Certificats
  { id: "cert1", src: "/images/certificat.jpeg", alt: "Certificat 1", category: "certificats" },
  { id: "cert2", src: "/images/certificat2.jpeg", alt: "Certificat 2", category: "certificats" },
  { id: "cert3", src: "/images/certificat3.jpeg", alt: "Certificat 3", category: "certificats" },

  // Visa
  { id: "visa1", src: "/images/visa.jpeg", alt: "Visa 1", category: "visa" },
  { id: "visa2", src: "/images/visa2.jpeg", alt: "Visa 2", category: "visa" },
  { id: "visa3", src: "/images/visa3.jpeg", alt: "Visa 3", category: "visa" },
  { id: "visa4", src: "/images/visa4.jpeg", alt: "Visa 4", category: "visa" },
  { id: "visa5", src: "/images/visa5.jpeg", alt: "Visa 5", category: "visa" },
  { id: "visa6", src: "/images/visa6.jpeg", alt: "Visa 6", category: "visa" },
  { id: "visa7", src: "/images/visa7.jpeg", alt: "Visa 7", category: "visa" },
];

const FILTERS: { label: string; value: ImageCategory }[] = [
  { label: "Tout", value: "all" },
  { label: "Affiches", value: "affiches" },
  { label: "Certificats", value: "certificats" },
  { label: "Visa", value: "visa" },
];

export default function GalerieGrid() {
  const [activeFilter, setActiveFilter] = useState<ImageCategory>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .gallery-item {
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
        }

        .gallery-item:nth-child(1) { animation-delay: 0.05s; }
        .gallery-item:nth-child(2) { animation-delay: 0.1s; }
        .gallery-item:nth-child(3) { animation-delay: 0.15s; }
        .gallery-item:nth-child(4) { animation-delay: 0.2s; }
        .gallery-item:nth-child(5) { animation-delay: 0.25s; }
        .gallery-item:nth-child(6) { animation-delay: 0.3s; }
        .gallery-item:nth-child(7) { animation-delay: 0.35s; }
        .gallery-item:nth-child(8) { animation-delay: 0.4s; }
        .gallery-item:nth-child(9) { animation-delay: 0.45s; }

        .filter-btn {
          position: relative;
          font-family: 'Poppins', sans-serif;
          padding: 0.75rem 1.5rem;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: #666;
        }

        .filter-btn:hover {
          color: #B8A76F;
        }

        .filter-btn.active {
          color: #B8A76F;
        }

        .filter-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.5rem;
          right: 1.5rem;
          height: 3px;
          background: linear-gradient(90deg, transparent, #B8A76F, transparent);
          border-radius: 2px;
        }

        .gallery-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: #f5f5f5;
          aspect-ratio: 1;
        }

        .gallery-image-wrapper img {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          object-fit: cover;
        }

        .gallery-image-wrapper:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(184, 167, 111, 0.15);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .gallery-image-wrapper:hover .gallery-overlay {
          opacity: 1;
        }

        .zoom-icon {
          width: 48px;
          height: 48px;
          background: #B8A76F;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gallery-image-wrapper:hover .zoom-icon {
          transform: scale(1);
        }

        .modal-overlay {
          animation: fadeInUp 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style>

      <section className="w-full py-12 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
              >
                <div
                  className="gallery-image-wrapper"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="w-full h-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="gallery-overlay">
                    <div className="zoom-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-poppins">
                Aucune image trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {/* Modal */}
{selectedImage && (
  <div
    className="modal-overlay fixed inset-0 bg-black/90 flex items-center justify-center p-4"
    style={{ zIndex: 9999 }}
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="modal-content relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="close-btn"
        aria-label="Fermer"
      >
        <X size={28} strokeWidth={2} />
      </button>

      {/* Conteneur corrigé pour Image */}
      <div className="relative w-full h-[80vh] bg-black/50 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={selectedImage}
          alt="Image agrandie"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
)}
    </>
  );
}
