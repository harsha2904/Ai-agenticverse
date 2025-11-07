import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={heroRef} className="relative">
      <BackgroundGradientAnimation>
        <motion.div 
          className="absolute z-50 inset-0 flex items-center justify-center"
          style={{ y, opacity }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Business Automation</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dominate Your Business with 90% Automation
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Powered by Smart AI Agents
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              These intelligent agents never sleep — they operate 24/7, tirelessly executing tasks, streamlining workflows, and driving growth. With continuous, real-time performance, Smart AI Agents help you scale your business efficiently and effortlessly, freeing up your time to focus on strategy, innovation, and expansion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="hero" size="lg" className="group">
                Get Your AI Demo Call in Just 5 Minutes
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </motion.div>

            {/* Description text */}
            <motion.p 
              className="mt-8 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Experience the power of AI first hand—book your personalized demo call in under 5 minutes. See how intelligent agents can automate tasks, boost productivity, and scale your business 24/7. No delays, no hassle—just a fast track to discovering how AI can transform your operations and unlock new growth opportunities. The future of your business starts now.
            </motion.p>
          </div>
        </motion.div>
      </BackgroundGradientAnimation>
    </div>
  );
};
