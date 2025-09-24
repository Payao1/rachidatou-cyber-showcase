import { Shield, Network, Eye, Search, Calendar, ArrowRight } from "lucide-react";
import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle, CyberCardDescription } from "@/components/ui/cyber-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Audit de sécurité d'un environnement réseau virtuel",
      date: "2025",
      icon: Network,
      category: "Network Security",
      description: "Identification des failles d'un réseau local et proposition de mesures correctives",
      tools: ["Nmap", "Wireshark", "Metasploit"],
      achievements: [
        "Identification des services réseau non sécurisés",
        "Détection des points faibles dans la configuration firewall",
        "Recommandations pratiques pour améliorer la sécurité"
      ],
      skills: ["Analyse réseau", "Diagnostic sécurité", "Audit technique", "Topologie réseau"],
      color: "cyber-blue"
    },
    {
      title: "Détection d'intrusion et analyse de trafic (IDS/IPS)",
      date: "2023",
      icon: Shield,
      category: "Intrusion Detection",
      description: "Installation, configuration et test d'IDS/IPS (Fortigate) pour détecter les activités malveillantes",
      tools: ["Fortigate", "Wireshark", "Tcpdump", "Metasploit"],
      achievements: [
        "Détection réussie de scans réseau et payloads malveillants",
        "Implémentation de règles contextuelles",
        "Plan de réponse aux incidents 24/7"
      ],
      skills: ["IDS/IPS", "Analyse de paquets", "Monitoring", "Réponse aux incidents"],
      color: "terminal-green"
    },
    {
      title: "Audit de sécurité : SMB & RDP",
      date: "2025",
      icon: Search,
      category: "System Audit",
      description: "Test de sécurité des services SMB et RDP sur environnement Windows en laboratoire",
      tools: ["Nmap", "Wireshark", "Sysinternals", "Windows Event Viewer"],
      achievements: [
        "Identification de SMBv1 sur machines anciennes",
        "Détection de partages mal configurés",
        "Recommandations de durcissement RDP"
      ],
      skills: ["Audit Windows", "Analyse de logs", "Configuration sécurisée", "Tests éthiques"],
      color: "cyber-purple"
    },
    {
      title: "Analyse de trafic avec Wireshark (Tor)",
      date: "2025",
      icon: Eye,
      category: "Traffic Analysis",
      description: "Observation et analyse du trafic Tor pour comprendre les empreintes réseau",
      tools: ["Wireshark", "tcpdump", "Zeek (Bro)", "ELK/SIEM"],
      achievements: [
        "Identification des patterns de flux Tor",
        "Création de métriques de détection",
        "Propositions de règles SIEM"
      ],
      skills: ["Analyse avancée", "Flux anonymisés", "SIEM", "Méthodologie éthique"],
      color: "cyber-red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      "cyber-blue": {
        icon: "text-cyber-blue",
        badge: "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30",
        button: "text-cyber-blue hover:text-cyber-blue"
      },
      "terminal-green": {
        icon: "text-terminal-green",
        badge: "bg-terminal-green/20 text-terminal-green border-terminal-green/30", 
        button: "text-terminal-green hover:text-terminal-green"
      },
      "cyber-purple": {
        icon: "text-cyber-purple",
        badge: "bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30",
        button: "text-cyber-purple hover:text-cyber-purple"
      },
      "cyber-red": {
        icon: "text-cyber-red",
        badge: "bg-cyber-red/20 text-cyber-red border-cyber-red/30",
        button: "text-cyber-red hover:text-cyber-red"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap["cyber-blue"];
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-cyber-blue mr-3 animate-cyber-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-cyber-blue">Projets</span> & Audits
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mes projets d'audit de sécurité, tests d'intrusion et analyses techniques
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);
            
            return (
              <CyberCard key={index} className="group hover:cyber-glow transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Project Header */}
                  <div className="md:col-span-1">
                    <CyberCardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-lg bg-secondary border ${colors.icon}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <Badge variant="outline" className={colors.badge}>
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <CyberCardTitle className="text-xl mb-2 group-hover:text-cyber-blue transition-colors">
                        {project.title}
                      </CyberCardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <CyberCardDescription>
                        {project.description}
                      </CyberCardDescription>
                    </CyberCardHeader>
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2">
                    <CyberCardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Tools & Achievements */}
                        <div>
                          <h4 className="font-semibold text-cyber-blue mb-3">Outils utilisés</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} variant="secondary" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>

                          <h4 className="font-semibold text-terminal-green mb-3">Résultats clés</h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm">
                                <ArrowRight className="w-4 h-4 text-cyber-blue mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="font-semibold text-cyber-purple mb-3">Compétences développées</h4>
                          <div className="space-y-2">
                            {project.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
                                <span className="text-sm">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CyberCardContent>
                  </div>
                </div>
              </CyberCard>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">4</div>
            <div className="text-sm text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Outils maîtrisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-purple mb-2">3</div>
            <div className="text-sm text-muted-foreground">Années d'étude</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-red mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Éthique</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;