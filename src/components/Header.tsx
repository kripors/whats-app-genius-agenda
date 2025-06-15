
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a2614d59-0a3c-4706-9c59-60f14612017b.png" 
              alt="Technoporto AI Solutions" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problema')}
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Problema
            </button>
            <button 
              onClick={() => scrollToSection('solucao')}
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Solução
            </button>
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Benefícios
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => window.open('https://wa.me/5551997661515', '_blank')}
              className="border-brand-500 text-brand-600 hover:bg-brand-50"
            >
              WhatsApp
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="gradient-bg text-white hover:opacity-90"
            >
              Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 py-6">
            <nav className="container-custom space-y-4">
              <button 
                onClick={() => scrollToSection('problema')}
                className="block w-full text-left text-gray-600 hover:text-brand-600 py-2"
              >
                Problema
              </button>
              <button 
                onClick={() => scrollToSection('solucao')}
                className="block w-full text-left text-gray-600 hover:text-brand-600 py-2"
              >
                Solução
              </button>
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="block w-full text-left text-gray-600 hover:text-brand-600 py-2"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="block w-full text-left text-gray-600 hover:text-brand-600 py-2"
              >
                Benefícios
              </button>
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://wa.me/5551997661515', '_blank')}
                  className="border-brand-500 text-brand-600 hover:bg-brand-50"
                >
                  WhatsApp
                </Button>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="gradient-bg text-white hover:opacity-90"
                >
                  Demonstração
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
