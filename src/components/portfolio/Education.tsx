import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    type: "Degree",
    institution: "Your University",
    period: "2024 - 2028",
    icon: GraduationCap,
  },
  {
    title: "Practical Deep Learning for Coders",
    type: "Online Course",
    institution: "fast.ai",
    period: "2025 - 2026",
    description: "Applied deep learning with PyTorch covering vision, NLP, and deployment.",
    icon: Award,
  },
  {
    title: "Machine Learning Specialization",
    type: "Certification",
    institution: "DeepLearning.AI & Stanford University",
    period: "2025",
    description: "Foundations of machine learning including supervised and unsupervised learning.",
    icon: Award,
  },
  {
    title: "Web Programming with Python and JavaScript",
    type: "Certification",
    institution: "Harvard University",
    period: "2025",
    icon: Award,
  },
  {
    title: "Introduction to Computer Science",
    type: "Certification",
    institution: "Harvard University",
    period: "2024",
    icon: Award,
  },
];

const Education = () => {
  const ref = useScrollReveal();

  return (
    <section id="education" ref={ref} className="pb-20 px-6 max-w-2xl mx-auto opacity-0">
      <SectionHeader title="Still learning..." linkText="See education" linkHref="#" />
      
      <div className="space-y-3">
        {education.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-muted">
                <Icon size={18} className="text-[hsl(var(--primary))]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">{item.description}</p>
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-[hsl(var(--tag-bg))] text-[hsl(var(--tag-text))]">
                    {item.type}
                  </span>
                  <span>•</span>
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
