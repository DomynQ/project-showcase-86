import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl, index, featured }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-700 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-52"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Floating tag on image */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary bg-card/80 backdrop-blur-sm rounded-full border border-primary/20">
              Kiemelt projekt
            </span>
          </div>
        )}
      </div>

      <div className="relative p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary/80 rounded-md border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className={`font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-500 ${
          featured ? "text-2xl" : "text-lg"
        }`}>
          {title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed mb-5 ${featured ? "text-base" : "text-sm line-clamp-2"}`}>
          {description}
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 decoration-primary/40"
            >
              Élő demo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              Kód
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;