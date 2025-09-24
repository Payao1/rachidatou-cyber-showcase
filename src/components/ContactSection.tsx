import { Mail, MapPin, Phone, Linkedin, Github, FileText, Send } from "lucide-react";
import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rachidatoupayao42@gmail.com",
      action: "mailto:rachidatoupayao42@gmail.com",
      color: "cyber-blue"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Burkina Faso",
      action: null,
      color: "terminal-green"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "65487964",
      action: "tel:65487964",
      color: "cyber-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rachidatou-emma-payao-519604220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "text-cyber-blue hover:text-cyber-blue"
    },
    {
      icon: Github,
      name: "GitHub", 
      url: "#",
      color: "text-terminal-green hover:text-terminal-green"
    },
    {
      icon: FileText,
      name: "CV",
      url: "https://www.canva.com/design/DAGz2UgkzUI/PUqlyFFIuvYsIg2GsCRbzA/edit",
      color: "text-cyber-purple hover:text-cyber-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-cyber-blue mr-3 animate-cyber-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-cyber-blue">Contact</span> & Collaboration
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prête à contribuer à des projets cybersécurité innovants. Contactez-moi pour discuter d'opportunités.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <CyberCard className="cyber-glow">
              <CyberCardHeader>
                <CyberCardTitle className="text-2xl text-cyber-blue">
                  Restons en contact
                </CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div className={`p-3 rounded-lg bg-secondary border text-${info.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className={`text-${info.color} hover:underline`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CyberCardContent>
            </CyberCard>

            {/* Social Links */}
            <CyberCard>
              <CyberCardHeader>
                <CyberCardTitle className="text-xl text-terminal-green">
                  Liens professionnels
                </CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`${link.color} border-current hover:bg-current/10 transition-all duration-300`}
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        <Icon className="w-5 h-5" />
                      </Button>
                    );
                  })}
                </div>
              </CyberCardContent>
            </CyberCard>

            {/* Availability */}
            <CyberCard>
              <CyberCardHeader>
                <CyberCardTitle className="text-xl text-cyber-purple">
                  Disponibilité
                </CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-terminal-green animate-pulse"></div>
                    <span className="text-terminal-green font-medium">Disponible pour nouvelles opportunités</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recherche active de stage, alternance ou poste junior en cybersécurité.
                    Prête à commencer immédiatement.
                  </p>
                </div>
              </CyberCardContent>
            </CyberCard>
          </div>

          {/* Contact Form */}
          <div>
            <CyberCard className="h-full">
              <CyberCardHeader>
                <CyberCardTitle className="text-2xl text-cyber-blue">
                  Envoyez-moi un message
                </CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="border-border focus:border-cyber-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="border-border focus:border-cyber-blue"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="border-border focus:border-cyber-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      required
                      className="border-border focus:border-cyber-blue resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full cyber-glow hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CyberCardContent>
            </CyberCard>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <CyberCard className="max-w-2xl mx-auto bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border-cyber-blue/30">
            <CyberCardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-cyber-blue">
                Collaborons ensemble !
              </h3>
              <p className="text-muted-foreground mb-6">
                Je suis passionnée par la cybersécurité et toujours prête à apprendre. 
                Si vous recherchez une professionnelle motivée pour rejoindre votre équipe, 
                n'hésitez pas à me contacter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="cyber-glow"
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Commencer la conversation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-primary-foreground"
                  onClick={() => window.open("https://www.canva.com/design/DAGz2UgkzUI/PUqlyFFIuvYsIg2GsCRbzA/edit", "_blank")}
                >
                  Télécharger mon CV
                </Button>
              </div>
            </CyberCardContent>
          </CyberCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;