
import { CheckCircle, Settings, Zap } from 'lucide-react';

const ImplementationSection = () => {
  const steps = [
    {
      icon: Settings,
      title: "Configuração",
      description: "Cuidamos de toda a configuração técnica e integração com seus sistemas"
    },
    {
      icon: Brain,
      title: "Treinamento da IA",
      description: "Treinamos a IA com as informações específicas da sua empresa"
    },
    {
      icon: Zap,
      title: "Ativação",
      description: "Sua automação entra em funcionamento com suporte completo"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Implementação Simples em 
            <span className="gradient-text"> Apenas 3 Dias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuidamos de toda a configuração e treinamos a IA com as informações da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4">
                <step.icon className="h-8 w-8 text-brand-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Implementation Visual */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Implementação simples em 3 dias" 
            className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent rounded-2xl"></div>
          
          {/* Implementation Benefits */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Garantias Incluídas:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Suporte 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Treinamento Incluído</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Sem Taxa de Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
