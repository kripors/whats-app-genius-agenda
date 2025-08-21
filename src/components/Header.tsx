import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/80' 
          : 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Scroll progress indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-500 to-purple-500"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Logo para desktop */}
            <motion.img 
              src="/lovable-uploads/67e48210-da9f-4971-a7d8-801d7fd790bf.png" 
              alt="Technoporto AI Solutions" 
              className="hidden sm:block h-8 lg:h-10 w-auto"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
            {/* Logo para mobile */}
            <motion.img 
              src="/lovable-uploads/201d423d-8a7e-41f3-8412-a7b8119be509.png" 
              alt="Technoporto AI Solutions" 
              className="block sm:hidden h-8 w-auto"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Animated sparkle */}
            <motion.div
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Sparkles className="w-4 h-4 text-brand-500 opacity-60" />
            </motion.div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { id: 'problema', label: 'Problema' },
              { id: 'solucao', label: 'Solução' },
              { id: 'funcionalidades', label: 'Recursos' },
              { id: 'beneficios', label: 'Benefícios' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-600 hover:text-brand-600 transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-500 to-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Enhanced Desktop CTA */}
          <motion.div 
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/5551997661515', '_blank')}
                className="border-brand-500 text-brand-600 hover:bg-brand-50 hover:border-brand-600 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-brand-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                <span className="relative z-10">WhatsApp</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={() => scrollToSection('contato')}
                className="gradient-bg text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 glow-effect-hover relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                <span className="relative z-10">Demonstração</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-600 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 glass-effect border-b border-gray-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav 
                className="container-custom py-6 space-y-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {[
                  { id: 'problema', label: 'Problema' },
                  { id: 'solucao', label: 'Solução' },
                  { id: 'funcionalidades', label: 'Recursos' },
                  { id: 'beneficios', label: 'Benefícios' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-600 hover:text-brand-600 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.div 
                  className="flex flex-col space-y-3 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        window.open('https://wa.me/5551997661515', '_blank');
                        setIsMenuOpen(false);
                      }}
                      className="w-full border-brand-500 text-brand-600 hover:bg-brand-50 hover:border-brand-600 transition-all duration-300"
                    >
                      WhatsApp
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={() => {
                        scrollToSection('contato');
                        setIsMenuOpen(false);
                      }}
                      className="w-full gradient-bg text-white hover:opacity-90 shadow-lg transition-all duration-300"
                    >
                      Demonstração
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
