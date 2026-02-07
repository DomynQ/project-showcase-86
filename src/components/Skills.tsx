import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST API"],
  },
  {
    title: "DevOps",
    emoji: "🚀",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"],
  },
  {
    title: "Design",
    emoji: "✨",
    skills: ["Figma", "UI/UX", "Responsive", "A11y", "Performance", "SEO"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6 block">
            03 — Képességek
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Technológiai <span className="text-gradient-primary">eszköztár</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            A modern webfejlesztés teljes spektrumával dolgozom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative p-8 rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                      className="px-4 py-2 text-sm rounded-lg bg-secondary/80 text-secondary-foreground font-medium border border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;