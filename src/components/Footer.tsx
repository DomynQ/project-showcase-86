const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">
              dev<span className="text-primary">.</span>
            </span>
            <span className="text-xs text-muted-foreground">
              © {currentYear}
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {["Rólam", "Projektek", "Képességek", "Kapcsolat"].map((item) => (
              <a
                key={item}
                href={`#${item === "Rólam" ? "about" : item === "Projektek" ? "projects" : item === "Képességek" ? "skills" : "contact"}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;