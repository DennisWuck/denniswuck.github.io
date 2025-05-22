import { Button } from '@/components/ui/button';
import { CheckCircle, Building2, Brain, Clock, BarChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-[400px] bg-inkaart-secondary rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                  alt="InKaart Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-inkaart-accent rounded-lg"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-inkaart-primary mb-6">OVER INKAART</h2>
            <p className="text-inkaart-dark mb-6">
              Welkom bij InKaart Administraties, het administratiekantoor van Dennis Wuck en uw betrouwbare partner voor financiële dienstverlening.
              Met ruim 10 jaar ervaring bied ik professionele ondersteuning aan zzp'ers en het mkb, in sectoren als vastgoed, retail, groothandel, e-commerce, venture capitals en non-profitorganisaties.
            </p>
            <p className="text-inkaart-dark mb-6">
              Bij InKaart Administraties staan persoonlijke aandacht en maatwerk centraal. Ik weet dat elke organisatie uniek is en stem mijn dienstverlening daarom volledig af op uw wensen en behoeften. Of het nu gaat om het verzorgen van uw administratie, het samenstellen van jaarrekeningen, het indienen van fiscale aangiften of het optimaliseren van financiële processen: u kunt rekenen op heldere rapportages en betrouwbare cijfers.
            </p>
            <p className="text-inkaart-dark mb-6">
              Mijn passie is om financiële informatie inzichtelijk te maken, zodat u altijd precies weet waar u staat. Met een proactieve en flexibele aanpak denk ik graag met u mee over hoe uw administratie en financiële processen nóg beter kunnen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-inkaart-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-inkaart-primary">Expertise</h3>
                  <p className="text-sm">Ruime ervaring in diverse sectoren en branches</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-inkaart-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-inkaart-primary">MKB-focus</h3>
                  <p className="text-sm">Specialisatie in ZZP'ers en MKB-bedrijven</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-inkaart-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-inkaart-primary">Proactief</h3>
                  <p className="text-sm">Meedenken over procesoptimalisatie</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-inkaart-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-inkaart-primary">Flexibel</h3>
                  <p className="text-sm">Snelle respons en persoonlijke aanpak</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <BarChart className="w-6 h-6 text-inkaart-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-inkaart-primary mb-2">Software expertise</h3>
                  <p className="text-sm">
                    Exact Online, Afas, Snelstart, King, Elvy, E-boekhouden, Moneybird, Excel, Power BI en meer.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-inkaart-primary hover:bg-inkaart-primary/90"
              asChild
            >
              <a href="#contact">Neem contact op</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
