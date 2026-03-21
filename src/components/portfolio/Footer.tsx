const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-2xl mx-auto flex items-center justify-between text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} • Your Name</span>
      <a href="#" className="hover:text-foreground transition-colors">Back to top</a>
    </div>
  </footer>
);

export default Footer;
