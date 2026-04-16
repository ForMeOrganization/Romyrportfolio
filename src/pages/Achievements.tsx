import SiteLayout from "@/components/portfolio/SiteLayout";
import { achievements } from "@/content/portfolio";

const Achievements = () => (
  <SiteLayout>
    <section className="border-b border-border/70 pb-8">
      <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Achievements</p>
      <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">Highlights</h1>
      <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-foreground/82">
        Competitive events and project milestones that pushed me to build better, learn faster, adapt and work well with teams.
      </p>
    </section>

    <section className="pt-10">
      <div className="space-y-5">
        {achievements.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border/80 bg-card/72 p-6">
            <h2 className="text-2xl font-semibold text-foreground">{item.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{item.description}</p>
            <p className="mt-4 text-sm text-foreground/70">{item.meta}</p>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Achievements;
