import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar } from "lucide-react";

interface PsychologistCardProps {
  name: string;
  specialty: string;
  price: number;
  rating: number;
  experience: string;
  image: string;
  available: boolean;
}

const PsychologistCard = ({ 
  name, 
  specialty, 
  price, 
  rating, 
  experience, 
  image,
  available 
}: PsychologistCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-hover transition-smooth bg-gradient-card">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-xl text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{experience}</p>
          </div>
          <div className="flex items-center gap-1 bg-accent px-2 py-1 rounded-md">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-semibold text-accent-foreground">{rating}</span>
          </div>
        </div>
        
        <Badge variant="secondary" className="mb-4">
          {specialty}
        </Badge>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-primary">${price}</p>
            <p className="text-xs text-muted-foreground">por sesión</p>
          </div>
          {available && (
            <Badge variant="outline" className="border-primary text-primary">
              Disponible
            </Badge>
          )}
        </div>
        
        <Button className="w-full transition-smooth">
          <Calendar className="mr-2 h-4 w-4" />
          Agendar Cita
        </Button>
      </div>
    </Card>
  );
};

export default PsychologistCard;
