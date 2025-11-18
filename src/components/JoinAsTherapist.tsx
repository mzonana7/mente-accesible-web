import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Calendar, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Más Pacientes",
    description: "Conecta con personas que buscan activamente ayuda profesional"
  },
  {
    icon: Calendar,
    title: "Gestión Fácil",
    description: "Administra tus horarios y citas desde una plataforma centralizada"
  },
  {
    icon: TrendingUp,
    title: "Crece tu Práctica",
    description: "Expande tu alcance y desarrolla tu carrera profesional"
  }
];

const JoinAsTherapist = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              ¿Eres Psicólogo?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-2">
              Únete a nuestra red de profesionales
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Ayuda a más personas y haz crecer tu práctica profesional con nuestra plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-background/10 backdrop-blur-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-background/20 mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/80">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">
              Requisitos para unirte
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Cédula profesional vigente",
                "Título de Licenciatura en Psicología",
                "Experiencia mínima de 1 año",
                "Compromiso con la ética profesional",
                "Disponibilidad para sesiones en línea",
                "Disposición para actualización continua"
              ].map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-lg text-lg px-8 py-6 transition-smooth"
            >
              Únete como Terapeuta
            </Button>
            <p className="text-primary-foreground/70 mt-4 text-sm">
              Te contactaremos en menos de 48 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinAsTherapist;
