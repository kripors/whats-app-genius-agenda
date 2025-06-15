import { Calendar, FileText, MapPin, Brain, MessageSquare } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamentos por Voz e Texto",
      description: "O cliente pede para agendar e a IA entende, verifica sua agenda e marca o compromisso diretamente no Google Calendar.",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Gestão de Documentos",
      description: "Precisa enviar um catálogo ou consultar um documento? A IA busca ou consulta o arquivo no Google Drive.",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Localização Integrada",
      description: "Quando o cliente pede o endereço, a IA envia links diretos: Waze, Google Maps e 'Peça um Uber até aqui'.",
      color: "purple"
    },
    {
      icon: Brain,
      title: "Interação Humanizada",
      description: "O agente virtual interpreta o contexto da conversa, entende as intenções e responde de forma personalizada.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="funcionalidades" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos Pensados para a 
            <span className="gradient-text"> Máxima Eficiência</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada funcionalidade foi desenvolvida para automatizar tarefas específicas que consomem o tempo da sua equipe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Integração Completa com suas Ferramentas
            </h3>
            <p className="text-lg text-gray-600">
              Funciona perfeitamente com as plataformas que você já usa
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <span className="font-semibold text-gray-700">WhatsApp</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-700">Google Calendar</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="font-semibold text-gray-700">Google Drive</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <span className="font-semibold text-gray-700">Mapas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
