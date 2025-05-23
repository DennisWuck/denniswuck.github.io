import { 
  BarChart3, 
  FileText, 
  Calculator, 
  ClipboardCheck,
  CalendarCheck,
  FileSpreadsheet,
  RefreshCcw,
  Scale,
  Briefcase,
  FileSearch,
  Receipt,
  Settings
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={36} className="text-inkaart-primary" />,
      title: "FINANCIËLE ADMINISTRATIE",
      description: "Uw boekhouding wordt zorgvuldig en correct bijgehouden, zodat u altijd inzicht heeft in uw financiële situatie."
    },
    {
      icon: <FileText size={36} className="text-inkaart-primary" />,
      title: "JAARREKENING EN BALANSDOSSIER",
      description: "Het opstellen van jaarrekeningen voor eenmanszaken, VOF's en BV's, inclusief het opbouwen van een volledig onderbouwd balansdossier ter voorbereiding op controles en audits."
    },
    {
      icon: <Calculator size={36} className="text-inkaart-primary" />,
      title: "FISCALE AANGIFTEN",
      description: "Verzorging van uw aangiften omzetbelasting, inkomstenbelasting, loonbelasting en vennootschapsbelasting."
    },
    {
      icon: <CalendarCheck size={36} className="text-inkaart-primary" />,
      title: "MAAND- EN JAARAFSLUITINGEN",
      description: "Het tijdig en nauwkeurig afsluiten van financiële periodes, inclusief controle en reconciliatie van grootboekrekeningen, balansposten en intercompany-transacties."
    },
    {
      icon: <ClipboardCheck size={36} className="text-inkaart-primary" />,
      title: "CONTROLEWERKZAAMHEDEN EN ACCOUNT RECONCILIATIONS",
      description: "Grondige controle van uw administratie en het afstemmen van rekeningen om afwijkingen vroegtijdig te signaleren en te corrigeren."
    },
    {
      icon: <Briefcase size={36} className="text-inkaart-primary" />,
      title: "AUDITONDERSTEUNING",
      description: "Voorbereiding en begeleiding bij interim- en eindejaarscontroles door de accountant, zodat het auditproces efficiënt en soepel verloopt."
    },
    {
      icon: <FileSearch size={36} className="text-inkaart-primary" />,
      title: "FINANCIËLE RAPPORTAGES",
      description: "Heldere en overzichtelijke rapportages die inzicht geven in uw bedrijfsresultaten en financiële positie."
    },
    {
      icon: <Receipt size={36} className="text-inkaart-primary" />,
      title: "FACTURATIE EN DEBITEURENBEHEER",
      description: "Het verzorgen van uw facturatie en het beheren van openstaande posten om uw cashflow te optimaliseren."
    },
    {
      icon: <Settings size={36} className="text-inkaart-primary" />,
      title: "PROCESVERBETERING EN SOFTWAREADVIES",
      description: "Advies over het optimaliseren van administratieve processen en de inrichting van uw boekhoudsoftware."
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
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-inkaart-primary mb-3">
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
