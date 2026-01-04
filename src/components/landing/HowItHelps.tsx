import { motion } from "framer-motion";
import { Clock, Shield, Compass, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    deficit: "Time",
    title: "Reclaim your hours",
    description: "Stop spending time managing tasks and start spending it on meaningful work. Our system cuts through busywork so you can focus on what actually moves the needle.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    deficit: "Competence",
    title: "Feel capable with AI",
    description: "No more guessing how to prompt or organize AI conversations. Overwhelm Navigator guides you through structured workflows that make AI genuinely useful.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Shield,
    deficit: "Trust",
    title: "Know what to do next",
    description: "Wake up with clarity on your priorities. Our system surfaces the one thing that matters most right now, so you never wonder where to start.",
    color: "bg-signal-green/10 text-signal-green",
  },
  {
    icon: Compass,
    deficit: "Autonomy",
    title: "Work on your terms",
    description: "Design your work around your energy and values—not notifications. Choose how you engage instead of being reactive to every ping.",
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
            We address the four core deficits that modern work creates—giving you back 
            what you've lost to fragmented systems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-300 group"
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
