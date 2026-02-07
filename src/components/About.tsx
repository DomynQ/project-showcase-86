import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Target } from "lucide-react";

const stats = [
  { value: "5+", label: "Év tapasztalat" },
  { value: "30+", label: "Befejezett projekt" },
  { value: "15+", label: "Boldog ügyfél" },
  { value: "∞", label: "Kávé" },
];

const values = [
  {
    icon: Target,
    title: "Precizitás",
    description: "Pixel-perfect megoldások, amik minden böngészőben és eszközön tökéletesen működnek.",
  },
  {
    icon: Briefcase,
    title: "Professzionalizmus",
    description: "Tiszta kód, átlátható struktúra és részletes dokumentáció minden projektnél.",
  },
  {
    icon: Heart,
    title: "Szenvedély",
    description: "Minden projektet úgy kezelek, mintha a sajátom lenne — mert a minőség nem alku.",
  },
  {
    icon: GraduationCap,
    title: "Folyamatos fejlődés",
    description: "Naprakész tudás, új technológiák és best practice-ek folyamatos elsajátítása.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            01 — Rólam
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Kóddal oldok meg
              <br />
              <span className="text-gradient-primary">valós problémákat.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed lg:pt-2">
              Több éves tapasztalattal rendelkezem komplex webalkalmazások tervezésében
              és fejlesztésében. Nem csak kódot írok — üzleti értéket teremtek.
              A felhasználói élménytől az architektúráig, minden részletre figyelek.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-border bg-card"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;