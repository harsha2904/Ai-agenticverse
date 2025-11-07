import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSectionWithHoverEffects({ features }: FeaturesSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} totalFeatures={features.length} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
  totalFeatures,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  totalFeatures: number;
}) => {
  const isLastRow = index >= totalFeatures - (totalFeatures % 3 || 3);
  
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border/50",
        (index % 3 === 0) && "lg:border-l border-border/50",
        !isLastRow && "lg:border-b border-border/50"
      )}
    >
      {Math.floor(index / 3) % 2 === 0 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
