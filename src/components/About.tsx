import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Tiszta kód",
    description: "Könnyen olvasható, karbantartható és skálázható kód írása."
  },
  {
    icon: Rocket,
    title: "Modern technológiák",
    description: "React, TypeScript, Node.js és a legújabb eszközök használata."
  },
  {
    icon: Users,
    title: "Csapatmunka",
    description: "Hatékony együttműködés agilis környezetben."
  },
  {
    icon: Zap,
    title: "Gyors tanulás",
    description: "Új technológiák és megoldások gyors elsajátítása."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Rólam
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Szenvedélyem a <span className="text-gradient-primary">fejlesztés</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Több éves tapasztalattal rendelkezem a webfejlesztés területén. 
            Célom olyan alkalmazások készítése, amelyek nemcsak jól működnek, 
            hanem kiváló felhasználói élményt is nyújtanak. Mindig törekszem 
            a legjobb gyakorlatok alkalmazására és a folyamatos fejlődésre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
