import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, Sparkles, Zap } from 'lucide-react';
import Particles from '@/components/ui/particles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const scrollToDemo = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5551997661515', '_blank');
  };

  return (
    <section ref={elementRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Particles Background */}
      <Particles className="opacity-40" count={60} />
      
      {/* Enhanced Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-brand-400 to-purple-400 rounded-full glow-effect"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full glow-effect"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [360, 180, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-brand-300 to-blue-400 rounded-full glow-effect"
          animate={{
            y: [10, -30, 10],
            x: [-5, 15, -5],
            rotate: [0, 270, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-70"
          animate={{
            y: [-15, 25, -15],
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-60"
          animate={{
            y: [25, -15, 25],
            x: [-10, 20, -10],
            rotate: [360, 0],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline with staggered animation */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nunca mais 
            </motion.span>
            <motion.span 
              className="gradient-text block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Perca um Agendamento
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              no WhatsApp
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Nossa IA agenda por texto e áudio, integra com Google Calendar e Drive, e libera sua equipe para o que realmente importa. 
            <motion.span 
              className="font-semibold gradient-text-alt relative inline-flex items-center gap-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Zap className="w-5 h-5 inline" />
              Atendimento inteligente 24 horas por dia.
            </motion.span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                onClick={scrollToDemo}
                size="lg"
                className="gradient-bg text-white hover:opacity-90 transition-all duration-400 px-8 py-6 text-lg font-semibold w-full sm:w-auto glow-effect-hover shadow-xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                <Calendar className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Agendar Demonstração</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                onClick={openWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 transition-all duration-400 px-8 py-6 text-lg font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Converse Agora no WhatsApp</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image */}
          <motion.div 
            className="relative mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Automação de atendimento com IA" 
                className="rounded-2xl shadow-2xl w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent rounded-2xl"></div>
              
              {/* Overlay glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/10 to-purple-500/10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Enhanced Floating Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 glass-effect rounded-xl p-4 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.6, delay: 2 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-gray-700">Online 24/7</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-sm font-medium text-gray-700">ROI 300%</span>
              </div>
            </motion.div>
            
            {/* Additional floating stats */}
            <motion.div 
              className="absolute top-1/4 -right-8 glass-effect rounded-xl p-3 backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="text-xs font-medium text-gray-700">98% Precisão</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 -left-8 glass-effect rounded-xl p-3 backdrop-blur-md"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                <span className="text-xs font-medium text-gray-700">5min Setup</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          animate={{ borderColor: ['#d1d5db', '#6366f1', '#d1d5db'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              backgroundColor: ['#9ca3af', '#6366f1', '#9ca3af']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
