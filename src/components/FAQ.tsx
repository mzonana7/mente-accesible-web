import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo funciona el proceso de emparejamiento?",
    answer: "Nuestro proceso considera múltiples factores como tu problemática principal, preferencias de enfoque terapéutico, presupuesto, modalidad preferida (online o presencial), horarios disponibles y características de personalidad para encontrar al psicólogo más adecuado para ti."
  },
  {
    question: "¿Cuánto cuesta una sesión?",
    answer: "Nuestros precios son accesibles y comienzan desde $300 pesos por sesión. El costo exacto dependerá del profesional que elijas y su experiencia. Todos nuestros psicólogos están certificados y ofrecen tarifas competitivas."
  },
  {
    question: "¿Las sesiones son online o presenciales?",
    answer: "Ofrecemos ambas modalidades. Puedes elegir sesiones en línea desde la comodidad de tu hogar u oficina, o sesiones presenciales si prefieres el contacto cara a cara. La elección es tuya y puedes filtrar según tu preferencia."
  },
  {
    question: "¿Es confidencial mi información?",
    answer: "Absolutamente. Todos nuestros psicólogos están comprometidos con el código de ética profesional y la confidencialidad. Tu información personal y todo lo que compartas en terapia está completamente protegido."
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer: "Es muy simple: explora nuestros profesionales, filtra según tus necesidades (especialidad, precio, disponibilidad), selecciona el psicólogo que más te convenga y agenda directamente desde su perfil en el horario que mejor se adapte a tu rutina."
  },
  {
    question: "¿Qué pasa si no me siento cómodo con el psicólogo asignado?",
    answer: "Tu comodidad es fundamental para el éxito de la terapia. Si no te sientes a gusto con tu psicólogo, puedes buscar otro profesional en nuestra plataforma en cualquier momento. La conexión terapeuta-paciente es clave para tu bienestar."
  },
  {
    question: "¿Necesito hacer algún pago anticipado?",
    answer: "No se requiere ningún pago por registrarte o explorar nuestros profesionales. Solo pagas cuando agendas y confirmas una sesión con el psicólogo de tu elección."
  },
  {
    question: "¿Los psicólogos están certificados?",
    answer: "Sí, todos nuestros profesionales cuentan con la cédula profesional correspondiente y están certificados para ejercer la psicología. Verificamos las credenciales de cada terapeuta antes de incluirlos en nuestra plataforma."
  }
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestro servicio
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm hover:shadow-card transition-smooth"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
