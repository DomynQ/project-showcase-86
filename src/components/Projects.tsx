import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern webáruház React és Node.js alapokon, Stripe fizetési integrációval és teljes körű admin felülettel. Komplex állapotkezelés, kosár logika és fizetési folyamat.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Feladatkezelő alkalmazás drag-and-drop funkcióval, valós idejű szinkronizálással és csapat együttműködési lehetőségekkel.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80",
    tags: ["TypeScript", "React", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Interaktív dashboard komplex adatvizualizációval, valós idejű metrikákkal és testreszabható widgetekkel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "D3.js", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media App",
    description: "Közösségi platform valós idejű üzenetküldéssel, képmegosztással és személyre szabott hírfolyammal.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Prisma", "Socket.io"],
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Application",
    description: "Időjárás alkalmazás geolokációval, 7 napos előrejelzéssel és animált háttérrel.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "API", "Framer Motion"],
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6 block">
            02 — Projektek
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Válogatott <span className="text-gradient-primary">munkáim</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg">
                Minden projekt egyedi kihívást jelentett — íme néhány, amelyre a legbüszkébb vagyok.
              </p>
            </div>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline underline-offset-4 decoration-primary/40 flex items-center gap-1 shrink-0"
              whileHover={{ x: 4 }}
            >
              Összes projekt a GitHubon →
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;