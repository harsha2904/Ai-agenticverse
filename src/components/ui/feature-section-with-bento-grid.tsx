import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  products: Product[];
  title?: ReactNode;
  subtitle?: string;
  badge?: string;
}

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

export function FeatureSectionWithBentoGrid({ 
  products, 
  title = "Our Products",
  subtitle = "Comprehensive AI solutions designed to automate and scale your business.",
  badge = "Products"
}: FeatureSectionProps) {
  // Layout pattern: large, small, small, large repeated
  const getCardClassName = (index: number) => {
    const pattern = index % 4;
    if (pattern === 0 || pattern === 3) return "lg:col-span-2";
    return "";
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex gap-4 flex-col items-start">
            {badge && (
              <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold">
                {badge}
              </div>
            )}
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-white">
                {title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-gray-300 text-left">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  className={cn(
                    "bg-black border border-border/50 rounded-lg p-8 aspect-square lg:aspect-auto flex justify-between flex-col hover:border-primary/30 transition-all duration-300 group",
                    getCardClassName(index)
                  )}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                >
                  {/* Green Icon - spin on hover */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 group-hover:animate-spin">
                    <Icon className="w-6 h-6 text-green-500 stroke-[1.5]" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-white">{product.title}</h3>
                    <p className="text-gray-300 text-base leading-relaxed">{product.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
