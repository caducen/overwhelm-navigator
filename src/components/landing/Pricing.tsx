import { motion } from "framer-motion";
import { Users, Rocket, CheckCircle } from "lucide-react";

const features = [
  "Full access to the Overwhelm Navigator system",
  "AI copilot for focus planning and reflection",
  "Priority support and onboarding",
  "Direct input on product roadmap and features",
  "Founding member pricing locked in for life",
  "Private community with other founding members",
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            LIMITED AVAILABILITY
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Founding Crew Program
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 font-medium">
            Join a small cohort of early adopters who will help shape the future of calm, focused productivity.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              y: -4,
              transition: { duration: 0.2 }
            }}
            className="p-8 rounded-2xl bg-card border-2 border-primary/20 shadow-elevated transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Limited to 50 founding members
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-1">Early Access</h3>
              <p className="text-sm text-muted-foreground mb-4">Founding member benefits</p>
              <p className="text-muted-foreground">
                Pricing details coming soon
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 text-left">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-signal-green flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a
              href="#early-access"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-accent text-accent-foreground font-semibold shadow-cta hover:brightness-105 transition-all"
            >
              Reserve Your Spot
            </motion.a>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Be part of building a better way to work. Your feedback will directly shape how we help knowledge workers reclaim focus.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
