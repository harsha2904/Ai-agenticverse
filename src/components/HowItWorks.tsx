import { Link, Settings, Rocket, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Link,
    step: "01",
    title: "Business Discovery",
    description: "Business Discovery is the first step in our journey together. We begin by gaining a deep understanding of your unique business model, goals, and challenges. Through in-depth discovery sessions, we uncover high-impact areas where AI can be applied to automate repetitive tasks, reduce operational costs, and unlock new opportunities for scalable growth.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Customize AI Development",
    description: "Custom AI Development is at the heart of what we do. We don't believe in one-size-fits-all solutions. Instead, we design and build AI agents tailored specifically to your unique workflows—whether in sales, support, marketing, or operations. Our solutions ensure seamless integration with your existing platforms, delivering intelligent, personalized interactions that enhance efficiency and user experience.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deployment & Testing",
    description: "Deployment & Testing is where precision meets performance. We don't just launch your AI agents—we rigorously refine them. Through real-world deployment and data-driven testing, we ensure smooth functionality, minimal disruption, and optimal performance from day one. Every interaction is monitored and fine-tuned to deliver consistent, high-impact results.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Continuous Optimization",
    description: "Continuous Optimization ensures your AI stays ahead. Launching is just the beginning—our AI systems are built to continuously learn, adapt, and evolve with your business. As customer behavior, operations, and market trends shift, your AI agents become smarter, faster, and more efficient—delivering ever-improving results that drive long-term growth and agility.",
  },
];

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineScale = useTransform(scrollYProgress, [0, 2], [0, 1.9]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with AI automation in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {/* Diagonal Connecting Line */}
          <motion.div
            className="hidden lg:block absolute top-24 left-10 right-10 h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 origin-left"
            style={{
              scaleX: lineScale,
              opacity: lineOpacity,
              transformOrigin: "left center",
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center p-1">
                  {/* Step Number with spinning icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 relative z-10 shadow-glow group-hover:shadow-glow-lg group-hover:scale-110 transition-all duration-300">
                    <motion.div
                      className="w-10 h-10 text-primary-foreground"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>
                  </div>

                  {/* Step Label */}
                  <div className="text-primary text-sm font-bold tracking-wider mb-3 group-hover:scale-105 transition-transform duration-300">
                    STEP {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {step.description}
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
