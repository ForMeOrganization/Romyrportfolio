import { Link } from "react-router-dom";
import SiteLayout from "@/components/portfolio/SiteLayout";

const NotFound = () => (
  <SiteLayout>
    <section className="flex flex-col items-start gap-4 py-20">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">404</p>
      <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Page not found</h1>
      <p className="max-w-md text-[1.02rem] leading-8 text-muted-foreground">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center rounded-full border border-border/80 bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Back to home
      </Link>
    </section>
  </SiteLayout>
);

export default NotFound;
