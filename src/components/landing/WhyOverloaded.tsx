import { motion } from "framer-motion";
import { AlertTriangle, Zap, Boxes, Bot } from "lucide-react";

const causes = [
  {
    icon: Zap,
    title: "Interruption-first design",
    description: "Slack pings, email notifications, calendar alerts—your tools are built to grab your attention, not protect it.",
  },
  {
    icon: Boxes,
    title: "Too many disconnected tools",
    description: "Each app promises productivity, but together they fragment your thinking across a dozen different contexts.",
  },
  {
    icon: Bot,
    title: "Unstructured AI use",
    description: "AI chatbots are powerful, but without a system, they create more threads to manage, not fewer.",
  },
];

const WhyOverloaded = () => {
  return (
    <section className="py-24 bg-mission-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">The Real Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why your brain feels overloaded
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Cognitive overload happens when your working memory is constantly full. 
              The issue isn't you—it's the systems you're forced to work within.
            </p>
          </div>
          
          <div className="space-y-6">
            {causes.map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  x: 4,
                  transition: { duration: 0.2 }
                }}
                className="flex gap-5 p-6 rounded-xl bg-background border border-border shadow-card transition-all duration-300 hover:shadow-elevated"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cause.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-3">
                    {cause.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {cause.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center"
          >
            <p className="text-base lg:text-lg text-foreground font-medium leading-relaxed">
              Research shows context-switching can cost you up to 40% of your productive time. Your brain isn't broken—it's being sabotaged by design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOverloaded;
