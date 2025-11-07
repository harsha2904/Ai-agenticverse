import { Bot, Workflow, FileText, BarChart3, Zap, Brain } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer inquiries 24/7 with natural language understanding.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline complex business processes and eliminate manual tasks with intelligent automation flows.",
  },
  {
    icon: FileText,
    title: "Content Generation",
    description: "Create high-quality content at scale using advanced AI models trained on your brand voice.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with AI-powered analytics and reporting tools.",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Connect all your tools seamlessly with smart integrations that work together automatically.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models that learn from your data and continuously improve performance over time.",
  },
];

export const Showcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements with Parallax */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: y2 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            What We <span className="bg-gradient-primary bg-clip-text text-transparent">Automate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From chatbots to complex workflows, we build AI solutions that transform how you work.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
