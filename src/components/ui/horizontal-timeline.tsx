import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
}

interface HorizontalTimelineProps {
  items: TimelineItem[];
}

export const HorizontalTimeline = ({ items }: HorizontalTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive AI-powered automation solutions
          </p>
        </div>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            <div className="flex gap-8 min-w-max px-4">
              {items.map((item, index) => (
                <TimelineCard
                  key={index}
                  item={item}
                  index={index}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  scrollProgress: any;
}

const TimelineCard = ({ item, index, scrollProgress }: TimelineCardProps) => {
  const Icon = item.icon;
  
  const opacity = useTransform(
    scrollProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollProgress,
    [0, 0.2, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="relative flex-shrink-0 w-[380px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Timeline dot */}
      <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-glow z-10" />
      
      {/* Card */}
      <div className={cn(
        "mt-8 bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group h-full"
      )}>
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-primary text-sm font-semibold mb-3">
          {item.subtitle}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};
