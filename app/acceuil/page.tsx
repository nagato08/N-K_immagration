import HeroSection from "@/components/acceuil/HeroSection";
import Offres from "@/components/acceuil/Offres";
import Vision from "@/components/acceuil/Vision";
import Service from "@/components/acceuil/Service";
import Destination from "@/components/acceuil/Destination";
import Client from "@/components/acceuil/Client";
import Cta from "@/components/acceuil/Cta";

export default function AccueilPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <Vision />
      <Offres />
      <Service />
      <Destination />
      <Cta />
      <Client />
    </main>
  );
}
