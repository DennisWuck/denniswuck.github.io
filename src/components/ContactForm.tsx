import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xbloevkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Bericht verzonden!",
          description: "Bedankt voor uw bericht. Ik neem zo snel mogelijk contact met u op.",
          duration: 5000,
        });
        reset();
      } else {
        throw new Error("Er ging iets mis bij het verzenden");
      }
    } catch (error) {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-inkaart-primary mb-4">Contact opnemen</h2>
          <p className="text-lg text-inkaart-dark">
            Heeft u vragen over mijn dienstverlening of wilt u een vrijblijvende offerte? 
            Neem gerust contact met mij op!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-6 h-full">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-inkaart-accent/10 rounded-full p-3 mr-4">
                    <User className="h-6 w-6 text-inkaart-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-inkaart-primary mb-1">Dennis Wuck</h3>
                    <p className="text-inkaart-dark">Financieel adviseur & Boekhouder</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-inkaart-accent/10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-inkaart-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-inkaart-primary mb-1">E-mail</h3>
                    <a 
                      href="mailto:inkaartdw@gmail.com" 
                      className="text-inkaart-dark hover:text-inkaart-accent transition-colors"
                    >
                      inkaartdw@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-inkaart-accent/10 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-inkaart-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-inkaart-primary mb-1">Telefoon</h3>
                    <a 
                      href="tel:0612407439" 
                      className="text-inkaart-dark hover:text-inkaart-accent transition-colors"
                    >
                      06-12407439
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-inkaart-accent/10 rounded-full p-3 mr-4">
                    <MessageSquare className="h-6 w-6 text-inkaart-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-inkaart-primary mb-1">Adres</h3>
                    <p className="text-inkaart-dark">'t Swafert 2012<br />7552 ZD Hengelo (Ov)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Naam</Label>
                  <Input
                    id="name"
                    placeholder="Uw naam"
                    {...register("name", { required: "Naam is verplicht" })}
                    className={errors.name ? "border-red-300" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="uw.email@voorbeeld.nl"
                    {...register("email", { 
                      required: "E-mail is verplicht",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Voer een geldig e-mailadres in"
                      }
                    })}
                    className={errors.email ? "border-red-300" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    placeholder="Uw telefoonnummer"
                    {...register("phone")}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    placeholder="Schrijf hier uw vraag of opmerking"
                    rows={5}
                    {...register("message", { required: "Bericht is verplicht" })}
                    className={errors.message ? "border-red-300" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-inkaart-primary hover:bg-inkaart-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
