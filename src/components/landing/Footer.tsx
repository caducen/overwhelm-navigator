const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
              <img 
                src="/favicon.png" 
                alt="Overwhelm Navigator" 
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <span className="font-semibold text-foreground">Overwhelm Navigator</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Helping knowledge workers do their best work—without burning out.
          </p>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Overwhelm Navigator. All rights reserved.
          </p>
        </div>
        
        {/* Technical Credibility Signal */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground/70 text-center">
            Built with TypeScript, React, and modern AI frameworks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
