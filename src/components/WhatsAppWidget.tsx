import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your AI automation services.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-[18px] right-48 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="bg-card border-2 border-primary/30 rounded-2xl shadow-glow-lg p-6 max-w-sm animate-fade-in backdrop-blur-glass">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Chat with us</h3>
                  <p className="text-xs text-muted-foreground">Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about our AI automation services? We're here to help!
            </p>
            
            <Button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat on WhatsApp
            </Button>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-16 h-[60px] rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-glow-lg hover:scale-110 transition-transform"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </Button>
      </div>
    </>
  );
};
