
import Hero from "@/components/Hero";
import DestinationsSection from "@/components/DestinationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <DestinationsSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
