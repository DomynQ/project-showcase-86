import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, (v) => v - 300);
  const glowY = useTransform(mouseY, (v) => v - 300);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Interactive mouse glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, hsl(160 84% 45% / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape
        className="absolute top-[15%] right-[12%] w-20 h-20 rounded-2xl border border-primary/10 bg-primary/[0.03] backdrop-blur-sm rotate-12"
        delay={0}
      />
      <FloatingShape
        className="absolute bottom-[25%] right-[25%] w-14 h-14 rounded-full border border-accent/10 bg-accent/[0.03] backdrop-blur-sm"
        delay={2}
      />
      <FloatingShape
        className="absolute top-[40%] right-[8%] w-10 h-10 rounded-lg border border-primary/10 bg-primary/[0.03] backdrop-blur-sm -rotate-12"
        delay={4}
      />
      <FloatingShape
        className="absolute top-[20%] left-[8%] w-6 h-6 rounded-full bg-primary/10"
        delay={1}
      />
      <FloatingShape
        className="absolute bottom-[35%] left-[15%] w-8 h-8 rounded-lg border border-accent/10 rotate-45"
        delay={3}
      />

      {/* Large ambient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-6 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary tracking-wide">Elérhető új projektekre</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            <span className="block text-foreground">Full-stack</span>
            <span className="block text-gradient-primary">fejlesztő</span>
            <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 tracking-tight opacity-40 font-light">
              & UI designer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed"
          >
            Performáns, skálázható webalkalmazásokat építek, amelyek
            <span className="text-foreground font-medium"> jól néznek ki</span> és
            <span className="text-foreground font-medium"> jól működnek</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-[0_0_80px_-8px_hsl(160_84%_45%/0.3)] transition-all duration-500 px-8"
              asChild
            >
              <a href="#projects">
                Projektek megtekintése
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a href="#contact">Kapcsolatfelvétel</a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:email@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 hover:shadow-glow transition-all duration-500"
                aria-label={label}
              >
                <Icon className="h-[18px] w-[18px] text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Terminal - now with glow */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[400px]"
        >
          <div className="relative">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/20 via-transparent to-accent/10 blur-sm" />
            <div className="relative rounded-xl border border-border/50 bg-card/90 backdrop-blur-xl overflow-hidden shadow-card">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-accent/70" />
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                </div>
                <span className="text-[10px] text-muted-foreground/60 font-mono ml-auto">zsh — 80×24</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-7 text-muted-foreground">
                <p><span className="text-primary">❯</span> <span className="text-foreground">whoami</span></p>
                <p className="text-muted-foreground/70 pl-4">Full-stack developer @ Budapest</p>
                <p className="mt-3"><span className="text-primary">❯</span> <span className="text-foreground">cat stack.json</span></p>
                <p className="text-muted-foreground/70 pl-4">
                  <span className="text-primary/60">{"{"}</span> react, typescript, node, postgres <span className="text-primary/60">{"}"}</span>
                </p>
                <p className="mt-3"><span className="text-primary">❯</span> <span className="text-foreground">echo $STATUS</span></p>
                <p className="text-primary pl-4">Nyitott új lehetőségekre <span className="text-accent">✦</span></p>
                <p className="mt-3 flex items-center gap-1">
                  <span className="text-primary">❯</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-2 h-5 bg-primary/70 rounded-sm"
                  />
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">Görgess</span>
          <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;