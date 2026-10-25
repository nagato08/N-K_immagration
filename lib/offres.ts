export type OffreType = "Travail" | "Études" | "Tourisme" | "Affaires";

export interface Offre {
  id: string;
  pays: string;
  flag: string;
  type: OffreType;
  titre: string;
  accroche: string;
  flyer: string;
  /** Ce que couvre l'accompagnement */
  services: string[];
  documents: string[];
  /** Documents complémentaires éventuels */
  documentsOptionnels?: string[];
  secteurs?: string[];
  infos?: { label: string; value: string }[];
  note?: string;
}

export const OFFRES: Offre[] = [
  {
    id: "italie-tourisme",
    pays: "Italie",
    flag: "🇮🇹",
    type: "Tourisme",
    titre: "Visa touristique pour l'Italie",
    accroche: "Découvrez le monde, vivez l'Italie : tourisme, découverte, vacances, visite familiale, culture.",
    flyer: "/images/flyers/flyer1.jpg",
    services: ["Orientation", "Mise en relation", "Suivi du dossier", "Conseils"],
    documents: [
      "Passeport (copie des pages pertinentes)",
      "Carte nationale d'identité (copie lisible)",
      "Casier judiciaire (si requis)",
      "Justificatif de profession (attestation de travail, registre de commerce, certificat de scolarité…)",
      "Justificatifs financiers (relevés bancaires des 3 derniers mois et attestation de solde)",
      "Acte de naissance des enfants (si vous voyagez avec des enfants)",
      "Justificatifs d'attaches au Cameroun (situation familiale, professionnelle, économique ou patrimoniale)",
    ],
    documentsOptionnels: [
      "Formulaire de demande",
      "Photo d'identité",
      "Réservation de transport (billet d'avion)",
      "Justificatif d'hébergement (réservation d'hôtel)",
      "Assurance médicale de voyage",
      "Itinéraire de séjour",
    ],
    note: "La liste définitive dépend de votre profil et des exigences officielles du consulat. La préparation du dossier ne garantit pas l'obtention du visa.",
  },
  {
    id: "italie-travail",
    pays: "Italie",
    flag: "🇮🇹",
    type: "Travail",
    titre: "Travailler en Italie avec un contrat de travail",
    accroche: "Nous vous accompagnons dans la recherche d'un employeur en Italie et la préparation de votre visa national D.",
    flyer: "/images/flyers/flyer2.jpg",
    services: [
      "Étude de votre profil, compétences et objectifs",
      "Recherche d'un employeur via notre partenaire en Italie",
      "Obtention d'une offre d'emploi et d'un contrat de travail",
      "Démarches de visa national D auprès du consulat",
      "Préparation au départ : installation et vie en Italie",
    ],
    documents: [
      "Formulaire de demande de visa national D",
      "Passeport valide",
      "Photos d'identité conformes",
      "Copie de la CNI",
      "Contrat de travail",
      "Documents relatifs à l'emploi (attestation, fiches de paie…)",
      "Assurance médicale de voyage",
      "Autres justificatifs selon le profil",
    ],
    secteurs: [
      "Bâtiment et construction",
      "Industrie et usine",
      "Santé et aide à la personne",
      "Agriculture et agroalimentaire",
      "Hôtellerie et restauration",
    ],
    note: "La recherche d'un employeur et l'obtention d'un contrat ne garantissent pas l'obtention du visa.",
  },
  {
    id: "canada-travail",
    pays: "Canada",
    flag: "🇨🇦",
    type: "Travail",
    titre: "Canada : contrat de travail",
    accroche: "Travaillez légalement au Canada. Recherche d'employeur, préparation du dossier et démarches de visa.",
    flyer: "/images/flyers/flyer3.jpg",
    services: [
      "Recherche d'employeurs au Canada",
      "Informations claires et fiables",
      "Assistance personnalisée",
      "Préparation complète du dossier",
      "Conseils avant et après le départ",
      "Suivi jusqu'à l'obtention du visa",
    ],
    documents: [
      "Passeport en cours de validité (copie couleur)",
      "Acte de naissance (copie couleur)",
      "Carte nationale d'identité ou récépissé",
      "Adresse e-mail personnelle active",
      "Curriculum vitae (même simple)",
      "4 demi-cartes photos 35 × 45 mm, fond blanc",
      "Acte de mariage (si applicable)",
      "Attestation de domiciliation bancaire (compte courant uniquement)",
    ],
    secteurs: [
      "Construction et bâtiment",
      "Agriculture",
      "Industrie et usine",
      "Restauration et hôtellerie",
      "Santé et aide à la personne",
      "Transport et logistique",
      "Entretien et nettoyage",
    ],
  },
  {
    id: "chine-etudes",
    pays: "Chine",
    flag: "🇨🇳",
    type: "Études",
    titre: "Visa étudiant pour la Chine",
    accroche: "Universités reconnues, frais de scolarité abordables, programmes diversifiés et une expérience internationale unique.",
    flyer: "/images/flyers/flyer4.jpg",
    services: [
      "Choix de l'université et du programme adapté",
      "Préparation et vérification du dossier",
      "Suivi de la procédure de visa",
      "Conseils avant le départ (voyage, installation, vie sur place)",
      "Informations sur la vie étudiante en Chine",
    ],
    documents: [
      "Passeport valide avec des pages disponibles",
      "Carte nationale d'identité (copie lisible)",
      "Photos d'identité conformes",
      "Diplômes et relevés de notes",
      "Acte de naissance (copie intégrale)",
      "Casier judiciaire récent",
    ],
    infos: [
      { label: "Atouts", value: "Bourses possibles, nombreux domaines de formation, tremplin international" },
    ],
    note: "La liste des documents peut varier selon l'université et les exigences consulaires.",
  },
  {
    id: "chine-affaires",
    pays: "Chine",
    flag: "🇨🇳",
    type: "Affaires",
    titre: "Visa d'affaires pour la Chine",
    accroche: "Participez à des salons, rencontrez vos partenaires et explorez de nouvelles opportunités d'affaires.",
    flyer: "/images/flyers/flyer5.jpg",
    services: [
      "Informations sur les exigences et la procédure",
      "Préparation et vérification de votre dossier",
      "Lettre d'invitation ou documents de visa d'affaires",
      "Conseils pour le voyage (réservation, séjour, déplacements)",
      "Suivi jusqu'à l'obtention du visa",
    ],
    documents: [
      "Passeport en cours de validité avec des pages disponibles",
      "Carte nationale d'identité (copie lisible)",
      "Photos d'identité récentes (format demi-carte, fond blanc)",
    ],
    secteurs: ["Rendez-vous professionnels", "Salons et foires commerciales", "Prospection de partenaires", "Visites d'entreprises et d'usines"],
  },
  {
    id: "russie-etudes",
    pays: "Russie",
    flag: "🇷🇺",
    type: "Études",
    titre: "Étudier en Russie 2026 / 2027",
    accroche: "Plus de 900 universités et de nombreuses possibilités pour les étudiants internationaux, de l'admission au visa.",
    flyer: "/images/flyers/flyer6.jpg",
    services: [
      "Traduction des documents (baccalauréat, relevés, passeport)",
      "Demande d'admission auprès des universités",
      "Obtention de l'invitation (délai indicatif : 7 à 45 jours)",
      "Démarches administratives : légalisation MINSEC / MINREX, visite médicale",
      "Préparation à l'entretien d'ambassade",
      "Demande de visa",
    ],
    documents: [
      "Lettre d'admission",
      "Lettre d'invitation",
      "Diplômes et relevés de notes traduits",
      "Documents légalisés",
      "Résultats médicaux",
      "Passeport et photocopies",
      "Photo d'identité 3,5 × 4,5 cm",
      "Formulaire de demande de visa en ligne",
    ],
    infos: [
      { label: "Durée estimative", value: "Environ 2 à 3 mois" },
      { label: "Formule", value: "Admission, invitation, dossier visa, scolarité, logement universitaire et assurance pour 1 an" },
      { label: "Atouts", value: "Frais accessibles, logements universitaires, pas de caution bancaire ni de prise en charge financière" },
      { label: "À savoir", value: "Hivers froids, cours souvent en russe (année préparatoire possible), bien choisir sa ville" },
      { label: "Partenariat", value: "Ntchoupe Immigration (Cameroun) × Global Immigration (Russie)" },
    ],
    note: "Les conditions d'admission et de visa restent soumises aux exigences des universités et des autorités compétentes.",
  },
  {
    id: "russie-tourisme",
    pays: "Russie",
    flag: "🇷🇺",
    type: "Tourisme",
    titre: "Visa touristique pour la Russie",
    accroche: "Explorez Moscou, Saint-Pétersbourg, la culture et les paysages uniques de la Russie en toute sérénité.",
    flyer: "/images/flyers/flyer7.jpg",
    services: [
      "Orientation pour la demande",
      "Vérification des documents",
      "Aide à la préparation du dossier",
      "Informations sur l'invitation touristique",
      "Conseils avant le départ",
    ],
    documents: ["Passeport valide", "Photos d'identité", "Invitation touristique", "Assurance voyage", "Justificatifs selon le profil"],
    note: "Les exigences varient selon le profil et les règles en vigueur. Le visa n'est jamais garanti.",
  },
  {
    id: "turquie-travail",
    pays: "Turquie",
    flag: "🇹🇷",
    type: "Travail",
    titre: "Travail en Turquie avec contrat",
    accroche: "Rejoignez un marché dynamique : manutention, magasinage, hôtellerie, commerce et restauration.",
    flyer: "/images/flyers/flyer8.jpg",
    services: [
      "Information et orientation sur les offres d'emploi",
      "Aide à la préparation et vérification du dossier",
      "Accompagnement dans les démarches de visa",
      "Suivi de la procédure jusqu'au départ",
      "Conseils avant le départ",
      "Assistance à l'arrivée en Turquie",
    ],
    documents: [
      "Passeport en cours de validité",
      "Carnet jaune (vaccination fièvre jaune)",
      "Acte de naissance",
      "Curriculum vitae",
      "Photo 4 × 4, fond blanc",
    ],
    secteurs: ["Manutentionnaire", "Magasinier", "Hôtellerie", "Ouvrier en magasin de vêtements", "Restauration"],
    infos: [{ label: "Salaire mensuel estimé", value: "350 000 à 475 000 XAF selon le poste et l'employeur" }],
  },
];

export const FLYERS = OFFRES.map((o) => ({ id: o.id, src: o.flyer, alt: o.titre }));

export const PAYS_VEDETTES = ["Italie", "Canada", "Chine", "Russie", "Turquie"] as const;
