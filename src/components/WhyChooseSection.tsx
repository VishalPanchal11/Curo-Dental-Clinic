import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Stethoscope,
  Building2,
  ShieldCheck,
  Scan,
  FlaskConical,
  BadgeCheck,
  Users,
  Heart,
} from "lucide-react";
import clinicOutside from "@/assets/clinic-outside.png";

const reasons = [
  {
    icon: Stethoscope,
    title: "Specialist-led care & surgical expertise",
    description: "Expert treatment by experienced surgical specialists",
  },
  {
    icon: Building2,
    title: "Spacious, hygienic, well-equipped clinic",
    description: "Modern facility maintaining the highest standards",
  },
  {
    icon: ShieldCheck,
    title: "Strict sterilization & infection control",
    description: "Complete safety with rigorous hygiene protocols",
  },
  {
    icon: Scan,
    title: "Digital dentistry",
    description: "Advanced diagnosis with in-house intraoral scanner",
  },
  {
    icon: FlaskConical,
    title: "Advanced labs",
    description: "Precise, long-lasting results with modern technology",
  },
  {
    icon: BadgeCheck,
    title: "Transparent & affordable pricing",
    description: "Ethical care with no hidden costs",
  },
];

export const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding bg-gradient-gold-subtle relative overflow-hidden"
    >

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-md:mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-semibold text-gold-dark mb-4 border border-white/20 shadow-sm uppercase tracking-wider">
            ⭐ Why Choose Us
          </span>
          <h2 className="section-title">
            Why Patients Trust
            <br className="md:hidden" /> Our Clinic
          </h2>
          <p className="section-subtitle mx-auto">
            Curo Advanced Dental Care is your one-stop destination for ethical,
            advanced, and reliable dental treatment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 md:gap-16 items-center">
          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5 order-2 md:order-1"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-5 max-md:p-3 rounded-2xl border border-transparent hover:border-gold/30 shadow-md hover:shadow-gold transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />

                <div className="flex items-start gap-4 relatie z-10">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-gold group-hover:text-white transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-gold-dark group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-gold-dark transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 md:-top-8 ">
              <img
                src={clinicOutside}
                alt="Curo Advanced Dental Care Clinic Exterior"
                className="w-full object-cover transform hover:scale-[102%] transition-transform duration-300"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-0 max-md:-bottom-8 left-[15%]  bg-white py-4 px-3 max-md:p-2 rounded-2xl shadow-xl z-20 max-w-xs border border-1 border-gold animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500`}
                    >
                      {i === 3 ? "+" : ""}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-gray-900">
                  1000+{" "}
                  <span className="font-normal text-gray-500">
                    Happy Patients
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center md:max-w-[80%] mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-gold/70 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gold/80" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-display">
            About Curo <br className="md:hidden" />Advanced Dental Care
          </h3>
          <p className="text-gray-600 text-md md:leading-relaxed max-md:text-justify">
            Choosing the right dental clinic matters. At Curo Advanced Dental Care, we provide treatment that is advanced, transparent, and patient-friendly.</p>          <p className="mt-3 text-gray-600 text-md md:leading-relaxed max-md:text-justify">

Led by experienced surgical specialists, our clinic offers complete dental and maxillofacial care under one roof. Every treatment is personalized, clearly explained, and priced with no hidden costs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
