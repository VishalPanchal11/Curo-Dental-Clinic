import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ScanLine,
  Scan,
  HeartPulse,
  Bone,
  Crown,
  RefreshCcw,
  Clock,
  Sparkles,
  SmilePlus,
  Brackets,
  Baby,
  Scissors,
  Zap,
  MessageCircle,
} from "lucide-react";

const treatmentCategories = [
  {
    title: "Diagnostic & Digital Dentistry",
    items: [
      {
        icon: ScanLine,
        name: "Digital X-Ray",
        description: "Accurate diagnosis with minimal radiation",
      },
      {
        icon: Scan,
        name: "Intraoral Scanner",
        description: "Comfortable, precise digital impressions",
      },
    ],
  },
  {
    title: "Restorative & Advanced Care",
    items: [
      {
        icon: HeartPulse,
        name: "Root Canal Treatment",
        description: "Safe, efficient, and pain-free treatment",
      },
      {
        icon: Bone,
        name: "Dental Implants",
        description: "Permanent replacement for missing teeth",
      },
      {
        icon: Crown,
        name: "Crown & Bridge",
        description: "Restore strength, function, and appearance",
      },
      {
        icon: RefreshCcw,
        name: "Full Mouth Rehabilitation",
        description: "Complete oral restoration for complex cases",
      },
      {
        icon: Clock,
        name: "Single Visit Dentures",
        description: "Quick and comfortable tooth replacement",
      },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    items: [
      {
        icon: SmilePlus,
        name: "Digital Smile Designing",
        description: "Visualize your new smile before treatment",
      },
      {
        icon: Sparkles,
        name: "Teeth Whitening",
        description: "Brighten your smile safely and effectively",
      },
    ],
  },
  {
    title: "Orthodontics",
    items: [
      {
        icon: Brackets,
        name: "Braces & Aligners",
        description: "Correct teeth alignment for all age groups",
      },
    ],
  },
  {
    title: "Family & Specialized Care",
    items: [
      {
        icon: Baby,
        name: "Kids Dentistry",
        description: "Gentle and friendly dental care for children",
      },
      {
        icon: Scissors,
        name: "Wisdom Tooth Extraction",
        description: "Safe and minimally invasive procedures",
      },
      {
        icon: Zap,
        name: "Laser Dentistry",
        description: "Advanced, precise treatment with faster healing",
      },
    ],
  },
];

export const TreatmentsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="treatments"
      ref={sectionRef}
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-semibold text-gold-dark mb-4 tracking-wide uppercase">
            Comprehensive Care
          </span>
          <h2 className="section-title">World-Class Treatments</h2>
          <p className="section-subtitle mx-auto">
            From routine check-ups to complex full mouth rehabilitation,{" "}
            <br className="hidden md:block" />
            we offer a complete spectrum of dental services.
          </p>
        </motion.div>

        {/* Treatment Categories */}
        <div className="space-y-20">
          {treatmentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-gold rounded-full" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-gold-lg border border-transparent hover:border-gold/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gold-dark group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-inner">
                      <item.icon className="w-7 h-7" />
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-dark transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
            {/* Background shimmer */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to transform your smile?
              </h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                Book a consultation today and let our experts guide you to
                better oral health.
              </p>
              <a
                href="https://wa.me/8788127264?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20reaching%20our%20dental%20clinic.%20How%20may%20we%20assist%20you%20with%20your%20dental%20appointment%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Book Your Appointment
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
