import { 
  BarChart3, 
  FileText, 
  Calculator, 
  LineChart, 
  FileSpreadsheet, 
  RefreshCcw,
  ClipboardCheck,
  CalendarCheck,
  FileSearch,
  Network,
  Scale,
  Briefcase
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={36} className="text-inkaart-primary" />,
      title: "FINANCIËLE ADMINISTRATIE",
      description: "Uw boekhouding netjes en correct bijgehouden, zodat u altijd inzicht heeft in uw financiële situatie."
    },
    {
      icon: <FileText size={36} className="text-inkaart-primary" />,
      title: "JAARREKENING",
      description: "Het opstellen van jaarrekeningen voor eenmanszaken, VOF's en BV's volgens de geldende regelgeving."
    },
    {
      icon: <Calculator size={36} className="text-inkaart-primary" />,
      title: "FISCALE AANGIFTEN",
      description: "Verzorging van uw aangiften omzetbelasting, inkomstenbelasting, loonbelasting en vennootschapsbelasting."
    },
    {
      icon: <ClipboardCheck size={36} className="text-inkaart-primary" />,
      title: "CONTROLEWERKZAAMHEDEN",
      description: "Wij voeren grondige controles uit op uw financiële administratie om de juistheid en volledigheid te waarborgen."
    },
    {
      icon: <CalendarCheck size={36} className="text-inkaart-primary" />,
      title: "MAAND- EN JAARAFSLUITINGEN",
      description: "Het tijdig en nauwkeurig afsluiten van uw financiële periodes zodat u altijd over actuele en betrouwbare cijfers beschikt."
    },
    {
      icon: <FileSearch size={36} className="text-inkaart-primary" />,
      title: "ACCOUNT RECONCILIATIONS",
      description: "Het controleren en afstemmen van grootboekrekeningen en subadministraties om afwijkingen vroegtijdig te signaleren."
    },
    {
      icon: <Network size={36} className="text-inkaart-primary" />,
      title: "INTERCOMPANY VERWERKING",
      description: "Beheer en controle van onderlinge transacties binnen groepsverbanden, inclusief het opstellen van de juiste verantwoordingen."
    },
    {
      icon: <Scale size={36} className="text-inkaart-primary" />,
      title: "CONTROLE BALANSPOSTEN",
      description: "Het controleren en analyseren van balansposten om een betrouwbaar financieel overzicht te garanderen."
    },
    {
      icon: <Briefcase size={36} className="text-inkaart-primary" />,
      title: "AUDIT ONDERSTEUNING",
      description: "Wij bereiden uw administratie voor op de externe controle en ondersteunen tijdens de interim audit en de jaarafsluiting, zodat het proces soepel en efficiënt verloopt."
    },
    {
      icon: <LineChart size={36} className="text-inkaart-primary" />,
      title: "FINANCIËLE RAPPORTAGES",
      description: "Duidelijke rapportages die inzicht geven in uw bedrijfsresultaten en financiële positie."
    },
    {
      icon: <FileSpreadsheet size={36} className="text-inkaart-primary" />,
      title: "FACTURATIE",
      description: "Het verzorgen van uw facturatie en debiteurenbeheer om uw cashflow te optimaliseren."
    },
    {
      icon: <RefreshCcw size={36} className="text-inkaart-primary" />,
      title: "PROCESVERBETERING",
      description: "Advies over het verbeteren van uw administratieve processen en de inrichting van uw boekhoudsoftware."
    }
  ];

  return (
    <section id="services" className="section bg-inkaart-lighter py-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-inkaart-primary mb-4">ONZE DIENSTEN</h2>
          <p className="text-lg text-inkaart-dark">
            InKaart Administraties biedt een compleet pakket aan financiële diensten 
            voor ZZP'ers en MKB-bedrijven. Van dagelijkse administratie tot specialistische controlewerkzaamheden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-card transition-shadow duration-300 border-none bg-white"
            >
              <CardContent className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-inkaart-primary mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-inkaart-dark">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
