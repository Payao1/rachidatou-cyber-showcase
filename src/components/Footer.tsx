import { Shield, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-6 h-6 text-cyber-blue animate-cyber-pulse" />
            <span className="text-lg font-bold">
              <span className="text-cyber-blue">PAYAO</span>
              <span className="text-terminal-green">.</span>
              <span className="text-muted-foreground">cyber</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© {currentYear} Rachidatou PAYAO</span>
            <div className="flex items-center space-x-1">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-cyber-red animate-pulse" />
              <span>pour la cybersécurité</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="https://tryhackme.com/p/rachidatoupayao42" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-cyber-blue/80 transition-colors flex items-center space-x-1"
            >
              <span className="text-sm">TryHackMe</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Portfolio cybersécurité - Étudiante en Master Cybersécurité à l'Institut Burkinabè des Arts et Métiers.
            Spécialisée en audit de sécurité, tests d'intrusion et analyse de trafic réseau.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;