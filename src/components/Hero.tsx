import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-inkaart-light min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-inkaart-primary/5 to-inkaart-secondary/5"></div>
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-5"
        aria-hidden="true"
      >
        <img
          src="/logo-green-black.svg"
          alt=""
          className="w-auto h-[90vh] object-contain max-w-none"
          style={{ minWidth: '800px' }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inkaart-primary">
            UW ADMINISTRATIE<br />
            <span className="text-inkaart-accent">IN KAART GEBRACHT</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg text-inkaart-dark">
            Professionele financiële dienstverlening voor ZZP'ers en MKB-bedrijven. 
            Uw administratie, jaarrekeningen en fiscale aangiften in vertrouwde handen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-inkaart-primary hover:bg-inkaart-primary/90 text-white"
              asChild
            >
              <a href="#contact">DIRECT CONTACT</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-inkaart-primary text-inkaart-primary hover:bg-inkaart-primary hover:text-white"
              asChild
            >
              <a href="#services">ONZE DIENSTEN</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
