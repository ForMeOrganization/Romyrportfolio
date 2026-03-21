import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socialLinks = [
  { icon: MapPin, href: "#", label: "Location" },
  { icon: Mail, href: "mailto:you@example.com", label: "Email" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="pt-28 pb-16 px-6 max-w-2xl mx-auto">
      <div className="flex items-start gap-6 mb-8 animate-fade-up">
        <img
          src={avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full ring-2 ring-border object-cover flex-shrink-0"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-1" style={{ lineHeight: 1.1 }}>
            Hello, I'm Your Name
          </h1>
          <p className="text-muted-foreground text-base">
            Developer <span className="text-foreground/40">@</span>{" "}
            <a href="#" className="underline underline-offset-2 decoration-foreground/20">Your Company</a>
          </p>
          <div className="flex items-center gap-3 mt-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed animate-fade-up stagger-1 max-w-prose" style={{ textWrap: "pretty" }}>
        I'm a full-stack developer who builds web applications with modern technologies. 
        I aim to create tools that people actually use and find useful. 
        I also value accessible software and contribute to open-source whenever I can.
      </p>
    </section>
  );
};

export default Hero;
