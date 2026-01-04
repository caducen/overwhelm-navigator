import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus("success");
    toast({
      title: "You're on the list!",
      description: "We'll notify you when early access opens.",
    });
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-signal-green/10 border border-signal-green/30">
        <div className="w-8 h-8 rounded-full bg-signal-green flex items-center justify-center">
          <Check className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-medium text-foreground">Welcome aboard! Check your inbox.</span>
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
