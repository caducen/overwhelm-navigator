import { motion } from "framer-motion";
import { Clock, Compass, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    deficit: "TIME",
    title: "Reclaim your hours",
    description: "Stop managing tasks. Start doing them. Our system eliminates the meta-work of organizing AI chats and switching between tools—so you can focus on work that actually moves the needle.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    deficit: "COMPETENCE",
    title: "Master AI without the guesswork",
    description: "No more staring at blank prompts. Pre-built workflows turn AI into a predictable partner, not another thing to figure out. Feel capable, not overwhelmed.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Compass,
    deficit: "AUTONOMY",
    title: "Design your work around your energy",
    description: "Choose how you engage based on your capacity—not notification urgency. Deep focus when you have it, light tasks when you don't. You control your workday, not the other way around.",
    color: "bg-primary/10 text-primary",
  },
];

const HowItHelps = () => {
  return (
    <section id="how-it-helps" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Overwhelm Navigator helps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We address the three core deficits that modern work creates—giving you back what you've lost to fragmented systems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-card transition-all duration-300 group hover:shadow-elevated"
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {benefit.deficit}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
