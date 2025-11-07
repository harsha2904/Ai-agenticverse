import { Home, ShoppingBag, Wrench, User, ShoppingCart, LogIn, LogOut } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

export function NavBarWrapper() {
  const { items } = useCart()
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [hoveredButton, setHoveredButton] = useState<"login" | "logout" | null>(null)

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Products", url: "/products", icon: ShoppingBag },
    { name: "Services", url: "/services", icon: Wrench },
    { name: "About", url: "/about", icon: User },
    { 
      name: "Cart", 
      url: "/cart", 
      icon: ShoppingCart, 
      badge: items.length > 0 ? items.length : undefined 
    },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
      <div className="fixed top-0 left-0 w-full z-40 ">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Logo/Brand */}
          <div 
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 cursor-pointer group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            {/* <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:block">
              AIAgenticVerse
            </span> */}
          </div>

          {/* Center: Nav items */}
          <div className="flex-1 flex justify-center pl-[80px]">
            <NavBar items={navItems} className="!static !transform-none !mb-0 !pt-0" />
          </div>

          {/* Right: Auth buttons */}
          <div className="flex items-center space-x-4 relative h-full flex-shrink-0">
            {user ? (
              <div className="relative h-full flex items-center">
                {hoveredButton === "logout" && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute left-0 -translate-x-1/2 bottom-4 w-28 h-10 bg-primary/5 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-md blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-sm blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                  onMouseEnter={() => setHoveredButton("logout")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border-border/40 hover:bg-background/70 hover:border-primary/40 transition-all relative px-4 py-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="relative h-full flex items-center">
                {hoveredButton === "login" && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 h-10 bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-md blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-sm blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/auth")}
                  onMouseEnter={() => setHoveredButton("login")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border-border/40 hover:bg-background/70 hover:border-primary/40 transition-all relative px-4 py-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}