import { ArrowUpRight } from "lucide-react";
import AnimatedSkillCloud from "@/components/portfolio/AnimatedSkillCloud";
import SiteLayout from "@/components/portfolio/SiteLayout";
import { projects, techTags } from "@/content/portfolio";

const Projects = () => (
  <SiteLayout>
    <section className="border-b border-border/70 pb-8">
      <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground"></p>
      <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-foreground/82">
        A small collection of projects I have worked on across web development, and software engineering
      </p>
    </section>

    <section className="pt-10">
      <div className="mb-8">
        <AnimatedSkillCloud skills={techTags} />
      </div>

      <div className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group min-w-[280px] flex-1 overflow-hidden rounded-2xl border border-border/80 bg-card/72 md:basis-[calc(50%-0.625rem)]"
          >
            {project.image && (
              <a href={project.href} target="_blank" rel="noreferrer" className="block">
                <div className="aspect-video overflow-hidden border-b border-border/70 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
            )}

            <div className="p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/title inline-flex items-center gap-2 text-2xl font-semibold text-foreground"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5" />
                  </a>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>
                </div>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
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
  </SiteLayout>
);

export default Projects;
