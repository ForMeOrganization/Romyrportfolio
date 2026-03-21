import { Trophy, Award, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Project Alpha",
    description: "A real-time collaborative editor built with WebSockets and React.",
    tags: ["React", "TypeScript", "WebSocket"],
  },
  {
    title: "DataFlow",
    description: "An ETL pipeline dashboard for monitoring data transformations.",
    tags: ["Python", "FastAPI", "React"],
  },
  {
    title: "PixelForge",
    description: "A browser-based image editor with non-destructive layer support.",
    tags: ["TypeScript", "Canvas API"],
  },
  {
    title: "TaskHive",
    description: "A lightweight task management tool with smart prioritization.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
  },
];

const achievements = [
  {
    title: "Regional Hackathon",
    description: "Champion in a regional hackathon with an AI-powered monitoring application.",
    badge: "Champion",
    meta: "Hackathon • 2026",
  },
  {
    title: "CyberSec CTF",
    description: "Secured 1st runner-up in a regional cybersecurity capture-the-flag competition.",
    badge: "1st Runner-Up",
    meta: "CTF • 2025",
  },
  {
    title: "Dev Summit Hack",
    description: "Built a decentralized voting system using blockchain technology.",
    badge: "Participant",
    meta: "Hackathon • 2025",
  },
];

const certifications = [
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

const SectionTitle = ({ title }: { title: string }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
  </div>
);

const Index = () => {
  const projectsRef = useScrollReveal();
  const achievementsRef = useScrollReveal();
  const certificationsRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex max-w-2xl flex-col gap-14 px-6 py-20">
        <header className="space-y-3 border-b border-border pb-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Portfolio Highlights
          </h1>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            A simple one-page view of recent projects, achievements, and certifications.
          </p>
        </header>

        <section ref={projectsRef} id="projects" className="opacity-0">
          <SectionTitle title="Recent Projects" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`stagger-${index + 1} rounded-xl border border-border bg-card p-5 transition-[box-shadow,border-color] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/20`}
              >
                <h3 className="mb-2 text-base font-semibold text-foreground">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[hsl(var(--tag-bg))] px-2 py-0.5 font-mono text-xs text-[hsl(var(--tag-text))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section ref={achievementsRef} id="achievements" className="opacity-0">
          <SectionTitle title="Recent Achievements" />
          <div className="space-y-3">
            {achievements.map((item, index) => (
              <article
                key={item.title}
                className={`stagger-${index + 1} flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-[box-shadow,border-color] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/10`}
              >
                <div className="mt-0.5 rounded-lg bg-muted p-2">
                  <Trophy size={18} className="text-[hsl(var(--primary))]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-md bg-primary/15 px-2 py-0.5 font-medium text-primary">
                      {item.badge}
                    </span>
                    <span className="text-muted-foreground">{item.meta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section ref={certificationsRef} id="certifications" className="opacity-0">
          <SectionTitle title="Certifications" />
          <div className="space-y-3">
            {certifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`stagger-${index + 1} flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-[box-shadow,border-color] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/10`}
                >
                  <div className="mt-0.5 rounded-lg bg-muted p-2">
                    <Icon size={18} className="text-[hsl(var(--primary))]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h3>
                    {item.description && (
                      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-md bg-[hsl(var(--tag-bg))] px-2 py-0.5 text-[hsl(var(--tag-text))]">
                        {item.type}
                      </span>
                      <span>{item.institution}</span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
