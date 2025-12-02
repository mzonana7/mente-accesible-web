import PsychologistCard from "./PsychologistCard";

const psychologists = [
  {
    name: "Dra. María González",
    specialty: "Ansiedad y Depresión",
    price: 350,
    rating: 4.9,
    experience: "8 años de experiencia",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dr. Carlos Ramírez",
    specialty: "Terapia de Pareja",
    price: 400,
    rating: 4.8,
    experience: "12 años de experiencia",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Trauma y TEPT",
    price: 300,
    rating: 4.7,
    experience: "6 años de experiencia",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    available: false,
  },
  {
    name: "Dr. Roberto Hernández",
    specialty: "Adicciones",
    price: 350,
    rating: 4.9,
    experience: "10 años de experiencia",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dra. Laura Sánchez",
    specialty: "Trastornos Alimenticios",
    price: 380,
    rating: 4.8,
    experience: "9 años de experiencia",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
    available: true,
  },
  {
    name: "Dr. Miguel Torres",
    specialty: "Psicología Infantil",
    price: 320,
    rating: 4.6,
    experience: "7 años de experiencia",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    available: true,
  },
];

const PsychologistsSection = () => {
  return (
    <section id="psychologists" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Psicólogos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionales certificados listos para acompañarte en tu proceso de bienestar mental
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologists.map((psychologist, index) => (
            <PsychologistCard key={index} {...psychologist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsychologistsSection;
