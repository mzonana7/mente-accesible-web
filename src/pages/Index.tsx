import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PsychologistCard from "@/components/PsychologistCard";
import FilterBar from "@/components/FilterBar";

const psychologists = [
  {
    id: 1,
    name: "Dra. María González",
    specialty: "Ansiedad y Estrés",
    price: 350,
    rating: 4.9,
    experience: "8 años de experiencia",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    available: true
  },
  {
    id: 2,
    name: "Dr. Carlos Ramírez",
    specialty: "Depresión",
    price: 400,
    rating: 4.8,
    experience: "10 años de experiencia",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    available: true
  },
  {
    id: 3,
    name: "Lic. Ana Martínez",
    specialty: "Terapia de Pareja",
    price: 500,
    rating: 5.0,
    experience: "12 años de experiencia",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    available: false
  },
  {
    id: 4,
    name: "Dr. Luis Hernández",
    specialty: "Terapia Familiar",
    price: 450,
    rating: 4.7,
    experience: "15 años de experiencia",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    available: true
  },
  {
    id: 5,
    name: "Dra. Patricia López",
    specialty: "Psicología Infantil",
    price: 380,
    rating: 4.9,
    experience: "9 años de experiencia",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    available: true
  },
  {
    id: 6,
    name: "Lic. Roberto Silva",
    specialty: "Ansiedad y Estrés",
    price: 300,
    rating: 4.6,
    experience: "6 años de experiencia",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    available: true
  }
];

const Index = () => {
  const [filteredPsychologists, setFilteredPsychologists] = useState(psychologists);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const applyFilters = (specialty: string, price: string, search: string) => {
    let filtered = [...psychologists];

    if (specialty !== "all") {
      filtered = filtered.filter(p => p.specialty === specialty);
    }

    if (price !== "all") {
      const [min, max] = price.split("-").map(p => parseInt(p.replace("+", "")));
      if (max) {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter(p => p.price >= min);
      }
    }

    if (search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.specialty.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredPsychologists(filtered);
  };

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
    applyFilters(specialty, selectedPrice, searchTerm);
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
    applyFilters(selectedSpecialty, price, searchTerm);
  };

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    applyFilters(selectedSpecialty, selectedPrice, search);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="psychologists" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Profesionales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todos nuestros psicólogos están certificados y comprometidos con tu bienestar
            </p>
          </div>

          <div className="mb-8">
            <FilterBar 
              onSpecialtyChange={handleSpecialtyChange}
              onPriceChange={handlePriceChange}
              onSearch={handleSearch}
            />
          </div>

          {filteredPsychologists.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPsychologists.map(psychologist => (
                <PsychologistCard key={psychologist.id} {...psychologist} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No se encontraron psicólogos con los filtros seleccionados
              </p>
            </div>
          )}
        </div>
      </section>

      <HowItWorks />

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
            onClick={() => document.getElementById('psychologists')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Todos los Psicólogos
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
