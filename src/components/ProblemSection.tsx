
import { Clock, Users, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="problema" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seu atendimento manual está 
            <span className="gradient-text"> custando caro?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clientes esperam respostas imediatas, mas sua equipe está presa em perguntas repetitivas e agendamentos manuais? 
            Cada hora gasta em tarefas simples é uma hora a menos de atendimento especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Points */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Demora na Resposta</h3>
                <p className="text-gray-600">
                  Clientes abandonam o processo quando não recebem respostas rápidas. Cada minuto perdido é uma oportunidade que vai embora.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipe Sobrecarregada</h3>
                <p className="text-gray-600">
                  Sua equipe gasta horas respondendo as mesmas perguntas básicas, deixando menos tempo para atendimento especializado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agendamentos Perdidos</h3>
                <p className="text-gray-600">
                  Sem um sistema organizado, agendamentos são esquecidos, reagendados ou simplesmente perdidos no meio da conversa.
                </p>
              </div>
            </div>
          </div>

          {/* Problem Image */}
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Atendente sobrecarregada com muitas tarefas" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            
            {/* Stress Indicators */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Sobrecarga
            </div>
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{ animationDelay: '1s' }}>
              Atraso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
