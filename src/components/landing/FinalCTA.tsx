import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import EmailCapture from "./EmailCapture";

const FinalCTA = () => {
  return (
    <section id="early-access" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            whileHover={{ 
              rotate: 5,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-8 shadow-glow"
          >
            <Compass className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Start working with your brain, not against it.
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            Your work tools were designed for interruptions, not deep focus. Overwhelm Navigator is different—a guided system + AI copilot that cuts through the noise so you can finally do your best work without burning out.
          </p>
          
          <div className="max-w-md mx-auto">
            <EmailCapture />
            <p className="mt-4 text-sm text-muted-foreground">
              Join 200+ knowledge workers waiting for early access. No spam. Unsubscribe anytime. We respect your attention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
