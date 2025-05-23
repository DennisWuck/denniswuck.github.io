import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'OVER ONS', href: '#about' },
    { name: 'DIENSTEN', href: '#services' },
    { name: 'ERVARING', href: '#experience' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav 
      className={`
        fixed w-full z-30 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
        }
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="/logo-green-black.svg"
              alt="InKaart Administraties Logo"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`
                  font-medium text-sm tracking-wider transition-colors
                  ${isScrolled 
                    ? 'text-inkaart-dark hover:text-inkaart-primary' 
                    : 'text-inkaart-dark hover:text-inkaart-primary'
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-inkaart-primary' : 'text-inkaart-dark'}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-sm tracking-wider px-4 py-2 hover:bg-inkaart-light text-inkaart-dark hover:text-inkaart-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
