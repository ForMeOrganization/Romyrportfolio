interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: string;
}

const SectionHeader = ({ title, linkText, linkHref }: SectionHeaderProps) => (
  <div className="flex items-baseline justify-between mb-6">
    <h2 className="text-xl font-semibold">{title}</h2>
    {linkText && linkHref && (
      <a href={linkHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {linkText}
      </a>
    )}
  </div>
);

export default SectionHeader;
