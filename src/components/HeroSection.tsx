import { ChevronDown, Download, ExternalLink, Shield, Code2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cyber-hero.jpg";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const element = document.querySelector("#ctf");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Matrix Animation Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-8 bg-terminal-green opacity-20 animate-terminal-blink"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-6 bg-cyber-blue opacity-30 animate-terminal-blink" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-10 bg-terminal-green opacity-25 animate-terminal-blink" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="mb-8 font-mono text-terminal-green">
            <span className="opacity-60">root@cyber:~$</span> whoami
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-cyber-blue">PAYAO</span>{" "}
            <span className="text-foreground">Rachidatou</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
              Cybersecurity Specialist & Security Analyst
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Étudiante en Master Cybersécurité passionnée par la sécurité des systèmes d'information, 
              les tests d'intrusion et l'analyse de trafic réseau. Toujours prête à relever de nouveaux défis cyber.
            </p>
          </div>

          {/* Skills Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-cyber-blue/30">
              <Shield className="w-5 h-5 text-cyber-blue" />
              <span className="text-sm font-medium">Audit de Sécurité</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-terminal-green/30">
              <Code2 className="w-5 h-5 text-terminal-green" />
              <span className="text-sm font-medium">Pentesting</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-cyber-purple/30">
              <Target className="w-5 h-5 text-cyber-purple" />
              <span className="text-sm font-medium">CTF & TryHackMe</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="cyber-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToNextSection()}
            >
              Découvrir mes projets
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-blue">5+</div>
              <div className="text-sm text-muted-foreground">CTF Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terminal-green">4</div>
              <div className="text-sm text-muted-foreground">Projets d'Audit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-purple">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-blue">2025</div>
              <div className="text-sm text-muted-foreground">Année Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyber-blue" />
      </div>
    </section>
  );
};

export default HeroSection;