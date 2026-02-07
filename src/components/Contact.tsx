import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: Mail, label: "Email", value: "email@example.com", href: "mailto:email@example.com" },
  { icon: Phone, label: "Telefon", value: "+36 30 123 4567", href: "tel:+36301234567" },
  { icon: MapPin, label: "Helyszín", value: "Budapest, Magyarország", href: null },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6 block">
            04 — Kapcsolat
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Dolgozzunk <span className="text-gradient-primary">együtt.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Van egy projektötleted? Keress meg, és építsünk valami nagyszerűt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-4px_hsl(160_84%_45%/0.2)] transition-all duration-500">
                  <info.icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-foreground font-medium hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-6">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Találj meg itt</p>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn"].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none" />
              <form
                className="relative space-y-4 p-8 rounded-xl border border-border bg-card"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Név" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
                  <Input type="email" placeholder="Email" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
                </div>
                <Input placeholder="Tárgy" className="bg-secondary/30 border-border focus:border-primary transition-colors" />
                <Textarea placeholder="Üzenet..." rows={5} className="bg-secondary/30 border-border focus:border-primary resize-none transition-colors" />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-[0_0_60px_-8px_hsl(160_84%_45%/0.25)] transition-all duration-500"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Üzenet küldése
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;