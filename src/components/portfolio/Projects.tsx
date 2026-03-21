import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techTags = [
  "TypeScript", "React", "Next.js", "Tailwind", "Python", "Django", "FastAPI", "TensorFlow"
];

const projects = [
  {
    title: "Project Alpha",
    description: "A real-time collaborative editor built with WebSockets and React",
    tags: ["React", "TypeScript", "WebSocket"],
    image: "",
  },
  {
    title: "DataFlow",
    description: "An ETL pipeline dashboard for monitoring data transformations",
    tags: ["Python", "FastAPI", "React"],
    image: "",
  },
  {
    title: "PixelForge",
    description: "A browser-based image editor with non-destructive layer support",
    tags: ["TypeScript", "Canvas API"],
    image: "",
  },
  {
    title: "TaskHive",
    description: "A lightweight task management tool with smart prioritization",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    image: "",
  },
];

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="pb-16 px-6 max-w-2xl mx-auto opacity-0">
      <SectionHeader title="Recent projects" linkText="See all projects" linkHref="#" />
      
      <div className="flex flex-wrap gap-2 mb-6">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-[hsl(var(--tag-bg))] text-[hsl(var(--tag-text))] font-mono"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs px-2.5 py-1 text-muted-foreground">. . .</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div key={project.title} className={`stagger-${i + 1}`}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
