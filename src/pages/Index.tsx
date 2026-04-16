import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import authorImage from "@/assets/image.jpg";
import AnimatedSkillCloud from "@/components/portfolio/AnimatedSkillCloud";
import SiteLayout from "@/components/portfolio/SiteLayout";
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  techStackGroups,
  techTags,
} from "@/content/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactLinks = [
  { label: profile.location, href: profile.links.map, icon: MapPin },
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.links.github, icon: Github },
];

const Index = () => {
  const introRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const experienceRef = useScrollReveal();
  const techStackRef = useScrollReveal();
  const achievementsRef = useScrollReveal();
  const educationRef = useScrollReveal();

  return (
    <SiteLayout>
      <section
        ref={introRef}
        className="grid gap-10 border-b border-border/70 pb-12 opacity-0 md:grid-cols-[auto,1fr]"
      >
        <div className="flex justify-center md:justify-start">
          <img
            src={authorImage}
            alt={profile.fullName}
            className="h-28 w-28 rounded-full border border-border object-cover shadow-[0_16px_40px_-28px_rgba(0,0,0,0.7)]"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              This is {profile.shortName}.
            </h1>
            <p className="text-lg text-muted-foreground">{profile.role}</p>
          </div>

          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <p className="max-w-2xl text-[1.02rem] leading-8 text-foreground/82">{profile.intro}</p>
            <p className="max-w-2xl text-[1.02rem] leading-8 text-foreground/82">{profile.summary}</p>
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="pt-12 opacity-0">
        <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-border/70 pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Recent projects</h2>
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            See all projects
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mb-6">
          <AnimatedSkillCloud skills={techTags} />
        </div>

        <div className="flex flex-wrap gap-4">
          {projects.slice(0, 4).map((project, index) => (
            <article
              key={project.title}
              className={`stagger-${index + 1} min-w-[280px] flex-1 rounded-2xl border border-border/80 bg-card/72 p-5 transition-colors hover:border-foreground/20 md:basis-[calc(50%-0.5rem)]`}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground"
              >
                <span>{project.title}</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={experienceRef} className="pt-12 opacity-0">
        <div className="mb-5 border-b border-border/70 pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
        </div>

        <div className="space-y-4">
          {experience.map((item, index) => (
            <article
              key={`${item.role}-${item.company}`}
              className={`stagger-${index + 1} rounded-2xl border border-border/80 bg-card/72 p-5`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:hidden">
                    {item.period}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground sm:w-36 sm:flex-none sm:text-right">
                  <p className="mt-1 whitespace-nowrap tabular-nums">{item.period}</p>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={techStackRef} className="pt-12 opacity-0">
        <div className="mb-5 border-b border-border/70 pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Tech stack</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {techStackGroups.map((group, index) => (
            <article
              key={group.label}
              className={`stagger-${index + 1} rounded-2xl border border-border/80 bg-card/72 p-5`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{group.label}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section ref={achievementsRef} className="pt-12 opacity-0">
        <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-border/70 pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Recent achievements</h2>
          <Link to="/achievements" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            See all achievements
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="space-y-4">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              className={`stagger-${index + 1} rounded-2xl border border-border/80 bg-card/72 p-5`}
            >
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              <p className="mt-3 text-sm text-foreground/70">{item.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={educationRef} className="pt-12 opacity-0">
        <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-border/70 pb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Still learning...</h2>
          <Link to="/cv" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            See CV
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="space-y-4">
          {[...education, ...certifications].map((item, index) => (
            <article key={item.title} className={`stagger-${index + 1} rounded-2xl border border-border/80 bg-card/72 p-5`}>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.meta}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
