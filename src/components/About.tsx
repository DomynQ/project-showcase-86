import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Target } from "lucide-react";

const stats = [
  { value: "5+", label: "Év tapasztalat" },
  { value: "30+", label: "Befejezett projekt" },
  { value: "15+", label: "Boldog ügyfél" },
  { value: "99%", label: "Elégedettség" },
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
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6 block">
            01 — Rólam
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              Kóddal oldok meg
              <br />
              <span className="text-gradient-primary">valós problémákat.</span>
            </h2>
            <div className="lg:pt-3">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Több éves tapasztalattal rendelkezem komplex webalkalmazások tervezésében
                és fejlesztésében. Nem csak kódot írok — üzleti értéket teremtek.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A felhasználói élménytől az architektúráig, minden részletre figyelek. 
                Hiszek abban, hogy a jó szoftver láthatatlanul működik — egyszerűnek tűnik, 
                miközben komplex problémákat old meg a háttérben.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative text-center p-8 rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values with hover glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative flex gap-5 p-6 rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_hsl(160_84%_45%/0.2)] transition-all duration-500">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="relative">
                <h3 className="font-semibold text-card-foreground mb-1.5">
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