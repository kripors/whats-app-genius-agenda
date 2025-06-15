
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demonstração Agendada!",
        description: "Entraremos em contato em breve para confirmar o horário.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', whatsapp: '', company: '' });
    }, 2000);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5551997661515', '_blank');
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-brand-50 via-white to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pronto para 
            <span className="gradient-text"> Automatizar suas Tarefas?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Fale conosco como preferir. Para uma conversa rápida e tirar dúvidas, chame no WhatsApp. 
            Para uma apresentação completa da ferramenta, preencha o formulário e agendaremos uma demonstração.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* WhatsApp Contact */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conversa Rápida no WhatsApp
              </h3>
              <p className="text-gray-600 mb-8">
                Tire suas dúvidas diretamente conosco. Resposta imediata para perguntas sobre funcionalidades, preços e implementação.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Resposta em até 5 minutos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Tire dúvidas sobre preços</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Saiba como funciona</span>
              </div>
            </div>

            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              CHAMAR NO WHATSAPP AGORA
            </Button>
          </div>

          {/* Demo Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ou Agende uma Demonstração Personalizada
              </h3>
              <p className="text-gray-600 mb-8">
                Veja a ferramenta funcionando com exemplos do seu segmento. Demonstração de 30 minutos com foco nos seus desafios.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da Empresa *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail Profissional *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="(51) 99999-9999"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white font-semibold py-6 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                <Calendar className="mr-3 h-6 w-6" />
                {isSubmitting ? 'AGENDANDO...' : 'AGENDAR MINHA DEMONSTRAÇÃO'}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              * Seus dados estão seguros e não serão compartilhados com terceiros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
