import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years experience",
  "Worked with 50+ global clients",
  "Featured in online creator communities",
];

const values = [
  "Creativity with purpose",
  "Transparency and trust",
  "Continuous growth",
  "Human-centered design",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 text-accent bg-accent/10 border-accent/20">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Helping Brands Tell Their Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Alex Nova, a freelance digital creator and entrepreneur with over 5 years of 
                experience helping individuals and startups build strong personal brands online. 
                I specialize in branding, content strategy, and digital product design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                With a passion for building meaningful online experiences, I blend creativity 
                with business thinking to create results that matter.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl shadow-card border border-border/50 hover-lift cursor-default"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
