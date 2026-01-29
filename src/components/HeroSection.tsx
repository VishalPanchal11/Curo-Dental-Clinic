import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] max-md:min-h-[70vh] flex items-center bg-gradient-hero overflow-hidden pb-24 pt-28"
    >
      {/* Mobile Background Image */}
      <div
        className="absolute inset-x-0 top-24 h-[425px] z-0 md:hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        <img
          src="https://ik.imagekit.io/curo/Curo%20Website/clinic-inside.png"
          alt="Clinic Background"
          className="w-full h-full object-cover -mt-5"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>
      <div className="container-custom relative z-10 px-4 md:px-8 max-md:-mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 max-md:mt-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-[3.5rem] font-bold text-white md:text-gray-900 leading-[1.1] mb-6 tracking-tight max-md:pt-4"
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
              className="text-lg md:text-xl text-gray-100 md:text-gray-600 font-light mb-8 leading-relaxed max-md:mx-0"
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
                className="btn-primary text-lg px-6 py-2 shadow-gold hover:shadow-gold-lg max-md:border max-md:border-gray-300"
              >
                <MessageCircle className="w-5 h-5" />
                Book Your Visit
              </a>
              <a
                href="#doctors"
                className="btn-outline text-lg px-6 py-2 border-gray-400 md:border-gray-300 text-gray-900 md:text-gray-900 hover:border-gold hover:bg-gold/5 whitespace-nowrap"
              >
                Meet The Doctors
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 mt-8 pt-6 border-t border-gray-200 md:border-gray-100"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 md:text-gray-900">
                  500+
                </p>
                <p className="text-sm font-medium text-gray-600 md:text-gray-500 uppercase tracking-wide mt-1">
                  Implants
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 md:text-gray-900">
                  10+
                </p>
                <p className="text-sm font-medium text-gray-600 md:text-gray-500 uppercase tracking-wide mt-1">
                  Years Exp.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 md:text-gray-900">
                  5k+
                </p>
                <p className="text-sm font-medium text-gray-600 md:text-gray-500 uppercase tracking-wide mt-1">
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
            className="relative h-[450px] w-full hidden md:block"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
              <img
                src="https://ik.imagekit.io/curo/Curo%20Website/clinic-inside.png"
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
                className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xl p-1 pr-2 rounded-full"
              >
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-xl">
                    ✨
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      Premium Dental Care
                    </p>
                    <p className="text-xs text-gray-600">
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
