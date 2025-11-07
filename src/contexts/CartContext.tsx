import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./AuthContext";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  type: "monthly" | "one-time" | "addon" | "website";
  category: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (planId: string) => Promise<void>;
  removeFromCart: (userPlanId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  // Fetch cart items from database
  const fetchCartItems = async () => {
    if (!user) {
      setItems([]);
      setLoading(false);
      return;
    }

    try {
      const { data: userPlans, error } = await supabase
        .from("user_plans")
        .select(`
          id,
          plans (
            id,
            name,
            description,
            price,
            original_price,
            billing_type,
            category
          )
        `)
        .eq("user_id", user.id)
        .eq("status", "in_cart");

      if (error) throw error;

      const cartItems: CartItem[] = (userPlans || []).map((up: any) => ({
        id: up.id,
        name: up.plans.name,
        price: `₹${up.plans.price.toLocaleString("en-IN")}`,
        originalPrice: `₹${up.plans.original_price.toLocaleString("en-IN")}`,
        type: up.plans.billing_type === "monthly" ? "monthly" : "one-time",
        category: up.plans.category,
      }));

      setItems(cartItems);
    } catch (error: any) {
      toast({
        title: "Error loading cart",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [user]);

  const addToCart = async (planId: string) => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to add items to cart.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("user_plans")
        .insert({
          user_id: user.id,
          plan_id: planId,
          status: "in_cart",
        });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already in cart",
            description: "This plan is already in your cart.",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Added to cart",
        description: "Plan has been added to your cart.",
      });

      await fetchCartItems();
    } catch (error: any) {
      toast({
        title: "Error adding to cart",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (userPlanId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("user_plans")
        .delete()
        .eq("id", userPlanId)
        .eq("user_id", user.id);

      if (error) throw error;

      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart.",
      });

      await fetchCartItems();
    } catch (error: any) {
      toast({
        title: "Error removing from cart",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("user_plans")
        .delete()
        .eq("user_id", user.id)
        .eq("status", "in_cart");

      if (error) throw error;

      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart.",
      });

      setItems([]);
    } catch (error: any) {
      toast({
        title: "Error clearing cart",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
