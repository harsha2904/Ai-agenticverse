import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { WhatIfAI } from "@/components/WhatIfAI";
import { AutomationTimeline } from "@/components/AutomationTimeline";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Different scroll speeds for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen" ref={containerRef}>
      <NavBarWrapper />
      
      {/* Parallax Background Elements */}
      <motion.div 
        className="fixed top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"
        style={{ y: y1, opacity }}
      />
      <motion.div 
        className="fixed top-40 right-20 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl pointer-events-none z-0"
        style={{ y: y2, opacity }}
      />
      <motion.div 
        className="fixed bottom-20 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none z-0"
        style={{ y: y3 }}
      />
      
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >

        <WhatIfAI />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <AutomationTimeline />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <HowItWorks />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >

     
        <Pricing />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <FAQ />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <Contact />
      </motion.div>
      <WhatsAppWidget />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 AI Agentic Verse. Built to automate, designed to scale.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
