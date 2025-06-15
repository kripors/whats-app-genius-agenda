
import { MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/a2614d59-0a3c-4706-9c59-60f14612017b.png" 
              alt="Technoporto AI Solutions" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Automatize seu atendimento no WhatsApp com inteligência artificial. 
              Agendamentos inteligentes, integração completa e ROI comprovado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5551997661515" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contato@technoporto.com" 
                className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+5551997661515" 
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Problema
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('solucao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Solução
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Benefícios
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">(51) 99766-1515</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-500" />
                <span className="text-gray-300">contato@technoporto.com</span>
              </li>
              <li className="text-gray-300">
                Porto Alegre, RS - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Technoporto AI Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
