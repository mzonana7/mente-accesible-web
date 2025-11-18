import { Brain, Heart, DollarSign, Monitor, User, FileText, Star, MapPin, Clock, MessageSquare } from "lucide-react";

const criteria = [
  {
    icon: Brain,
    title: "Problemática principal",
    description: "Tu motivo de consulta específico"
  },
  {
    icon: Heart,
    title: "Enfoque terapéutico",
    description: "Metodología que mejor se adapta a ti"
  },
  {
    icon: DollarSign,
    title: "Costo",
    description: "Ajustado a tu presupuesto"
  },
  {
    icon: Monitor,
    title: "Modalidad",
    description: "En línea o presencial"
  },
  {
    icon: User,
    title: "Personalidad",
    description: "Compatibilidad con tu forma de ser"
  },
  {
    icon: FileText,
    title: "Experiencia previa",
    description: "En procesos terapéuticos"
  },
  {
    icon: Star,
    title: "Preferencias personales",
    description: "Tus necesidades específicas"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Cercanía y accesibilidad"
  },
  {
    icon: Clock,
    title: "Horarios",
    description: "Disponibilidad que se adapta a ti"
  },
  {
    icon: MessageSquare,
    title: "Otros temas",
    description: "Aspectos adicionales a trabajar"
  }
];

const MatchingCriteria = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Aspectos que tomamos en cuenta para
          </h2>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            encontrar al terapeuta ideal para ti
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:shadow-card transition-smooth group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-hero mb-4 shadow-sm transition-smooth group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {criterion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {criterion.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MatchingCriteria;
