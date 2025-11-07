import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface Plan {
  id: string;
  name: string;
  price: number;
  original_price: number;
  billing_type: string;
  category: string;
}

export const Pricing = () => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await supabase.from("plans").select("*");
      if (data) setPlans(data);
    };
    fetchPlans();
  }, []);

  const handleAddToCart = async (planName: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    const plan = plans.find(p => p.name === planName);
    if (plan) {
      await addToCart(plan.id);
    }
  };
  const socialMediaPlans = [
    {
      name: "Basic Plan",
      originalPrice: "₹15,000",
      price: "₹7,500",
      tagline: "Perfect for solo creators, freelancers, and micro-businesses",
      features: [
        "Connect up to 3 platforms (Facebook, Instagram & X)",
        "Up to 30 scheduled posts/month",
        "Basic scheduling (date/time)",
        "One-click posting",
      ],
      highlighted: false,
    },
    {
      name: "Professional Plan",
      originalPrice: "₹25,000",
      price: "₹12,500",
      tagline: "For agencies and high-growth businesses.",
      features: [
        "Connect up to 7 platforms (FB, IG, LinkedIn, X, Telegram, Discord, YouTube & WhatsApp)",
        "Up to 200 scheduled posts/month",
        "AI-assisted posting calendar",
        "Advanced post scheduler and post preview",
        "Real-time alerts and unified inbox",
      ],
      highlighted: true,
      badge: "Best Value",
    },
    {
      name: "Business Plan",
      originalPrice: "₹40,000",
      price: "₹20,000",
      tagline: "For large-scale agencies and enterprises.",
      features: [
        "Connect up to 7 platforms (FB, IG, LinkedIn, X, Telegram, Discord, YouTube & WhatsApp)",
        "Up to 200 scheduled posts/month",
        "AI-assisted posting calendar",
        "Advanced post scheduler and post preview",
        "Real-time alerts and unified inbox",
      ],
      highlighted: false,
    },
  ];

  const websitePlans = [
    {
      name: "New Website",
      originalPrice: "₹40,000",
      price: "₹30,000",
      type: "One-time",
      description: "Full website creation with domain setup and deployment.",
      additionalInfo: [
        "Maintenance: ₹500/month per page",
        "Example: 5-page website = ₹2,500/month",
        "Note: Pricing subject to yearly change",
      ],
    },
    {
      name: "Existing Old Website",
      originalPrice: "₹3,000",
      price: "₹2,500",
      type: "Billed monthly",
      description: "For existing websites — updates and monthly maintenance.",
      additionalInfo: [
        "Cost: ₹2,500 per page",
        "Example: 5-page website = ₹12,500/month",
        "Note: Pricing subject to yearly change",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="pricing">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Social Media Plans Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            Monthly Plans
          </h2>
          <p className="text-muted-foreground text-lg">
            Book your free AI demo call in under 5 minutes to find your perfect automation plan.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-24"
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
          {socialMediaPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className={`relative backdrop-blur-glass border-2 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-2 h-full ${
                  plan.highlighted
                    ? "border-primary bg-card/80 shadow-glow"
                    : "border-border/50 bg-card/50"
                }`}
              >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-sm mt-2">{plan.tagline}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground line-through text-sm">{plan.originalPrice}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Billed monthly</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.highlighted ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => handleAddToCart(plan.name)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-On Section */}
        <div className="max-w-2xl mx-auto mb-24 animate-fade-in-up">
          <Card className="backdrop-blur-glass border-2 border-primary/30 bg-card/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-heading">Add-On</CardTitle>
                <Badge variant="outline" className="border-primary text-primary">
                  Optional
                </Badge>
              </div>
              <CardDescription className="text-base mt-2">
                WhatsApp automation is available as an optional service.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  ₹1,499
                </span>
                <span className="text-muted-foreground text-sm">Billed monthly</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Auto-send to broadcast lists and groups</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">30 automated messages/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Note: WhatsApp Business API Request is charged & borne by the client
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => handleAddToCart("WhatsApp Automation Add-On")}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Website Pricing Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            Website Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            AIagentic Services offers professional new website creation, domain setup, and AI-powered web pages
            (static & dynamic). Domain and cloud costs are borne by the client.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
          {websitePlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className="backdrop-blur-glass border-2 border-border/50 bg-card/50 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-2 h-full"
              >
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground line-through text-sm">{plan.originalPrice}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.type}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.additionalInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{info}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => handleAddToCart(plan.name)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
