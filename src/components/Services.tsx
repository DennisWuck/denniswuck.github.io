
import { 
  BarChart3, 
  FileText, 
  Calculator, 
  LineChart, 
  FileSpreadsheet, 
  RefreshCcw 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={36} className="text-inkaart-accent" />,
      title: "Financiële administratie",
      description: "Uw boekhouding netjes en correct bijgehouden, zodat u altijd inzicht heeft in uw financiële situatie."
    },
    {
      icon: <FileText size={36} className="text-inkaart-accent" />,
      title: "Jaarrekening",
      description: "Het opstellen van jaarrekeningen voor eenmanszaken, VOF's en BV's volgens de geldende regelgeving."
    },
    {
      icon: <Calculator size={36} className="text-inkaart-accent" />,
      title: "Fiscale aangiften",
      description: "Verzorging van uw aangiften omzetbelasting, inkomstenbelasting, loonbelasting en vennootschapsbelasting."
    },
    {
      icon: <LineChart size={36} className="text-inkaart-accent" />,
      title: "Financiële rapportages",
      description: "Duidelijke rapportages die inzicht geven in uw bedrijfsresultaten en financiële positie."
    },
    {
      icon: <FileSpreadsheet size={36} className="text-inkaart-accent" />,
      title: "Facturatie",
      description: "Het verzorgen van uw facturatie en debiteurenbeheer om uw cashflow te optimaliseren."
    },
    {
      icon: <RefreshCcw size={36} className="text-inkaart-accent" />,
      title: "Procesverbetering",
      description: "Advies over het verbeteren van uw administratieve processen en de inrichting van uw boekhoudsoftware."
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-inkaart-primary mb-4">Mijn diensten</h2>
          <p className="text-lg text-inkaart-dark">
            InKaart Administraties biedt een compleet pakket aan financiële diensten 
            voor ZZP'ers en MKB-bedrijven. Wat kan ik voor u betekenen?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-inkaart-primary mb-3">{service.title}</h3>
                <p className="text-inkaart-dark">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
