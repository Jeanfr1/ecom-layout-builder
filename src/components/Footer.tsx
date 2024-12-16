import { Github, Linkedin, Twitter, ExternalLink, Copyright } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Sobre Nós</h3>
            <p className="text-sm text-gray-400">
              Oferecemos as melhores soluções em e-commerce para sua empresa crescer no mundo digital.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Home", "Produtos", "Serviços", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <ExternalLink size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: contato@empresa.com</li>
              <li>Tel: (11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-gradient">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Inscreva-se para receber nossas novidades
            </p>
            <input
              type="email"
              placeholder="Seu email"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Copyright size={14} />
            <span>2024 Sua Empresa. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} className="text-gray-400 hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;