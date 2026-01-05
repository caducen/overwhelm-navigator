import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email().max(255);

// Security: Valid source values to prevent manipulation
const VALID_SOURCES = ["hero", "pricing", "final-cta"];

interface EmailCaptureProps {
  source?: string;
}

const EmailCapture = ({ source = "hero" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [resending, setResending] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");
  const [lastResendTime, setLastResendTime] = useState<number>(0);
  const { toast } = useToast();

  // Rate limiting: 1 minute cooldown between resends
  const RESEND_COOLDOWN = 60 * 1000; // 1 minute

  const sendConfirmationEmail = async (emailAddress: string): Promise<boolean> => {
    try {
      const { error } = await supabase.functions.invoke("send-waitlist-confirmation", {
        body: { email: emailAddress },
      });
      
      if (error) {
        // Only log in development
        if (import.meta.env.DEV) {
          console.error("Failed to send confirmation email:", error);
        }
        return false;
      }
      return true;
    } catch (err) {
      // Only log in development
      if (import.meta.env.DEV) {
        console.error("Failed to send confirmation email:", err);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setStatus("loading");
    const validEmail = result.data;
    
    // Security: Validate and sanitize source parameter
    const sanitizedSource = VALID_SOURCES.includes(source || "") ? source : "hero";
    
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: validEmail, source: sanitizedSource });

    if (error) {
      if (error.code === "23505") {
        // Email already exists - still send confirmation email
        const emailSent = await sendConfirmationEmail(validEmail);
        setSuccessEmail(validEmail);
        setStatus("success");
        
        toast({
          title: "You're already on the list!",
          description: emailSent 
            ? "We just resent your confirmation email. Check spam/promotions too."
            : "We couldn't send the email right now. Try the resend button.",
        });
        return;
      }
      
      setStatus("idle");
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      return;
    }

    // New signup - send confirmation email
    const emailSent = await sendConfirmationEmail(validEmail);
    setSuccessEmail(validEmail);
    setStatus("success");
    
    toast({
      title: "You're on the list!",
      description: emailSent 
        ? "Check your inbox for a confirmation email."
        : "Signup saved, but we couldn't send the email. Try the resend button.",
    });
  };

  const handleResend = async () => {
    if (!successEmail || resending) return;
    
    // Rate limiting: Check cooldown
    const now = Date.now();
    const timeSinceLastResend = now - lastResendTime;
    
    if (timeSinceLastResend < RESEND_COOLDOWN) {
      const remainingSeconds = Math.ceil((RESEND_COOLDOWN - timeSinceLastResend) / 1000);
      toast({
        title: "Please wait",
        description: `You can resend in ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}.`,
        variant: "destructive",
      });
      return;
    }
    
    setResending(true);
    const emailSent = await sendConfirmationEmail(successEmail);
    setLastResendTime(Date.now());
    setResending(false);
    
    toast({
      title: emailSent ? "Email resent!" : "Couldn't resend email",
      description: emailSent 
        ? "Check your inbox (and spam/promotions folder)."
        : "Please try again in a few minutes.",
      variant: emailSent ? "default" : "destructive",
    });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-signal-green/10 border border-signal-green/30 w-full">
          <div className="w-8 h-8 rounded-full bg-signal-green flex items-center justify-center">
            <Check className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-medium text-foreground">Welcome aboard! Check your inbox.</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleResend}
          disabled={resending}
          className="text-muted-foreground hover:text-foreground"
        >
          {resending ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <RefreshCw className="w-4 h-4 mr-2" />
          )}
          Resend confirmation email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-12 text-base"
        disabled={status === "loading"}
      />
      <motion.div
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          type="submit"
          variant="hero"
          size="lg"
          disabled={status === "loading"}
          className="h-12 px-6 shadow-cta hover:shadow-lg transition-all duration-300"
        >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Join Early Access
            <ArrowRight className="w-5 h-5" />
          </>
        )}
        </Button>
      </motion.div>
    </form>
  );
};

export default EmailCapture;
