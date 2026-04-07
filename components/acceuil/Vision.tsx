'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Vision = () => {
  return (
    <section className="py-16 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image côté gauche */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-2xl p-8 w-full max-w-md">
              <Image
                src="/logo_remove.png"
                alt="NK Immigration Logo"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Contenu côté droit */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span style={{ color: '#B8A76F' }}>N&K Immigration Agency</span>
                {' '}– Votre partenaire
                <br />
                de confiance en immigration
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Avec 2 ans d&apos;expertise consolidée, nous accompagnons nos clients avec professionnalisme
              dans la concrétisation de leurs projets migratoires. Notre équipe maîtrise les procédures
              des différentes destinations et vous offre un suivi personnalisé du début à la fin.
            </p>

            {/* Points clés */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span style={{ color: '#B8A76F' }} className="text-2xl">✓</span>
                <p className="text-gray-700">Plus de 20 dossiers traités avec succès</p>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: '#B8A76F' }} className="text-2xl">✓</span>
                <p className="text-gray-700">Services complets : travail, études, tourisme</p>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: '#B8A76F' }} className="text-2xl">✓</span>
                <p className="text-gray-700">Accompagnement personnalisé de A à Z</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/destination">
                <button style={{ backgroundColor: '#B8A76F' }} className="hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-opacity duration-300">
                  Découvrez nos destinations →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
