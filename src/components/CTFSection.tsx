import { Calendar, ExternalLink, CheckCircle, Clock, Target } from "lucide-react";
import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CTFSection = () => {
  const ctfData = [
    {
      name: "Security Principles",
      date: "29/08/2025",
      status: "completed",
      difficulty: "Beginner",
      link: "https://tryhackme.com/p/rachidatoupayao42",
      description: "Principes fondamentaux de la sécurité informatique"
    },
    {
      name: "Introduction à la sécurité Offensive",
      date: "30/08/2025",
      status: "completed",
      difficulty: "Beginner",
      link: "https://tryhackme.com/p/rachidatoupayao42",
      description: "Bases des techniques d'attaque éthique"
    },
    {
      name: "Attaques courantes",
      date: "01/09/2025",
      status: "in-progress",
      difficulty: "Intermediate",
      link: "https://tryhackme.com/room/commonattacks",
      description: "Étude des vecteurs d'attaque les plus répandus"
    },
    {
      name: "Principes fondamentaux de l'analyse du phishing",
      date: "10/09/2025",
      status: "in-progress",
      difficulty: "Intermediate",
      link: "https://tryhackme.com/room/phishingemails1tryoe",
      description: "Techniques de détection et d'analyse des emails malveillants"
    },
    {
      name: "Introduction à la sécurité défensive",
      date: "En cours",
      status: "in-progress",
      difficulty: "Beginner",
      link: "https://tryhackme.com/room/defensivesecurityintro",
      description: "Concepts de base de la cyberdéfense"
    },
    {
      name: "Cyber Kill Chain",
      date: "En cours",
      status: "in-progress",
      difficulty: "Intermediate",
      link: "https://tryhackme.com/room/cyberkillchainzmt",
      description: "Méthodologie d'analyse des cyberattaques"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-terminal-green";
      case "in-progress":
        return "text-cyber-blue";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-terminal-green" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-cyber-blue" />;
      default:
        return <Target className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-terminal-green/20 text-terminal-green border-terminal-green/30";
      case "Intermediate":
        return "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30";
      case "Advanced":
        return "bg-cyber-red/20 text-cyber-red border-cyber-red/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="ctf" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-cyber-blue mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-cyber-blue">CTF</span> & Challenges
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mes réalisations sur TryHackMe et autres plateformes de challenges cybersécurité
          </p>
        </div>

        {/* TryHackMe Profile */}
        <div className="mb-12 text-center">
          <CyberCard className="max-w-md mx-auto cyber-glow">
            <CyberCardHeader>
              <CyberCardTitle className="flex items-center justify-center space-x-2">
                <span>Profil TryHackMe</span>
                <ExternalLink className="w-4 h-4" />
              </CyberCardTitle>
            </CyberCardHeader>
            <CyberCardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-terminal-green mb-2">rachidatoupayao42</div>
                  <Button 
                    variant="outline" 
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-primary-foreground"
                    onClick={() => window.open("https://tryhackme.com/p/rachidatoupayao42", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le profil
                  </Button>
                </div>
              </div>
            </CyberCardContent>
          </CyberCard>
        </div>

        {/* CTF Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctfData.map((ctf, index) => (
            <CyberCard key={index} className="group hover:cyber-glow transition-all duration-300">
              <CyberCardHeader>
                <div className="flex items-start justify-between">
                  <CyberCardTitle className="text-lg group-hover:text-cyber-blue transition-colors">
                    {ctf.name}
                  </CyberCardTitle>
                  {getStatusIcon(ctf.status)}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{ctf.date}</span>
                </div>
              </CyberCardHeader>
              <CyberCardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {ctf.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={getDifficultyColor(ctf.difficulty)}
                  >
                    {ctf.difficulty}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyber-blue hover:text-cyber-blue hover:bg-cyber-blue/10"
                    onClick={() => window.open(ctf.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CyberCardContent>
            </CyberCard>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">2</div>
            <div className="text-sm text-muted-foreground">Complétés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">4</div>
            <div className="text-sm text-muted-foreground">En cours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-purple mb-2">6</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">33%</div>
            <div className="text-sm text-muted-foreground">Taux réussite</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTFSection;