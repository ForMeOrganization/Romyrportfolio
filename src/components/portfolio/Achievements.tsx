import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Regional Hackathon",
    description: "Champion in a regional hackathon with an AI-powered monitoring application",
    badge: "Champion",
    category: "Hackathon",
    year: "2026",
  },
  {
    title: "CyberSec CTF",
    description: "Secured 1st runner-up in regional cybersecurity capture-the-flag competition",
    badge: "1st Runner-Up",
    category: "CTF",
    year: "2025",
  },
  {
    title: "Dev Summit Hack",
    description: "Built a decentralized voting system using blockchain technology",
    badge: "Participant",
    category: "Hackathon",
    year: "2025",
  },
];

const Achievements = () => {
  const ref = useScrollReveal();

  return (
    <section id="achievements" ref={ref} className="pb-16 px-6 max-w-2xl mx-auto opacity-0">
      <SectionHeader title="Recent achievements" linkText="See all achievements" linkHref="#" />
      
      <div className="space-y-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
          >
            <div className="mt-0.5 p-2 rounded-lg bg-muted">
              <Trophy size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.description}</p>
              <div className="flex items-center gap-2 text-xs">
                <span className={`px-2 py-0.5 rounded-md bg-[hsl(var(--${item.badgeColor}))/0.15] text-[hsl(var(--${item.badgeColor}))] font-medium`}>
                  {item.badge}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{item.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{item.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
