import HeroSection from "@/components/services/HeroSection";
import ServicesList from "@/components/services/ServicesList";
import Process from "@/components/services/Process";
import Choose from "@/components/services/Choose";
import Faq from "@/components/services/Faq";

export default function ServicesPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesList />
      <Process />
      <Choose />
      <Faq />
    </main>
  );
}
