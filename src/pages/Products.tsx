import { MessageSquare, Mail, Calendar, Bot, Sparkles, Users, Phone, Wrench, Globe, FileText, ShoppingBag } from "lucide-react";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { FeatureSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const products = [
  {
    icon: MessageSquare,
    title: "Social Media Marketing Automation",
    description: "Streamline your entire social media strategy with one powerful click. From scheduling posts across all major platforms to automated engagement and analytics."
  },
  {
    icon: Mail,
    title: "Smart Replies Via SMS and Email Messaging",
    description: "Connect your AI agent with your favorite SMS and email platforms to automate replies effortlessly. Streamline communication, boost response speed, and enhance user experience—without lifting a finger."
  },
  {
    icon: Calendar,
    title: "AI Appointment Booking",
    description: "Simplify scheduling with AI-powered appointment systems. Manage bookings, respond to inquiries, and handle follow-ups around the clock—allowing your business to operate seamlessly 24/7."
  },
  {
    icon: Bot,
    title: "Website Chat Bots",
    description: "Automated Chatbots to Acquire, Engage, and Support Your Customers. Create customized conversational AI chatbots tailored for your website and apps—designed to attract new leads, engage visitors, and provide seamless customer support."
  },
  {
    icon: Sparkles,
    title: "Smart Chat Agents",
    description: "Revolutionizing Customer Conversations with AI. Elevate your customer experience with intelligent AI chat agents that operate 24/7, delivering instant, personalized interactions trained on your specific business domain."
  },
  {
    icon: Users,
    title: "Generating Leads with AI",
    description: "AI is transforming lead generation by combining real-time engagement with intelligent automation. From chatbots that initiate conversations to tools that segment customers and run targeted campaigns."
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    description: "Scalable, Human-Like Voice Automation. Effortlessly engage thousands with advanced AI calling agents that deliver natural, human-like conversations in over 30 languages using 250+ lifelike voices."
  },
  {
    icon: Wrench,
    title: "AI Services",
    description: "Comprehensive AI solutions tailored to your business needs. From workflow automation to intelligent decision-making systems."
  },
  {
    icon: Globe,
    title: "Website Templates",
    description: "Pre-built, professional website templates designed for quick deployment and customization to match your brand."
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Full website creation with domain setup and deployment. AI-powered web design that's 10x faster and 90% cheaper than traditional methods."
  },
  {
    icon: FileText,
    title: "Content Creation",
    description: "AI-powered content generation for blogs, social posts, emails, and ads. Create high-quality, on-brand content instantly, saving time and fueling consistent growth."
  },
  {
    icon: ShoppingBag,
    title: "AI Product Services",
    description: "Complete AI product development and integration services to help you build, deploy, and scale intelligent solutions for your business."
  }
];

const businessDomains = [
  "General",
  "Education",
  "Travel",
  "Finance",
  "Real Estate",
  "Fitness",
  "Software",
  "HR",
  "E-Commerce",
  "Hotels & Restaurants",
  "Entertainment",
  "Health Care",
  "Automotive",
  "Logistics",
  "Manufacturing"
];

export default function Products() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={pageRef} className="min-h-screen bg-background relative">
      <NavBarWrapper />
      
      {/* Parallax Background Elements */}
      <motion.div 
        className="fixed top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"
        style={{ y: y1 }}
      />
      <motion.div 
        className="fixed bottom-20 left-10 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl pointer-events-none z-0"
        style={{ y: y2 }}
      />
      
      {/* Products Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <FeatureSectionWithBentoGrid 
          products={products}
          title={<>Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span></>}
          subtitle="Comprehensive AI solutions designed to automate, optimize, and scale your business operations across every industry."
          badge="AI Solutions"
        />
      </motion.div>

      {/* Business Domains Section */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Business <span className="bg-gradient-primary bg-clip-text text-transparent">Domains</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve businesses across diverse industries with tailored AI solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {businessDomains.map((domain, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <p className="font-semibold text-foreground">{domain}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <WhatsAppWidget />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 AI Agentic Verse. Built to automate, designed to scale.</p>
        </div>
      </footer>
    </div>
  );
}
