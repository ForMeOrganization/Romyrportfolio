import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-[hsl(var(--heading))] font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
          Your Name
        </a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="hover:text-foreground transition-colors">projects</a>
          <a href="#achievements" className="hover:text-foreground transition-colors">achievements</a>
          <a href="#education" className="hover:text-foreground transition-colors">education</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
