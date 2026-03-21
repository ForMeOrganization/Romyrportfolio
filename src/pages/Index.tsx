import { Trophy, Award, GraduationCap, ImageIcon, Github, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Manobela",
    description: "A driver monitoring mobile app using computer vision",
    tags: ["Computer Vision", "React", "TypeScript", "WebSocket", "Mobile Development", "FastAPI"],
    image: "/src/assets/1770454143632.jpg",
    href: "https://github.com/Romyr05/manobela",
  },
  {
    title: "Pagbutlak Website",
    description: "An ETL pipeline dashboard for monitoring data transformations.",
    tags: ["Typescript", "TailwindCSS", "React", "Next.js"],
    image: "src/assets/pagbutlak.png",
    href: "https://github.com/pagbutlakupv/website",
  },
];

const achievements = [
  {
    title: "Regional Hackathon",
    description: "Champion in a regional hackathon with an AI-powered monitoring application.",
    badge: "Champion",
    meta: "Hackathon • 2026",
    image: "/src/assets/hackathon.jpg",
  },
  {
    title: "CyberSec CTF",
    description: "Secured 1st runner-up in a regional cybersecurity capture-the-flag competition.",
    badge: "1st Runner-Up",
    meta: "CTF • 2025",
    image: "/src/assets/ctf.jpg",
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
    title: "Intermediate Git",
    type: "Online Course Certification",
    institution: "DataCamp",
    period: "2026",
    description: "Learned and Applied Intermediate Git Concepts",
    icon: Award,
    image: "src/assets/cert1.jpg",
  },
  {
    title: "Intermediate Python",
    type: "Online Course Certification",
    institution: "DataCamp",
    period: "2026",
    description: "Learned and Applied Intermediate Python Concepts",
    icon: Award,
    image: "src/assets/cert2.jpg",
  },
  {
    title: "Intermediate SQL",
    type: "Online Course Certification",
    institution: "DataCamp",
    period: "2026",
    description: "Learned and Applied Intermediate SQL Concepts",
    icon: Award,
    image: "src/assets/cert3.jpg",
  },
];

const SectionTitle = ({ title }: { title: string }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
  </div>
);

const githubProfileUrl = "https://github.com/Romyr05";
const linkedinProfileUrl = "https://www.linkedin.com/in/romyr-lopez-65671229b/";

const AuthorLogoPlaceholder = () => (
  <div className="flex items-center gap-5 rounded-2xl">
    <div className="flex h-24 w-24 flex-none items-center justify-center overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.3),_transparent_58%),linear-gradient(135deg,_hsl(var(--secondary)),_hsl(var(--card)))]">
        <img src={"src/assets/image.jpg"} alt="John Romyr Lopez" className="h-full w-full object-cover" />
    </div>
    <div className="min-w-0">
      <p className="text-xl font-semibold tracking-tight text-foreground">John Romyr Lopez</p>
      <p className="mt-1 text-sm text-muted-foreground">Developer, builder, and a lifelong learner</p>
      <div className="mt-3 flex items-center gap-3">
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github size={18} />
        </a>
        <a
          href={linkedinProfileUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </div>
);

const ImageSlot = ({
  src,
  alt,
  label,
  className,
}: {
  src?: string;
  alt: string;
  label: string;
  className: string;
}) => {
  if (src) {
    return (
      <div className={className}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${className} flex items-center justify-center border border-dashed border-border bg-muted/60 text-center text-xs text-muted-foreground`}
    >
      <div className="flex flex-col items-center gap-2 px-4">
        <ImageIcon size={18} className="text-[hsl(var(--primary))]" />
        <span>{label}</span>
      </div>
    </div>
  );
};

const Index = () => {
  const projectsRef = useScrollReveal();
  const achievementsRef = useScrollReveal();
  const certificationsRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex max-w-2xl flex-col gap-14 px-6 py-20">
        <header className="space-y-3">
          <AuthorLogoPlaceholder />
          <p>Hello I am John Romyr Lopez, A UPV computer science Student. Willing to learn and to improve in areas that I am lacking </p>
        </header>

        <section ref={projectsRef} id="projects" className="opacity-0">
          <SectionTitle title="Recent Projects" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`stagger-${index + 1} overflow-hidden rounded-xl border border-border bg-card transition-[box-shadow,border-color] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/20`}
              >
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub link`}>
                  <ImageSlot
                    src={project.image}
                    alt={project.title}
                    label="Add your app screenshot here"
                    className="aspect-[16/10] w-full"
                  />
                </a>
                <div className="p-5">
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
                className={`stagger-${index + 1} flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-[box-shadow,border-color] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/10 sm:flex-row`}
              >
              {index !== achievements.length - 1 && (
                <ImageSlot
                  src={item.image}
                  alt={item.title}
                  label="Add your achievement image here"
                  className="h-32 w-full rounded-lg sm:h-auto sm:w-40 sm:flex-none"
                />
              )}
                <div className="flex min-w-0 flex-1 items-start gap-4">
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
                  className={`stagger-${index + 1} flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-[box-shadow,border-color] duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/10 sm:flex-row`}
                >
                  <ImageSlot
                    src={item.image}
                    alt={item.title}
                    label="Add your certificate image here"
                    className="h-32 w-full rounded-lg sm:h-auto sm:w-40 sm:flex-none"
                  />
                  <div className="flex min-w-0 flex-1 items-start gap-4">
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
