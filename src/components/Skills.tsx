import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST API"],
  },
  {
    title: "Eszközök",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
  },
  {
    title: "Egyéb",
    skills: ["Agile/Scrum", "CI/CD", "SEO", "Performance", "Accessibility", "Security"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            03 — Képességek
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technológiai <span className="text-gradient-primary">eszköztár</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A modern webfejlesztés teljes spektrumával dolgozom, a frontenttől a backendig.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;