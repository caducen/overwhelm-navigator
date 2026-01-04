import { motion } from "framer-motion";
import { MapPin, Crosshair, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Map your missions",
    description: "Capture everything on your plate—projects, commitments, open loops—into one clear command center. No more mental juggling.",
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Design focused sorties",
    description: "Work with your AI copilot to break vague intentions into actionable missions. Each sortie is designed for deep focus, not endless context-switching.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Review and adapt",
    description: "Regular briefings help you course-correct, celebrate wins, and ensure you're always flying toward what truly matters.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card border-y border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple three-step flow that transforms chaos into clarity.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`p-8 rounded-2xl bg-background border border-border shadow-card ${
                      index % 2 === 1 ? "md:ml-auto" : ""
                    }`}>
                      <span className="text-5xl font-bold text-primary/20 mb-4 block">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary shadow-glow flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Empty space for layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-signal-green/10 border border-signal-green/30">
            <ArrowRight className="w-5 h-5 text-signal-green" />
            <span className="font-medium text-foreground">
              Result: Sustainable high performance without burnout
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
