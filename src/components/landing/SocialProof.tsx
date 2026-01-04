import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I finally have a system that works with my brain, not against it.",
    author: "Early Beta Tester",
    role: "Product Manager",
  },
  {
    quote: "It's like having a copilot who actually understands cognitive load.",
    author: "Early Beta Tester",
    role: "Engineering Lead",
  },
  {
    quote: "First time in years I've ended a workday feeling clear, not scattered.",
    author: "Early Beta Tester",
    role: "Startup Founder",
  },
];

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
            From Early Testers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            What the founding crew is saying
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-background border border-border shadow-card"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium text-secondary-foreground">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
