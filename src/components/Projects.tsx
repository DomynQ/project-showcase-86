import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern webáruház React és Node.js alapokon, Stripe fizetési integrációval és teljes körű admin felülettel.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Feladatkezelő alkalmazás drag-and-drop funkcióval, valós idejű szinkronizálással és csapat együttműködési lehetőségekkel.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Interaktív dashboard komplex adatvizualizációval, valós idejű metrikákkal és testreszabható widgetekkel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "D3.js", "PostgreSQL", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media App",
    description: "Közösségi platform valós idejű üzenetküldéssel, képmegosztással és személyre szabott hírfolyammal.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Prisma", "Socket.io", "AWS"],
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Application",
    description: "Időjárás alkalmazás geolokációval, 7 napos előrejelzéssel és gyönyörű animált háttérrel.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Weather API", "Framer Motion"],
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "Modern és reszponzív portfólió weboldal elegáns animációkkal és tiszta dizájnnal.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "Tailwind", "Framer"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            02 — Projektek
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Válogatott <span className="text-gradient-primary">munkáim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Minden projekt egyedi kihívást jelentett — íme néhány, amelyre a legbüszkébb vagyok.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;