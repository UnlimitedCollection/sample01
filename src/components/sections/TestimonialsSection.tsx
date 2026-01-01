import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jordan Lee",
    role: "Startup Founder",
    quote: "Alex completely transformed my personal brand. The clarity and design are next level.",
    initials: "JL",
  },
  {
    name: "Maya Chen",
    role: "Content Creator",
    quote: "Working with Alex helped me grow my audience and confidence online.",
    initials: "MC",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 text-accent bg-accent/10 border-accent/20">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by creators, founders, and entrepreneurs around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-3xl shadow-card border border-border/50 hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-accent/20" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
