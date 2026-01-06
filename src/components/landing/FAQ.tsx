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
    answer: "No. We're not trying to replace your task manager. Overwhelm Navigator is a guided system that sits above your tools—helping you decide what to work on, when, and how. Think of it as a thinking partner that reduces decision fatigue, not another app to manage.",
  },
  {
    question: "Do I need to be technical to use this?",
    answer: "Not at all. If you can send an email, you can use Overwhelm Navigator. The system guides you through structured workflows—you don't need to know how to 'prompt engineer' or configure complex setups.",
  },
  {
    question: "How is this different from a generic AI chatbot?",
    answer: "Generic chatbots are unstructured—you're on your own to figure out how to use them effectively. Overwhelm Navigator provides pre-built workflows for common knowledge work challenges: breaking down projects, prioritizing tasks, reflecting on progress. The AI is embedded in a system designed specifically for focus and clarity.",
  },
  {
    question: "I already use Notion/Todoist/Asana. Will this replace them?",
    answer: "No, and that's the point. Overwhelm Navigator doesn't try to be another tool you have to migrate to. Instead, it helps you make better decisions about what belongs in those tools and what doesn't. Think of it as a layer of clarity on top of your existing stack.",
  },
  {
    question: "What if I'm already burned out?",
    answer: "That's exactly who we built this for. Overwhelm Navigator is designed to meet you where you are—whether you're drowning in work or just trying to maintain sustainable productivity. The system adapts to your energy levels and helps you make progress without pushing yourself further into burnout.",
  },
  {
    question: "When will it be available?",
    answer: "We're launching with a small founding crew (limited to 50 members) soon. Early access members will be the first to experience the system and will have direct input on how we evolve it.",
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
          <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-xl px-6 shadow-sm transition-all duration-300 hover:shadow-card hover:border-primary/20"
                >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
