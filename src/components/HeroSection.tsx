
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-200 rounded-full opacity-60 animate-bounce-soft"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-brand-300 rounded-full opacity-50 animate-bounce-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nunca mais 
            <span className="gradient-text block">Perca um Agendamento</span>
            no WhatsApp
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nossa IA agenda por texto e áudio, integra com Google Calendar e Drive, e libera sua equipe para o que realmente importa. 
            <span className="font-semibold text-brand-600"> Atendimento inteligente 24 horas por dia.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToDemo}
              size="lg"
              className="gradient-bg text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Demonstração
            </Button>
            
            <Button 
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Converse Agora no WhatsApp
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-2xl animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Automação de atendimento com IA" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-bounce-soft">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Online 24/7</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce-soft" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">ROI 300%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
