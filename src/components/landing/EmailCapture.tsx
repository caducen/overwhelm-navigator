import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email().max(255);

interface EmailCaptureProps {
  source?: string;
}

const EmailCapture = ({ source = "hero" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [resending, setResending] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");
  const { toast } = useToast();

  const sendConfirmationEmail = async (emailAddress: string): Promise<boolean> => {
    try {
      const { error } = await supabase.functions.invoke("send-waitlist-confirmation", {
        body: { email: emailAddress },
      });
      
      if (error) {
        console.error("Failed to send confirmation email:", error);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Failed to send confirmation email:", err);
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
    
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: validEmail, source });

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
    
    setResending(true);
    const emailSent = await sendConfirmationEmail(successEmail);
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
      <Button
        type="submit"
        variant="hero"
        size="lg"
        disabled={status === "loading"}
        className="h-12 px-6"
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
    </form>
  );
};

export default EmailCapture;
