import { Award, ExternalLink, Calendar, BookOpen, Trophy, Target } from "lucide-react";
import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle, CyberCardDescription } from "@/components/ui/cyber-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      year: "2025",
      status: "completed",
      type: "Certification",
      description: "Compréhension des concepts fondamentaux en cybersécurité, identification des menaces courantes, bonnes pratiques de sécurité numérique",
      skills: ["Fondamentaux cybersécurité", "Identification des menaces", "Bonnes pratiques"],
      link: "https://www.credly.com/badges/d28a474e-098b-4583-893b-91da2f1d66f0",
      color: "cyber-blue"
    },
    {
      title: "Cyberanalyste Junior",
      provider: "Certification Professionnelle",
      year: "2025", 
      status: "completed",
      type: "Certification",
      description: "Analyse de trafic réseau, détection d'incidents de sécurité, gestion des alertes, initiation à l'utilisation d'IDS/IPS et SIEM",
      skills: ["Analyse trafic réseau", "Détection d'incidents", "SIEM", "IDS/IPS"],
      link: "https://www.credly.com/badges/399d979e-149b-4684-8a18-c4ee5396f596",
      color: "terminal-green"
    },
    {
      title: "Ethical Hacking",
      provider: "Cisco Networking Academy",
      year: "2025",
      status: "in-progress",
      type: "Certification",
      description: "Méthodologie de test d'intrusion, exploitation de vulnérabilités, sécurisation d'environnements Windows/Linux",
      skills: ["Test d'intrusion", "Exploitation vulnérabilités", "Sécurisation systèmes"],
      link: "https://www.netacad.com/fr/launch?id=80c156bc-84a4-47c9-a233-5eafe7bdde82&tab=curriculum&view=8557e701-847e-535e-b070-db96237065c2",
      color: "cyber-purple"
    },
    {
      title: "Ethical Hacking Formation",
      provider: "GO AI Corporation",
      year: "2025",
      status: "in-progress",
      type: "Formation",
      description: "Méthodologie des tests d'intrusion éthiques, reconnaissance, scans de vulnérabilités, bonnes pratiques de rapport et remédiation",
      skills: ["Tests d'intrusion éthiques", "Reconnaissance", "Scan vulnérabilités", "Rapports"],
      link: "https://goailab.org/student/courses/4",
      color: "cyber-red"
    },
    {
      title: "Cyber Kill Chain & Principes de sécurité",
      provider: "Formation Spécialisée",
      year: "2025",
      status: "completed",
      type: "Certificat",
      description: "Compréhension des étapes de la Cyber Kill Chain, analyse du cycle d'attaque, mise en place de défenses adaptées selon chaque étape",
      skills: ["Cyber Kill Chain", "Analyse d'attaques", "Défenses adaptées", "Principes sécurité"],
      link: "https://drive.google.com/file/d/1wjGTPp4L7I33zsAp6CHcuTWbrXN43Og2/view?usp=sharing",
      color: "terminal-green"
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-terminal-green/20 text-terminal-green border-terminal-green/30",
          icon: <Trophy className="w-4 h-4" />,
          text: "Obtenu"
        };
      case "in-progress":
        return {
          color: "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30",
          icon: <Target className="w-4 h-4" />,
          text: "En cours"
        };
      default:
        return {
          color: "bg-muted text-muted-foreground",
          icon: <BookOpen className="w-4 h-4" />,
          text: "Planifié"
        };
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Certification":
        return "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30";
      case "Formation":
        return "bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30";
      case "Certificat":
        return "bg-terminal-green/20 text-terminal-green border-terminal-green/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-cyber-blue mr-3 animate-cyber-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-cyber-blue">Certifications</span> & Formations
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mon parcours de formation continue en cybersécurité et mes certifications professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const statusInfo = getStatusInfo(cert.status);
            
            return (
              <CyberCard key={index} className="group hover:cyber-glow transition-all duration-300 h-full">
                <CyberCardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className={getTypeColor(cert.type)}>
                          {cert.type}
                        </Badge>
                        <Badge variant="outline" className={statusInfo.color}>
                          {statusInfo.icon}
                          <span className="ml-1">{statusInfo.text}</span>
                        </Badge>
                      </div>
                      <CyberCardTitle className="text-lg group-hover:text-cyber-blue transition-colors">
                        {cert.title}
                      </CyberCardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{cert.provider}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CyberCardDescription>
                    {cert.description}
                  </CyberCardDescription>
                </CyberCardHeader>
                
                <CyberCardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyber-blue mb-2">Compétences acquises</h4>
                      <div className="space-y-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-terminal-green"></div>
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-cyber-blue hover:text-cyber-blue hover:bg-cyber-blue/10 w-full"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le certificat
                      </Button>
                    </div>
                  </div>
                </CyberCardContent>
              </CyberCard>
            );
          })}
        </div>

        {/* Stats Overview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">3</div>
            <div className="text-sm text-muted-foreground">Certifications obtenues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">2</div>
            <div className="text-sm text-muted-foreground">En cours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-purple mb-2">2025</div>
            <div className="text-sm text-muted-foreground">Année active</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-red mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Formation continue</div>
          </div>
        </div>

        {/* Educational Background */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyber-blue">Parcours Académique</h3>
          <div className="max-w-3xl mx-auto">
            <CyberCard className="cyber-glow">
              <CyberCardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-cyber-blue mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg">Master en Cybersécurité</h4>
                      <p className="text-cyber-blue">Institut Burkinabè des Arts et Métiers</p>
                      <p className="text-sm text-muted-foreground">En cours - 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-terminal-green mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg">Licence en Réseaux et Télécommunications</h4>
                      <p className="text-terminal-green">Formation universitaire complétée</p>
                      <p className="text-sm text-muted-foreground">Base solide en infrastructure réseau</p>
                    </div>
                  </div>
                </div>
              </CyberCardContent>
            </CyberCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;