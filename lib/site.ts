/** Coordonnées officielles (source : flyers 2026). */
export const SITE = {
  name: "Ntchoupe Immigration Agency",
  tagline: "Votre partenaire pour vos projets de mobilité internationale",
  phoneDisplay: "+237 6 89 47 96 60",
  phoneIntl: "+237689479660",
  phoneFranceDisplay: "+33 7 56 83 09 18",
  phoneFranceIntl: "+33756830918",
  email: "ntchoupeimmigration@gmail.com",
  address: "Douala – Bépanda One To One, Cameroun",
} as const;

export const GOLD = "#B8A76F";

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.phoneIntl.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappUrl(
  "Bonjour, je viens du site Ntchoupe Immigration et j'aimerais avoir plus d'informations sur vos services."
);
