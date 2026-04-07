import HeroSection from "@/components/apropos/HeroSection";
import About from "@/components/apropos/About";
import Mission from "@/components/apropos/Mission";
import Vision from "@/components/apropos/Vision";
import Client from "@/components/acceuil/Client";

export default function AProposPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <About />
      <Mission />
      <Vision />
      <Client />
    </main>
  );
}
