import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary-foreground">Mi Espacio Seguro</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#como-funciona" 
            className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Cómo Funciona
          </a>
          <a 
            href="#needs-form" 
            className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('needs-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contacto
          </a>
        </nav>
        <Button 
          variant="secondary"
          onClick={() => document.getElementById('needs-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Comenzar
        </Button>
      </div>
    </header>
  );
};

export default Header;
