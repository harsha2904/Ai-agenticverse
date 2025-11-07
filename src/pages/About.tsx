import { Sparkles, Target, Zap, Shield } from "lucide-react";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { GlareCard } from "@/components/ui/glare-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const founders = [
  {
    name: "Gaddi Yashank",
    role: "Visionary Entrepreneur & Founder",
    description: "A visionary entrepreneur and AI enthusiast, technocrat driven by a passion for transforming businesses through intelligent automation. As the founder of AI Agentic Verse, he is on a mission to revolutionize the way companies operate in the AI era, empowering them to scale faster, work smarter, and embrace the future of automation."
  },
  {
    name: "Gaddi Yahgenesh",
    role: "Founder & Technical Innovator",
    description: "Founder and technical innovator, and AI architect with deep expertise in cutting-edge technologies. He leads the technical vision at AI Agentic Verse, driving the development and delivery of robust, scalable AI solutions that power the future of business automation."
  },
  {
    name: "Vamshi Krishna",
    role: "Futuristic Entrepreneur & Co-Founder",
    description: "A visionary entrepreneur and pioneering co-founder of AI Agentic Verse. With expertise in artificial intelligence, automation, and business analysis, he spearheads initiatives that seamlessly connect emerging technologies with practical business applications. At AI Agentic Verse, Vamshi drives innovation in AI agent development, empowering enterprises to optimize workflows, boost productivity, and develop scalable, intelligent solutions. His leadership helps organizations future-proof their operations, ensuring they stay ahead in the rapidly evolving technological landscape."
  }
];

const coreServices = [
  {
    icon: Sparkles,
    title: "AI-Powered Messaging & Smart Replies",
    description: "Automate SMS & email communication with instant, intelligent responses."
  },
  {
    icon: Target,
    title: "AI Appointment Booking Systems",
    description: "Hassle-free scheduling and follow-ups, available round the clock."
  },
  {
    icon: Zap,
    title: "Smart Website Chatbots",
    description: "Engage visitors, capture leads, and provide instant support."
  },
  {
    icon: Shield,
    title: "AI Workflow Automation",
    description: "Streamline daily tasks and operations across platforms using AI agents."
  }
];

const uniqueFeatures = [
  "Focused on Agentic AI — autonomous AI systems that work intelligently and independently",
  "Ready-to-deploy solutions for industries such as Real estate, Education, Healthcare, and more",
  "Fast implementation with custom integrations for your business",
  "Committed to future-ready automation with human-like interaction and personalization"
];

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <NavBarWrapper />
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          style={{ y: y1, opacity }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl pointer-events-none"
          style={{ y: y2 }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              AI Agentic Verse is a forward-thinking AI automation agency dedicated to transforming businesses through intelligent, agent-based solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
              Company <span className="bg-gradient-primary bg-clip-text text-transparent">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in creating powerful AI agents that automate workflows, enhance customer interactions, and unlock new levels of operational efficiency. At AI Agentic Verse, we harness cutting-edge technologies such as AI-powered chatbots, smart appointment systems, lead generation tools, and seamless omni-channel messaging (via SMS, email, and websites). Our solutions are designed to empower businesses to scale faster, operate smarter, and deliver exceptional customer experiences—24/7.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The visionaries behind AI Agentic Verse
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
                  visible: { opacity: 1, scale: 1, rotateY: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <GlareCard className="flex flex-col items-start justify-end p-10 overflow-auto">
                <Avatar className="size-16 mb-4 border-2 border-primary/20">
                  <AvatarImage src="" alt={founder.name} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-bold">
                    {founder.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">
                  {founder.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {founder.description}
                </p>
              </GlareCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Core Services */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Our Core <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary mb-6 shadow-glow">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* What Makes Us Unique */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              What Makes Us <span className="bg-gradient-primary bg-clip-text text-transparent">Unique</span>
            </h2>
          </div>

          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground text-lg leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground italic">
              At AI Agentic Verse, we don't just automate processes—we build AI agents that work as reliable, intelligent extensions of your business.
            </p>
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
