import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import clinicInside from "@/assets/clinic-inside.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px]" />
      </div>

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
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-sm font-semibold text-gold-dark tracking-wide uppercase">
                Now Accepting New Patients
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
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
              className="text-lg md:text-xl text-gray-600 font-light mb-8 leading-relaxed"
            >
              Experience world-class dentistry with a compassionate touch. We
              combine state-of-the-art technology with personalized care to
              create healthy, beautiful smiles that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/8788127264"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 shadow-gold hover:shadow-gold-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Book Your Visit
              </a>
              <a
                href="#doctors"
                className="btn-outline text-lg px-8 py-4 border-gray-300 hover:border-gold hover:bg-gold/5"
              >
                Meet The Doctors
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-100"
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
            className="relative lg:h-[600px] w-full"
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
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-2xl">
                    ✨
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      Premium Dental Care
                    </p>
                    <p className="text-sm text-gray-600">
                      State-of-the-art facility in Navi Mumbai
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative blob behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
