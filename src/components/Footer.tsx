
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-inkaart-primary text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              InKaart <span className="font-normal">Administraties</span>
            </h3>
            <p className="mb-4 max-w-md text-gray-300">
              Professionele financiële dienstverlening voor ZZP'ers en MKB-bedrijven.
              Uw administratie, jaarrekeningen en fiscale aangiften in vertrouwde handen.
            </p>
            <p className="text-gray-300">
              KVK: [KVK-nummer]<br />
              BTW: [BTW-nummer]
            </p>
          </div>
          
          <div className="md:text-right">
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Dennis Wuck<br />
              't Swafert 2012<br />
              7552 ZD Hengelo (Ov)
            </p>
            <p className="mb-4">
              <a href="tel:0612407439" className="text-gray-300 hover:text-inkaart-accent transition-colors">
                06-12407439
              </a>
            </p>
            <p>
              <a href="mailto:inkaartdw@gmail.com" className="text-gray-300 hover:text-inkaart-accent transition-colors">
                inkaartdw@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} InKaart Administraties. Alle rechten voorbehouden.
            </p>
            <div>
              <a 
                href="#home"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terug naar boven
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
