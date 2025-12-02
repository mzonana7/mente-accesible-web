import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MatchingCriteria from "@/components/MatchingCriteria";
import FAQ from "@/components/FAQ";
import JoinAsTherapist from "@/components/JoinAsTherapist";
import WhatsAppButton from "@/components/WhatsAppButton";
import NeedsForm from "@/components/NeedsForm";
import PsychologistsSection from "@/components/PsychologistsSection";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <NeedsForm />

      <PsychologistsSection />

      <HowItWorks />

      <MatchingCriteria />

      <FAQ />

      <JoinAsTherapist />

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Comienza Tu Camino Hoy
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            El primer paso hacia tu bienestar mental está a un clic de distancia
          </p>
          <button 
            className="bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-smooth"
            onClick={() => document.getElementById('needs-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Cuéntanos Qué Necesitas
          </button>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
