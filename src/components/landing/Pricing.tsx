import { motion } from "framer-motion";
import { Users, Rocket, CheckCircle } from "lucide-react";

const features = [
  "Full access to the Overwhelm Navigator system",
  "AI copilot for mission planning",
  "Priority support and onboarding",
  "Shape the product with your feedback",
  "Founding member pricing locked in",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Limited Availability</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Founding Crew Program
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Join a small cohort of early adopters who will help shape the future of calm, focused productivity.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border-2 border-primary/20 shadow-elevated"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Limited to 50 founding members
              </span>
            </div>
            
            <div className="mb-8">
              <p className="text-muted-foreground mb-2">Founding member pricing</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-foreground">Early Access</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Pricing details coming soon
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-signal-green flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#early-access"
              className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-accent text-accent-foreground font-semibold shadow-cta hover:brightness-105 transition-all"
            >
              Reserve Your Spot
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
