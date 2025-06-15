
import { Bot, Filter, MessageSquare, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Um <span className="gradient-text">Assistente Virtual</span> que Prepara o Cliente para Você
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nosso chatbot não faz vendas, ele executa com perfeição as tarefas que tomam o tempo da sua equipe. 
            Ele funciona como um filtro inteligente que qualifica, agenda e organiza informações. 
            Ele reage de forma humanizada às mensagens, garantindo uma conversa fluida e natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Solution Image */}
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Robô simpático interagindo com aplicações" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent rounded-2xl"></div>
            
            {/* AI Indicators */}
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
              <Bot className="h-4 w-4" />
              <span>IA Ativa</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Humanizado
            </div>
          </div>

          {/* Solution Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Filter className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Filtro Inteligente</h3>
                <p className="text-gray-600">
                  Qualifica automaticamente os clientes, coletando informações essenciais antes de direcioná-los para sua equipe.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Conversas Humanizadas</h3>
                <p className="text-gray-600">
                  Interpreta contexto, entende intenções e responde de forma personalizada, garantindo uma experiência positiva.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Execução Perfeita</h3>
                <p className="text-gray-600">
                  Executa tarefas repetitivas com precisão, liberando sua equipe para focar em atendimento de alto valor.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-brand-50 to-purple-50 rounded-xl border border-brand-200">
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="h-5 w-5 text-brand-600" />
                <h4 className="font-semibold text-brand-900">Resultado Garantido</h4>
              </div>
              <p className="text-brand-700">
                Sua equipe trabalha apenas com clientes já qualificados e interessados, aumentando drasticamente a taxa de conversão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
