import { MessageSquare, Calendar, Video } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Cuéntanos tu Problemática",
    description: "Comparte tu situación y necesidades para encontrar el apoyo ideal"
  },
  {
    icon: Calendar,
    title: "Agenda tu Cita",
    description: "Selecciona el horario que mejor se adapte a tu rutina"
  },
  {
    icon: Video,
    title: "Inicia tu Terapia",
    description: "Conecta desde la comodidad de tu hogar u oficina"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontrar el apoyo que necesitas es simple y rápido
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-hero mb-6 shadow-card transition-smooth group-hover:shadow-hover group-hover:scale-110">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
