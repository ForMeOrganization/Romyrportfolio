import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@/content/portfolio";

const navLinks = [
  { label: "cv", to: "/cv" },
  { label: "projects", to: "/projects" },
  { label: "achievements", to: "/achievements" },
];

type SiteLayoutProps = {
  children: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70 bg-background/92">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-5">
          <Link to="/" className="text-sm font-semibold tracking-[0.16em] text-foreground uppercase">
            {profile.shortName}
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={isActive ? "text-foreground" : "transition-colors hover:text-foreground"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-20 pt-10">{children}</main>

      <footer className="mx-auto max-w-4xl px-6 pb-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="transition-colors hover:text-foreground">
            Back to home
          </Link>
          <p>© {new Date().getFullYear()} • {profile.fullName}</p>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
