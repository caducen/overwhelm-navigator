import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Compass className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Overwhelm Navigator</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Helping knowledge workers do their best work—without burning out.
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Overwhelm Navigator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
