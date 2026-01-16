import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import clinicInside from "@/assets/clinic-inside.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden pt-28 pb-24 md:pb-16 max-md:pt-28"
    >
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-4"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-sm font-semibold text-gold-dark tracking-wide uppercase">
                Because Every Smile Matters
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight max-md:pt-4"
            >
              Gentle, Advanced & <br className="hidden lg:block" />
              <span className="text-gradient-gold relative">
                Trusted
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-gold opacity-30"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00025 6.99997C69.5002 -0.500028 126 -2.49997 198 3.99998"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              Dental Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 font-light mb-6 leading-relaxed max-md:mx-4"
            >
              Experience world-class dentistry with a compassionate touch. We
              combine state-of-the-art technology with personalized care to
              create healthy, beautiful smiles that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-md:mx-16"
            >
              <a
                href="https://wa.me/918788127264?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-6 py-2 shadow-gold hover:shadow-gold-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Book Your Visit
              </a>
              <a
                href="#doctors"
                className="btn-outline text-lg px-6 py-2 border-gray-300 hover:border-gold hover:bg-gold/5"
              >
                Meet The Doctors
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 mt-6 mx-6 pt-4 border-t border-gray-100"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  500+
                </p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">
                  Implants
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  10+
                </p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">
                  Years Exp.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  5k+
                </p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">
                  Patients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[450px] w-full"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
              <img
                src={clinicInside}
                alt="Modern Dental Clinic Interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 md:left-20 md:right-20 bg-white/95 backdrop-blur-xl p-2 rounded-full"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-2xl">
                    ✨
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-md">
                      Premium Dental Care
                    </p>
                    <p className="text-sm text-gray-600">
                      State-of-the-art facility in Navi Mumbai
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 z-20 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/50 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20 cursor-pointer hover:bg-white/80 transition-colors"
          onClick={() =>
            document
              .getElementById("doctors")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDown className="w-6 h-6 text-gold-dark" />
        </motion.div>
      </motion.div>
    </section>
  );
};
