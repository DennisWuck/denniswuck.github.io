
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-inkaart-primary text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-inkaart-primary to-inkaart-secondary opacity-90"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Uw financiën op orde met<br />
            <span className="text-inkaart-accent">InKaart Administraties</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Professionele financiële dienstverlening voor ZZP'ers en MKB-bedrijven. 
            Uw administratie, jaarrekeningen en fiscale aangiften in vertrouwde handen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-inkaart-accent hover:bg-inkaart-accent/90 text-white"
              asChild
            >
              <a href="#contact">Neem contact op</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-inkaart-primary"
              asChild
            >
              <a href="#services">Bekijk diensten</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
