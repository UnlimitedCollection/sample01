import { Twitter, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/alexnova", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexnova", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/alexnova", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold font-heading">
              Alex<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-primary-foreground/60 mt-2 flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Alex Nova. Made with <Heart className="w-3 h-3 text-accent" /> 
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
