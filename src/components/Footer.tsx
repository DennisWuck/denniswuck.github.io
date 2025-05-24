import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-inkaart-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo en Bedrijfsinfo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo-green-black.svg"
              alt="InKaart Administraties"
              className="h-20 w-auto mb-4 invert brightness-200"
            />
            <p className="text-sm text-gray-300 text-center md:text-left">
              Professionele financiële dienstverlening voor ZZP'ers en MKB-bedrijven.
            </p>
          </div>

          {/* Contact Informatie */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+31612345678" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+31 6 12345678</span>
              </a>
              <a href="mailto:info@inkaart.nl" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>info@inkaart.nl</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                <span>Amsterdam, Nederland</span>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Financiële administratie</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Jaarrekening</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Fiscale aangiften</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Rapportages</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">Over ons</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Ervaring</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} InKaart Administraties. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
