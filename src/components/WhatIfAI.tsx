import { Globe, ShoppingCart, FileText, TrendingUp, Moon, Headphones } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Globe,
    name: "What If AI Could Redesign Your Website",
    description: "Imagine launching a stunning, high-converting website in a fraction of the time and cost. With AI-powered web design, that vision becomes reality. Our intelligent systems work around the clock—redesigning, optimizing, and customizing your site 10x faster and up to 90% cheaper than traditional methods.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ShoppingCart,
    name: "What If AI Could Sell Your Product or Service",
    description: "Imagine an AI-powered salesforce that never sleeps—pitching your product, answering objections, handling follow-ups, and closing deals all day, every day. With smart AI agents, your sales process becomes automated, personalized, and infinitely scalable.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: FileText,
    name: "What If AI Could Create Your Content",
    description: "Imagine never staring at a blank page again. With AI-powered content creation, you can generate high-quality blogs, social posts, emails, ads, and more—instantly. Trained on your brand voice and audience, AI delivers tailored, engaging content at scale, 24/7.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: TrendingUp,
    name: "What If AI Could Double Your Revenue",
    description: "Unlock exponential growth with AI-powered systems designed to optimize every aspect of your business—from lead generation and sales to customer support and retention. By automating repetitive tasks, AI helps you drive more conversions without added pressure.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Moon,
    name: "What If AI Could Run Your Business While You Sleep?",
    description: "Imagine waking up to leads captured, customers supported, orders processed, and content published—all while you rested. With AI-powered automation, your business runs 24/7 without manual effort.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Headphones,
    name: "What If AI Could Handle 90% of Your Customer Support?",
    description: "Imagine a support system that works 24/7, instantly resolving up to 90% of customer questions—without human intervention. With AI-powered support agents, your business can deliver fast, accurate, and personalized responses across chat, email, and voice.",
    href: "#contact",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  }
];

export const WhatIfAI = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            What If <span className="bg-gradient-primary bg-clip-text text-transparent">AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the endless possibilities of AI-powered automation
          </p>
        </div>
        
        <BentoGrid className="lg:grid-rows-3 animate-fade-in-up">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
