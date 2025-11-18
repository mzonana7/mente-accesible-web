import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza con tu número de WhatsApp (formato internacional sin + ni espacios)
    const phoneNumber = "5215512345678"; // Ejemplo: 521 + 10 dígitos
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios de psicología.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-smooth animate-in fade-in slide-in-from-bottom-4 duration-500"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
