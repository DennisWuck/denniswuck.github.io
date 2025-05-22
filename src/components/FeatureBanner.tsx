import { CheckCircle, Building2, Brain, Clock } from 'lucide-react';

const FeatureBanner = () => {
  return (
    <section className="bg-inkaart-primary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <CheckCircle className="w-8 h-8 text-white flex-shrink-0" />
            <div className="text-white">
              <h3 className="font-semibold text-lg">Expertise</h3>
              <p className="text-white/90 text-sm">Ruime ervaring in diverse sectoren</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Building2 className="w-8 h-8 text-white flex-shrink-0" />
            <div className="text-white">
              <h3 className="font-semibold text-lg">MKB-focus</h3>
              <p className="text-white/90 text-sm">Specialisatie in ZZP'ers en MKB</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Brain className="w-8 h-8 text-white flex-shrink-0" />
            <div className="text-white">
              <h3 className="font-semibold text-lg">Proactief</h3>
              <p className="text-white/90 text-sm">Meedenken over optimalisatie</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Clock className="w-8 h-8 text-white flex-shrink-0" />
            <div className="text-white">
              <h3 className="font-semibold text-lg">Flexibel</h3>
              <p className="text-white/90 text-sm">Snelle respons en persoonlijk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner; 