import { NavBarWrapper } from "@/components/NavBarWrapper";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[₹,]/g, ""));
      return total + price;
    }, 0);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBarWrapper />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
              <ShoppingCart className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
              Your Cart
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Review your selected plans and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <motion.section 
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          {items.length === 0 ? (
            <Card className="backdrop-blur-glass border-2 border-border/50 bg-card/50">
              <CardContent className="py-16 text-center">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-heading font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">
                  Browse our pricing plans and add items to your cart
                </p>
                <Button asChild>
                  <a href="/#pricing">View Pricing Plans</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="backdrop-blur-glass border-2 border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-heading mb-2">{item.name}</CardTitle>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                              {item.price}
                            </span>
                            <span className="text-muted-foreground line-through text-sm">
                              {item.originalPrice}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
                
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="backdrop-blur-glass border-2 border-primary/30 bg-card/50 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Items ({items.length})</span>
                        <span className="font-semibold">{formatPrice(calculateTotal())}</span>
                      </div>
                      <div className="border-t border-border/50 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="font-semibold text-lg">Total</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {formatPrice(calculateTotal())}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <Button variant="hero" size="lg" className="w-full">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <a href="/#pricing">Continue Shopping</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </motion.section>

      <WhatsAppWidget />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 mt-12">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 AI Agentic Verse. Built to automate, designed to scale.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
