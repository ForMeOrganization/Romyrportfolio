interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-[hsl(var(--tag-bg))] text-[hsl(var(--tag-text))] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
