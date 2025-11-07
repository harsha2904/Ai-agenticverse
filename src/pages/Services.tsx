import { Share2, MessageSquare, Calendar, Bot, Sparkles, Phone, Users, MessageCircle } from "lucide-react";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Timeline } from "@/components/ui/timeline";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing Automation",
    subtitle: "One Click to Share Everywhere",
    description: "Streamline your entire social media strategy with one powerful click. From the AgenticVerse AI panel, you can instantly share posts—including descriptions, images, and YouTube links—across all major platforms like WhatsApp, Facebook, Twitter, Telegram, Instagram, and more. No manual effort, no team required. Automate your content distribution, engage your audience, and grow your brand—24/7—without employees or intervention. It's social media marketing, fully automated."
  },
  {
    icon: MessageSquare,
    title: "Smart Replies Via SMS and Email",
    subtitle: "Automated Communication",
    description: "Connect your AIagenticVerse bot with your favorite SMS and email platforms to automate replies effortlessly. Streamline communication, boost response speed, and enhance user experience—without lifting a finger."
  },
  {
    icon: Calendar,
    title: "AI Appointment Booking",
    subtitle: "Hassle-Free Scheduling, 24/7",
    description: "Simplify scheduling with AI-powered appointment systems. It manages bookings, responds to inquiries, and handles follow-ups around the clock—allowing your business to operate seamlessly without manual intervention."
  },
  {
    icon: Bot,
    title: "Website Chat Bots",
    subtitle: "Automated Customer Engagement",
    description: "Create customized conversational AI chatbots tailored for your website and apps—designed to attract new leads, engage visitors, and provide seamless customer support. All at an affordable price, these intelligent bots work 24/7 to enhance user experience and drive business growth."
  },
  {
    icon: Sparkles,
    title: "Smart Chat Agents",
    subtitle: "Revolutionizing Customer Conversations with AI",
    description: "Elevate your customer experience with intelligent AI chat agents that operate 24/7, delivering instant, personalized interactions. These agents are deeply trained on your specific business domain using advanced LLM networks like ChatGPT, DeepSeek, Gemini, and Grok. Beyond basic responses, they offer real-time decision-making capabilities—empowering your business with smart, autonomous customer engagement at scale."
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    subtitle: "Scalable, Human-Like Voice Automation",
    description: "Effortlessly engage thousands with advanced AI calling agents that deliver natural, human-like conversations in over 30 languages using 250+ lifelike voices—including custom voice cloning. From appointment scheduling and lead follow-ups to order tracking, reminders, and promotional campaigns, our voice agents handle it all with precision and personality. Say goodbye to missed calls and manual workloads—our system ensures smooth conversations, eliminates double bookings, and resolves complex queries with ease. Fully integrated with Twilio, Vonage, and your CRM, you can track call history, access recordings, and leverage the latest OpenAI LLM technology for deeper understanding and smarter interactions."
  },
  {
    icon: Users,
    title: "Generating Leads with AI",
    subtitle: "Smarter Outreach, Better Results",
    description: "AI is transforming lead generation by combining real-time engagement with intelligent automation. From chatbots that initiate conversations to tools that segment customers, score prospects, and run targeted SMS and email campaigns—AI helps businesses attract and nurture leads with precision. Leverage AI-powered engagement, customer segmentation, social media listening, and automated outreach to grow your pipeline faster and more efficiently."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp AI Agent",
    subtitle: "Seamless, Intelligent Customer Engagement",
    description: "Integrate your AI Chatbot with WhatsApp Business to deliver intelligent, real-time assistance directly within the world's most popular messaging app. Automate conversations, customize workflows, and provide 24/7 human-like interactions—enhancing customer engagement and streamlining communication like never before."
  }
];

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <NavBarWrapper />
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          style={{ y: y1, opacity }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl pointer-events-none"
          style={{ y: y2 }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              AI Workflow Automation <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that works 24/7 to scale your growth and eliminate repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Services Timeline with Progress Indicator */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <Timeline data={services.map(service => {
          const Icon = service.icon;
          return {
            title: service.title,
            content: (
              <div className="bg-card border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary text-lg font-bold mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          };
        })} />
      </motion.div>

      {/* Additional Feature Highlights */}
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
              Schedule Posts <span className="bg-gradient-primary bg-clip-text text-transparent">Across All Platforms</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Effortlessly manage your social media presence with the world's most reliable scheduler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold font-heading mb-4">
                Schedule Multiple Posts Per Minute
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Schedule up to multiple posts per minute across major platforms, including Facebook, Instagram, Twitter, and LinkedIn. Maximize your efficiency, maintain consistency, and keep your audience engaged—all with just a few clicks.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold font-heading mb-4">
                Plan Years in Advance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Plan your content years in advance and effortlessly manage your social media from a single, unified dashboard. Schedule or publish posts directly to Facebook, Instagram, Twitter, and LinkedIn, all in one place. Stay organized and in control with a clear calendar view.
              </p>
            </div>
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
