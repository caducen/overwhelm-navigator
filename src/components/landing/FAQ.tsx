import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this another productivity app?",
    answer: "No. Most productivity apps add more to your plate—more features, more notifications, more things to manage. Overwhelm Navigator is a system designed to reduce cognitive load, not increase it. We focus on clarity and completion, not endless task accumulation.",
  },
  {
    question: "Do I need to be technical to use this?",
    answer: "Not at all. If you can use email and basic apps, you can use Overwhelm Navigator. Our AI copilot guides you through everything with plain language—no prompt engineering required, no technical setup.",
  },
  {
    question: "How is this different from a generic AI chatbot?",
    answer: "AI chatbots are powerful but create new problems: scattered conversations, no structure, and insights that disappear. Overwhelm Navigator provides a complete system—capture, organize, prioritize, and execute—with AI woven throughout. Your AI copilot remembers context and guides you through proven workflows.",
  },
  {
    question: "I already use Notion/Todoist/Asana. Will this replace them?",
    answer: "Overwhelm Navigator is designed to be your command center—a layer that brings clarity to your existing tools. For many users, it may simplify their stack. We'll help you integrate what works and let go of what doesn't.",
  },
  {
    question: "What if I'm already burned out?",
    answer: "That's exactly who this is for. We've designed Overwhelm Navigator with recovery in mind. The system helps you identify what's truly essential, create sustainable rhythms, and rebuild your sense of competence one small win at a time.",
  },
  {
    question: "When will it be available?",
    answer: "We're launching with a small founding cohort in the coming weeks. Early access members will help shape the product and lock in founding member pricing. Join the waitlist to be first in line.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-mission-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Overwhelm Navigator.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
