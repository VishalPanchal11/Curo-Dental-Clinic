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
    title: "Best-in-class Surgical Expertise",
    description: "Specialist-led care with advanced techniques",
  },
  {
    icon: Building2,
    title: "Well-equipped & Hygienic Clinic",
    description: "Spacious, modern, and comfortable environment",
  },
  {
    icon: ShieldCheck,
    title: "Strict Sterilization Protocols",
    description: "Complete infection control for your safety",
  },
  {
    icon: Scan,
    title: "In-house Intraoral Scanner",
    description: "Digitalized dentistry for precise diagnosis and treatment",
  },
  {
    icon: FlaskConical,
    title: "Advanced Dental Labs",
    description: "Precise prosthetic fitting and long-lasting results",
  },
  {
    icon: BadgeCheck,
    title: "Transparent & Affordable",
    description: "No hidden charges, clear pricing always",
  },
  {
    icon: Users,
    title: "One-to-One Communication",
    description: "Complete clarity with direct doctor interaction",
  },
  {
    icon: Heart,
    title: "Calm & Comfortable Care",
    description: "Gentle approach for anxious patients",
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
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-brand rounded-full blur-3xl opacity-5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-semibold text-gold-dark mb-4 border border-white/20 shadow-sm uppercase tracking-wider">
            ⭐ Why Choose Us
          </span>
          <h2 className="section-title">Why Patients Trust Our Clinic</h2>
          <p className="section-subtitle mx-auto">
            Curo Advanced Dental Care is your one-stop destination for ethical,
            advanced, and reliable dental treatment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-transparent hover:border-gold/30 shadow-sm hover:shadow-gold-lg transition-all duration-300 group relative overflow-hidden"
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
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative z-10">
              <img
                src={clinicOutside}
                alt="Curo Advanced Dental Care Clinic Exterior"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-50 animate-fade-in">
              <div className="flex items-center gap-4 mb-2">
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
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gold w-[90%]" />
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gold/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-display">
            About Curo Advanced Dental Care
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Choosing the right dental clinic is an important decision for you
            and your family. At{" "}
            <span className="font-semibold text-gold-dark">
              Curo Advanced Dental Care
            </span>
            , we focus on providing dental treatment that is not only
            accessible, but also advanced, transparent, and patient-friendly.
            Our clinic is led by highly experienced surgical experts, offering
            comprehensive dental and maxillofacial care under one roof.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
