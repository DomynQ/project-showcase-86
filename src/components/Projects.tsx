import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern webáruház React és Node.js alapokon, Stripe fizetési integrációval és teljes körű admin felülettel.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "Feladatkezelő alkalmazás drag-and-drop funkcióval, valós idejű szinkronizálással és csapat együttműködési lehetőségekkel.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Interaktív dashboard komplex adatvizualizációval, valós idejű metrikákkal és testreszabható widgetekkel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "D3.js", "PostgreSQL", "GraphQL"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Social Media App",
    description: "Közösségi platform valós idejű üzenetküldéssel, képmegosztással és személyre szabott hírfolyammal.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Prisma", "Socket.io", "AWS"],
    category: "mobile",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Application",
    description: "Időjárás alkalmazás geolokációval, 7 napos előrejelzéssel és gyönyörű animált háttérrel.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Weather API", "Framer Motion"],
    category: "mobile",
    githubUrl: "https://github.com"
  },
  {
    title: "Portfolio Website",
    description: "Modern és reszponzív portfólió weboldal elegáns animációkkal és tiszta dizájnnal.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "Tailwind", "Framer"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const categories = [
  { id: "all", label: "Összes" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobil" },
];

const ProjectSkeleton = () => (
  <div className="rounded-2xl overflow-hidden bg-card shadow-card">
    <Skeleton className="h-48 w-full" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Portfólió
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kiemelt <span className="text-gradient-accent">projektek</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Íme néhány projekt, amelyeken dolgoztam. Mindegyik egyedi kihívásokat 
            és tanulási lehetőségeket jelentett.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              {[...Array(6)].map((_, index) => (
                <ProjectSkeleton key={index} />
              ))}
            </>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))
          )}
        </div>

        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nincs projekt ebben a kategóriában.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
