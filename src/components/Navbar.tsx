import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Doctors", href: "#doctors" },
  { name: "Treatments", href: "#treatments" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-gray-100 shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Curo Advanced Dental Care"
            className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:08788127264"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            087881 27264
          </a>
          <a
            href="https://wa.me/8788127264?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20reaching%20our%20dental%20clinic.%20How%20may%20we%20assist%20you%20with%20your%20dental%20appointment%20today%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-800 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-gray-800 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex flex-col gap-4 w-full max-w-xs"
              >
                <a
                  href="https://wa.me/8788127264?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20reaching%20our%20dental%20clinic.%20How%20may%20we%20assist%20you%20with%20your%20dental%20appointment%20today%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:08788127264"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-gold"
                >
                  <Phone className="w-4 h-4" />
                  087881 27264
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
