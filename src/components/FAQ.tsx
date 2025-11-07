import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What platforms do you support for social media automation?",
    answer: "We support Facebook, Instagram, LinkedIn, X (Twitter), Telegram, Discord, YouTube, and WhatsApp. The number of platforms depends on your chosen plan."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "How does the AI-assisted posting calendar work?",
    answer: "Our AI analyzes your audience engagement patterns and suggests optimal posting times, content types, and frequencies to maximize your reach and engagement."
  },
  {
    question: "What's included in website maintenance?",
    answer: "Website maintenance includes regular updates, security patches, content updates, and technical support. The cost is calculated per page per month."
  },
  {
    question: "Do I need to pay for domain and hosting separately?",
    answer: "Yes, domain registration and cloud hosting costs are borne by the client. We handle the setup and configuration as part of our service."
  },
  {
    question: "How does WhatsApp automation work?",
    answer: "WhatsApp automation is available as an add-on service. It allows you to auto-send messages to broadcast lists and groups. Note that WhatsApp Business API costs are borne by the client."
  },
  {
    question: "What happens if I exceed my monthly post limit?",
    answer: "If you approach your limit, we'll notify you. You can upgrade your plan or purchase additional posts as needed."
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for social media plans. For website services, all costs are included in the quoted one-time or monthly pricing."
  }
];

export const FAQ = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our services
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
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
