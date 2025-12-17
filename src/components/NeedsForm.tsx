import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().trim().email("Ingresa un email válido").max(255, "El email es demasiado largo"),
  phone: z.string().trim().min(10, "Ingresa un teléfono válido").max(15, "El teléfono es demasiado largo"),
  helpType: z.string().min(1, "Selecciona el tipo de ayuda que buscas"),
  description: z.string().trim().min(10, "Describe tu situación con al menos 10 caracteres").max(1000, "La descripción es demasiado larga")
});

type FormData = z.infer<typeof formSchema>;

const NeedsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Encode form data for Netlify Test
      const formData = new FormData();
      formData.append("form-name", "contact");
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key as keyof FormData]);
      });

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast.success("¡Gracias! Hemos recibido tu información y pronto nos pondremos en contacto contigo.");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <section id="needs-form" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cuéntanos Qué Necesitas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Queremos entender tu situación para poder ayudarte de la mejor manera posible
          </p>
        </div>

        <form
          className="bg-card shadow-xl rounded-2xl p-8 space-y-6"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nombre Completo
            </Label>
            <Input
              id="name"
              placeholder="Tu nombre"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Teléfono
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="5512345678"
              {...register("phone")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="helpType">
              ¿Qué tipo de ayuda buscas?
            </Label>
            <Select onValueChange={(value) => setValue("helpType", value)}>
              <SelectTrigger id="helpType" className={errors.helpType ? "border-destructive" : ""}>
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ansiedad">Ansiedad y Estrés</SelectItem>
                <SelectItem value="depresion">Depresión</SelectItem>
                <SelectItem value="pareja">Terapia de Pareja</SelectItem>
                <SelectItem value="familiar">Terapia Familiar</SelectItem>
                <SelectItem value="infantil">Psicología Infantil</SelectItem>
                <SelectItem value="autoestima">Autoestima</SelectItem>
                <SelectItem value="duelo">Duelo y Pérdida</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            {/* Hidden input for Netlify form detection */}
            <input type="hidden" {...register("helpType")} />
            {errors.helpType && (
              <p className="text-sm text-destructive">{errors.helpType.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Cuéntanos un poco sobre tu situación
            </Label>
            <Textarea
              id="description"
              placeholder="Describe brevemente lo que estás experimentando y cómo podemos ayudarte..."
              rows={6}
              {...register("description")}
              className={errors.description ? "border-destructive" : ""}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Información"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Tu información está segura y será tratada de forma confidencial
          </p>
        </form>
      </div>
    </section>
  );
};

export default NeedsForm;
