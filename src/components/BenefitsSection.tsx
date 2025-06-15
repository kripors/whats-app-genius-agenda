
import { TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Eficiência que Gera 
            <span className="gradient-text"> Resultados Financeiros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            O impressionante <span className="font-bold text-brand-600">ROI de 300%</span> vem da otimização massiva de processos. 
            Ao reduzir os custos operacionais em 40% e aumentar a eficiência em 60%, sua equipe se libera para focar em tarefas de alto valor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits Stats */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ROI de 300%</h3>
                <p className="text-gray-600">
                  Retorno garantido através da otimização de processos e redução de custos operacionais
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">40% Menos Custos</h3>
                <p className="text-gray-600">
                  Redução significativa nos custos operacionais com automação inteligente
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">60% Mais Eficiência</h3>
                <p className="text-gray-600">
                  Aumento massivo na produtividade com automação de tarefas repetitivas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Equipe Focada</h3>
                <p className="text-gray-600">
                  Sua equipe trabalha apenas com tarefas de alto valor agregado
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Image */}
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mulher sorrindo ao interagir com robô no tablet" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent rounded-2xl"></div>
            
            {/* Success Indicators */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              +300% ROI
            </div>
            <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse" style={{ animationDelay: '1s' }}>
              -40% Custos
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Como Alcançamos Esse ROI?
            </h3>
            <p className="text-lg text-gray-600">
              A matemática é simples: menos tempo perdido = mais lucro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">-</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Elimina Desperdícios</h4>
              <p className="text-gray-600">
                Sem mais tempo perdido com perguntas repetitivas e agendamentos manuais
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">↑</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Aumenta Conversões</h4>
              <p className="text-gray-600">
                Clientes qualificados chegam prontos para fechar, aumentando a taxa de sucesso
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">+</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Gera Mais Valor</h4>
              <p className="text-gray-600">
                Equipe focada em atendimento especializado gera mais resultados por hora
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
