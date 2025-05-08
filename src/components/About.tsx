
import { Button } from '@/components/ui/button';

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
                  alt="Dennis Wuck" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-inkaart-accent rounded-lg"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-inkaart-primary mb-6">Over Dennis Wuck</h2>
            <p className="text-inkaart-dark mb-6">
              Na het behalen van mijn HBO diploma Bedrijfseconomie in 2014, heb ik ruime ervaring 
              opgedaan in het verzorgen van financiële administraties, het samenstellen van jaarrekeningen,
              consolidaties en het indienen van fiscale aangiften voor diverse ondernemers.
            </p>
            <p className="text-inkaart-dark mb-6">
              Vanaf september 2021 ben ik onder de naam InKaart Administraties voor mijzelf begonnen 
              en verzorg ik administraties, jaarrekeningen en fiscale aangiften voor ZZP'ers en MKB bedrijven.
              Ook ben ik werkzaam als freelancer.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-bold text-inkaart-primary mb-2">Opleiding</h3>
                <ul className="space-y-1 text-sm">
                  <li>HBO Bedrijfseconomie, Saxion</li>
                  <li>Minor: Financieel Management</li>
                  <li>Internationale Handel, ROC van Twente</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-inkaart-primary mb-2">Software kennis</h3>
                <p className="text-sm">
                  Exact Online, Snelstart, Afas, King, Elvy, E-boekhouden, Moneybird, Excel, Power BI en meer.
                </p>
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
