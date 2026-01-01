import { Badge } from "@/components/ui/badge";
import { Lightbulb, Megaphone, Layout, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    name: "Personal Brand Strategy",
    description: "Crafting clear brand positioning, messaging, and online presence for individuals and creators.",
  },
  {
    icon: Megaphone,
    name: "Content Creation",
    description: "High-impact content for social media, websites, and digital platforms that builds authority.",
  },
  {
    icon: Layout,
    name: "Website & Portfolio Design",
    description: "Modern, conversion-focused personal websites for freelancers and entrepreneurs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 text-accent bg-accent/10 border-accent/20">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive services to help you build and grow your personal brand online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl shadow-card border border-border/50 hover-lift overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-heading mb-3 flex items-center gap-2">
                  {service.name}
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
