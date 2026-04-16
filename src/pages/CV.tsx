import { ArrowUpRight, Download } from "lucide-react";
import SiteLayout from "@/components/portfolio/SiteLayout";
import { certifications, education, experience, profile, techStackGroups, Focus } from "@/content/portfolio";

const CV = () => (
  <SiteLayout>
    <section className="border-b border-border/70 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">CV</p>
          <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">{profile.fullName}</h1>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-foreground/82">{profile.role}</p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Download size={16} />
          Request CV copy
        </a>
      </div>
    </section>

    <section className="grid gap-10 pt-10 lg:grid-cols-[1.2fr,0.8fr]">
      <div className="space-y-10">
        <section>
          <h2 className="border-b border-border/70 pb-3 text-2xl font-semibold text-foreground">Experience</h2>
          <div className="mt-5 space-y-4">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="rounded-2xl border border-border/80 bg-card/72 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground sm:w-36 sm:flex-none sm:text-right">
                    <p className="mt-1 whitespace-nowrap tabular-nums">{item.period}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-b border-border/70 pb-3 text-2xl font-semibold text-foreground">Education</h2>
          <div className="mt-5 space-y-4">
            {education.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/80 bg-card/72 p-5">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                )}
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-b border-border/70 pb-3 text-2xl font-semibold text-foreground">Certifications</h2>
          <div className="mt-5 space-y-4">
            {certifications.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/80 bg-card/72 p-5">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.meta}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <aside className="space-y-10">
        <section>
          <h2 className="border-b border-border/70 pb-3 text-2xl font-semibold text-foreground">Profile</h2>
          <div className="mt-5 rounded-2xl border border-border/80 bg-card/72 p-5">
            <p className="text-sm leading-7 text-muted-foreground">{profile.intro}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{profile.summary}</p>
          </div>
        </section>

        <section>
          <h2 className="border-b border-border/70 pb-3 text-2xl font-semibold text-foreground">Tech stack</h2>
          <div className="mt-5 space-y-4">
            {techStackGroups.map((group) => (
              <article key={group.label} className="rounded-2xl border border-border/80 bg-card/72 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{group.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-2xl border border-border/80 bg-card/72 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Current focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {Focus.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="border-b border-border/70 pb-3 text-2xl font-semibold text-foreground">Contact</h2>
          <div className="mt-5 rounded-2xl border border-border/80 bg-card/72 p-5 text-sm leading-7 text-muted-foreground">
            <p>{profile.location}</p>
            <p className="mt-1">
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">
                {profile.email}
              </a>
            </p>
            <p className="mt-4">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                GitHub
              </a>
            </p>
            <p>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </aside>
    </section>
  </SiteLayout>
);

export default CV;
