import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import EmailCapture from "./EmailCapture";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Section - Left on desktop, Top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-background/50 backdrop-blur-sm border border-border/50">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto"
                aria-label="Overwhelm Navigator product demonstration"
              >
                <source src="/hero_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Text Section - Right on desktop, Bottom on mobile */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Pre-launch badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Coming Soon — Join the Founding Crew</span>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
            >
              Work with your brain, not against it.
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-6 text-balance font-medium"
            >
              A guided system + AI copilot that cuts through cognitive overload.
            </motion.p>
            
            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base lg:text-base text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10 text-balance leading-relaxed"
            >
              Your tools were designed for interruptions, not deep focus. Overwhelm Navigator is a guided system + AI copilot that cuts through the noise so you can do your best work—without burning out.
            </motion.p>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md mx-auto lg:mx-0"
            >
              <EmailCapture />
              <p className="mt-4 text-sm text-muted-foreground">
                Join 200+ professionals waiting for early access. No spam, ever.
              </p>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 lg:mt-20"
            >
              <motion.a
                href="#problem"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xs">Scroll to learn more</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
