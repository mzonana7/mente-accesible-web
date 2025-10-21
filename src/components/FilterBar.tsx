import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface FilterBarProps {
  onSpecialtyChange: (specialty: string) => void;
  onPriceChange: (price: string) => void;
  onSearch: (term: string) => void;
}

const FilterBar = ({ onSpecialtyChange, onPriceChange, onSearch }: FilterBarProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Input
            placeholder="Buscar por nombre o especialidad..."
            className="w-full"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        
        <Select onValueChange={onSpecialtyChange}>
          <SelectTrigger>
            <SelectValue placeholder="Especialidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las especialidades</SelectItem>
            <SelectItem value="Ansiedad y Estrés">Ansiedad y Estrés</SelectItem>
            <SelectItem value="Depresión">Depresión</SelectItem>
            <SelectItem value="Terapia de Pareja">Terapia de Pareja</SelectItem>
            <SelectItem value="Terapia Familiar">Terapia Familiar</SelectItem>
            <SelectItem value="Psicología Infantil">Psicología Infantil</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={onPriceChange}>
          <SelectTrigger>
            <SelectValue placeholder="Rango de precio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los precios</SelectItem>
            <SelectItem value="300-500">$300 - $500</SelectItem>
            <SelectItem value="500-800">$500 - $800</SelectItem>
            <SelectItem value="800+">$800+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
