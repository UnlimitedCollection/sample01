import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users } from "lucide-react";

const projects = [
  {
    projectName: "Creator Growth System",
    category: "Personal Branding",
    description: "A complete brand and website system built for a YouTube educator.",
    result: "3x audience growth in 6 months",
    icon: TrendingUp,
    gradient: "from-accent to-highlight",
  },
  {
    projectName: "Solo Founder Website",
    category: "Web Design",
    description: "Minimal personal website for a tech entrepreneur.",
    result: "Increased inbound leads by 40%",
    icon: Users,
    gradient: "from-primary to-accent",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Badge variant="secondary" className="mb-4 text-accent bg-accent/10 border-accent/20">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
              Selected Work
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 hover-lift"
            >
              {/* Project Image Area */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-8`}>
                <div className="absolute inset-0 bg-primary/10" />
                <div className="relative h-full flex flex-col justify-between">
                  <Badge className="self-start bg-card/90 text-foreground border-0">
                    {project.category}
                  </Badge>
                  <project.icon className="w-16 h-16 text-primary-foreground/80" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-accent transition-colors">
                  {project.projectName}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
