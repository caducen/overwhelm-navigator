import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";

const statistics = [
  {
    number: 77,
    suffix: "%",
    description: "of knowledge workers report moderate to high digital burnout",
    source: "— Deloitte Digital Wellness Survey, 2024",
  },
  {
    number: 40,
    suffix: "%",
    description: "of productive time lost to context-switching and tool fragmentation",
    source: "— Cal Newport, Deep Work Research",
  },
  {
    number: 1.5,
    prefix: "$",
    suffix: "B",
    description: "projected market for cognitive wellness tools by 2028",
    source: "— Market Research Future",
  },
];

const StatCard = ({ stat, index }: { stat: typeof statistics[0]; index: number }) => {
  const { count, elementRef } = useCountUp(stat.number, {
    duration: 2000,
    startOnView: true,
    decimals: stat.number % 1 !== 0 ? 1 : 0,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="relative p-6 rounded-xl bg-background border border-border shadow-card text-center transition-all duration-300 hover:shadow-elevated"
    >
      <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">
        {stat.prefix && <span>{stat.prefix}</span>}
        {count}
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <p className="text-foreground mb-4 leading-relaxed">
        {stat.description}
      </p>
      <p className="text-xs text-muted-foreground">
        {stat.source}
      </p>
    </motion.div>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 bg-card border-y border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            THE RESEARCH IS CLEAR
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Why knowledge workers are struggling
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
