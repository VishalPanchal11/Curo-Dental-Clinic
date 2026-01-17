import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const treatmentCategories = [
  {
    title: "Diagnostic & Digital Dentistry",
    items: [
      {
        image: "./src/assets/treatments/Digital X-ray.png",
        name: "Digital X-Ray",
      },
      {
        image: "./src/assets/treatments/Intraoral Scanner.png",
        name: "Intraoral Scanner",
      },
    ],
  },
  {
    title: "Restorative & Advanced Care",
    items: [
      {
        image: "./src/assets/treatments/Root Canal Treatment.png",
        name: "Root Canal Treatment",
      },
      {
        image: "./src/assets/treatments/Dental Implants.png",
        name: "Dental Implants",
      },
      {
        image: "./src/assets/treatments/Crown & Bridge Treatment .png",
        name: "Crown & Bridge",
      },
      {
        image: "./src/assets/treatments/Full Mouth Rehabilitation .png",
        name: "Full Mouth Rehabilitation",
      },
      {
        image: "./src/assets/treatments/Single Visit Dentures.png",
        name: "Single Visit Dentures",
      },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    items: [
      {
        image: "./src/assets/treatments/Digital Smile Design.png",
        name: "Digital Smile Designing",
      },
      {
        image: "./src/assets/treatments/Teeth Whitening.png",
        name: "Teeth Whitening",
      },
    ],
  },
  {
    title: "Orthodontics",
    items: [
      {
        image: "./src/assets/treatments/Braces & Aligners.png",
        name: "Braces & Aligners",
      },
    ],
  },
  {
    title: "Family & Specialized Care",
    items: [
      {
        image: "./src/assets/treatments/Kids Dentistry.png",
        name: "Kids Dentistry",
      },
      {
        image: "./src/assets/treatments/Wisdom Tooth Extraction.png",
        name: "Wisdom Tooth Extraction",
      },
      {
        image: "./src/assets/treatments/Laser Dentistry.png",
        name: "Laser Dentistry",
      },
    ],
  },
];

const TreatmentCard = ({ item, index, isInView, categoryIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.1,
        delay: categoryIndex * 0.1 + index * 0.05,
      }}
      whileHover={{ y: -8, transition: { duration: 0.1 } }}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-gold-lg border border-gray-100 hover:border-gold/30 transition-all duration-100 cursor-pointer flex-shrink-0"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-100 opacity-90 group-hover:opacity-100"
        />
        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-100" />

        {/* Text content overlay */}
        <div className="absolute inset-0 flex items-end p-5">
          <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 leading-tight">
            {item.name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySlider = ({ category, categoryIndex, isInView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = category.items.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <div className="md:hidden">
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {category.items.map((item, index) => (
              <div key={item.name} className="w-full flex-shrink-0 px-2">
                <TreatmentCard
                  item={item}
                  index={index}
                  isInView={isInView}
                  categoryIndex={categoryIndex}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {totalItems > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-gold hover:text-white transition-colors z-10 border border-gold border-1.5"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-gold hover:text-white transition-colors z-10 border border-gold border-1.5"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {totalItems > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {category.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

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
          className="text-center mb-12 max-md:mb-10"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-semibold text-gold-dark mb-4 tracking-wide uppercase">
            Comprehensive Care
          </span>
          <h2 className="section-title">World-Class Treatments</h2>
          <p className="text-lg max-md:text-base text-muted-foreground mx-auto">
            From routine check-ups to complex full mouth rehabilitation,{" "}
            <br className="hidden md:block" />
            we offer a complete spectrum of dental services.
          </p>
        </motion.div>

        {/* Treatment Categories */}
        <div className="space-y-12">
          {treatmentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-4 h-1 bg-gradient-gold rounded-full" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Desktop Grid - 5 cards per row */}
              <div className="hidden md:grid md:grid-cols-5 gap-6">
                {category.items.map((item, itemIndex) => (
                  <TreatmentCard
                    key={item.name}
                    item={item}
                    index={itemIndex}
                    isInView={isInView}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>

              {/* Mobile Slider */}
              <CategorySlider
                category={category}
                categoryIndex={categoryIndex}
                isInView={isInView}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-md:mt-12 text-center"
        >
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
            {/* Background shimmer */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl max-md:text-2xl font-bold text-white mb-4">
                Ready to transform
                <br className="md:hidden" /> your smile?
              </h3>
              <p className="text-gray-300 mb-8 max-md:mb-6 max-md:text-base mx-auto text-lg">
                Book a consultation today and let our experts guide you to
                better oral health.
              </p>
              <a
                href="https://wa.me/918788127264?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Book <span className="max-md:hidden">Your </span>Appointment
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
