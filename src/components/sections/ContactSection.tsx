import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/alexnova", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexnova", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/alexnova", label: "Instagram" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 text-accent bg-accent/10 border-accent/20">
                Contact
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind? Let's discuss how we can work together to build your personal brand.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email me at</div>
                <a href="mailto:hello@alexnova.com" className="font-semibold text-foreground hover:text-accent transition-colors">
                  hello@alexnova.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-sm text-muted-foreground mb-4">Find me on</div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card rounded-xl border border-border/50 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl shadow-card border border-border/50">
            <h3 className="text-xl font-bold font-heading mb-6">Start a Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">$1,000 - $3,000</SelectItem>
                    <SelectItem value="growth">$3,000 - $5,000</SelectItem>
                    <SelectItem value="premium">$5,000 - $10,000</SelectItem>
                    <SelectItem value="enterprise">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  rows={4}
                  required
                  className="rounded-xl resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
