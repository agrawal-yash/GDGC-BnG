import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BuildSection from "@/components/BuildSection";
import Footer from "@/components/Footer";
import ContinuousBackground from "@/components/ContinuousBackground";
import GemmaSection from "@/components/GemmaSection";
import EdgeSection from "@/components/EdgeSection";
import ResponsibleAISection from "@/components/ResponsibleAISection";
import CodeAssistanceSection from "@/components/CodeAssistanceSection";
import CommunitySection from "@/components/CommunitySection";
import AppShowcaseSlider from "@/components/AppShowcaseSlider";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ContinuousBackground />
      <Navbar />
      <Hero />
      <BuildSection />
      <GemmaSection />
      <EdgeSection />
      <ResponsibleAISection />
      <CodeAssistanceSection />
      <AppShowcaseSlider />
      <CommunitySection />

      <Footer />
    </main>
  );
}
