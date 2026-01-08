import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8788127264?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20reaching%20our%20dental%20clinic.%20How%20may%20we%20assist%20you%20with%20your%20dental%20appointment%20today%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse-gold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};
