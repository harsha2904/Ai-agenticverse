import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahmarketing",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Repeatless AI transformed our workflow. We're now automating processes that used to take hours. The ROI has been incredible and our team productivity has doubled."
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaeltech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The AI automation solutions are top-notch. Our team can now focus on strategy while the bots handle the repetitive work seamlessly across all platforms."
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyops",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "From chatbots to content generation, everything just works. The support team is responsive and the platform is intuitive. Best investment we made this year."
  },
  {
    author: {
      name: "David Park",
      handle: "@davidgrowth",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The social media automation has saved us 20+ hours weekly. Our engagement rates are up 150% since we started using their AI-powered scheduling."
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyacreative",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Building our website with Repeatless AI was a breeze. The AI-powered design suggestions and quick deployment made it perfect for our startup launch."
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jamesbiz",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "WhatsApp automation has revolutionized our customer communication. We're reaching thousands of customers effortlessly while maintaining a personal touch."
  }
];

export const Testimonials = () => {
  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="See what our clients say about their automation journey"
      testimonials={testimonials}
    />
  );
};
