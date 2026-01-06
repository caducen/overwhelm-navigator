import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#how-it-helps", label: "How It Helps" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
            <img 
              src="/favicon.png" 
              alt="Overwhelm Navigator" 
              className="w-full h-full object-contain brightness-0 invert"
              style={{
                filter: 'brightness(0) invert(1)'
              }}
            />
          </div>
          <span className="font-semibold text-lg text-foreground">Overwhelm Navigator</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a 
              key={link.href}
              href={link.href} 
              whileHover={{ y: -2 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a 
          href="#early-access"
          whileHover={{ scale: 1.05, x: 2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Join Early Access →
        </motion.a>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#early-access"
                onClick={handleNavClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mt-4 inline-flex items-center justify-center h-12 rounded-xl bg-accent text-accent-foreground font-semibold shadow-cta hover:brightness-105 transition-all"
              >
                Join Early Access →
              </motion.a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Header;
