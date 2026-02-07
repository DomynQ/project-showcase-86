import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "email@example.com",
    href: "mailto:email@example.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 30 123 4567",
    href: "tel:+36301234567",
  },
  {
    icon: MapPin,
    label: "Helyszín",
    value: "Budapest, Magyarország",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            04 — Kapcsolat
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Dolgozzunk <span className="text-gradient-primary">együtt.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Van egy projektötleted? Keress meg, és beszéljük meg a részleteket.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl">
          {/* Contact info */}
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
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <info.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Vagy találj meg itt:</p>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn"].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              className="space-y-4 p-6 md:p-8 rounded-xl border border-border bg-card"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Név"
                  className="bg-secondary/50 border-border focus:border-primary transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-secondary/50 border-border focus:border-primary transition-colors"
                />
              </div>
              <Input
                placeholder="Tárgy"
                className="bg-secondary/50 border-border focus:border-primary transition-colors"
              />
              <Textarea
                placeholder="Üzenet..."
                rows={5}
                className="bg-secondary/50 border-border focus:border-primary resize-none transition-colors"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Üzenet küldése
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;