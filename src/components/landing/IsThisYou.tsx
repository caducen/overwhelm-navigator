import { motion } from "framer-motion";
import { 
  Layers, 
  MessageSquare, 
  ListTodo, 
  Brain, 
  Clock, 
  RefreshCw 
} from "lucide-react";

const symptoms = [
  {
    icon: Layers,
    title: "10+ browser tabs open at all times",
    description: "You've got research, docs, and half-finished tasks scattered everywhere.",
  },
  {
    icon: RefreshCw,
    title: "Tool-hopping between apps constantly",
    description: "Slack, Notion, email, calendar—you spend more time switching than doing.",
  },
  {
    icon: ListTodo,
    title: "A backlog that never shrinks",
    description: "Tasks pile up faster than you can clear them, and priorities are unclear.",
  },
  {
    icon: MessageSquare,
    title: "AI chats you never revisit",
    description: "You've had great conversations with ChatGPT that disappeared into the void.",
  },
  {
    icon: Brain,
    title: "End-of-day mental exhaustion",
    description: "You worked hard but can't name what you actually accomplished.",
  },
  {
    icon: Clock,
    title: "No time for deep, strategic work",
    description: "The important stuff keeps getting pushed to 'later' (which never comes).",
  },
];

const IsThisYou = () => {
  return (
    <section id="problem" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sound familiar?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            These aren't personal failures—they're symptoms of systems designed for interruption, not clarity.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="group p-6 rounded-xl bg-card border border-border shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <symptom.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base lg:text-lg text-foreground mb-2">
                {symptom.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {symptom.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-base lg:text-lg text-muted-foreground"
        >
          If you checked more than two, you're not alone—and there's a better way.
        </motion.p>
      </div>
    </section>
  );
};

export default IsThisYou;
