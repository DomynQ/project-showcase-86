import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.01] to-transparent pointer-events-none" />
      <div className="container px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="text-2xl font-bold text-foreground">
              dev<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
              Full-stack fejlesztő, aki szereti a letisztult kódot és a szép felhasználói felületeket.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-4">Navigáció</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Rólam", href: "#about" },
                { label: "Projektek", href: "#projects" },
                { label: "Képességek", href: "#skills" },
                { label: "Kapcsolat", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-4">Közösségi</h4>
            <div className="flex flex-col gap-2">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Mail, label: "Email", href: "mailto:email@example.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} · Minden jog fenntartva
          </p>
          <p className="text-xs text-muted-foreground/50">
            React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;