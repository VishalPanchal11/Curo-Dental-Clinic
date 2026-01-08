import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Very professional and gentle treatment. The clinic is clean and well-equipped. Dr. Sachin explained everything clearly and made me feel comfortable throughout my dental implant procedure.",
    author: "Rahul M.",
    rating: 5,
  },
  {
    text: "The dentist explained everything clearly and made me feel comfortable throughout. The digital X-ray and intraoral scanner made the whole experience much better. Highly recommend!",
    author: "Priya S.",
    rating: 5,
  },
  {
    text: "Excellent experience — highly recommended for family dental care. Both doctors are extremely knowledgeable and patient. My kids now love going to the dentist!",
    author: "Amit K.",
    rating: 5,
  },
  {
    text: "Had my wisdom tooth extraction here. Dr. Dhanashri was amazing - completely painless procedure! The clinic's hygiene standards are top-notch.",
    author: "Sneha R.",
    rating: 5,
  },
  {
    text: "Best dental clinic in Kharghar! The full mouth rehabilitation transformed my smile. Transparent pricing and no hidden charges. Thank you, Curo team!",
    author: "Vikram P.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-gradient-hero relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-semibold text-gold-dark mb-4 tracking-wide uppercase">
            💬 Testimonials
          </span>
          <h2 className="section-title">Happy Smiles</h2>
          <p className="section-subtitle mx-auto">
            Real experiences from our valued patients
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-lg transform rotate-12">
              <Quote className="w-7 h-7 text-white fill-white" />
            </div>

            {/* Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center pt-6"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1.5 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-display italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-1 bg-gold/30 rounded-full mb-4" />
                <p className="font-bold text-gray-900 text-lg uppercase tracking-wider">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-500 text-sm">Verified Patient</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-6 mt-10 items-center">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-50 hover:bg-gold hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-gold"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gold"
                        : "w-2 bg-gray-200 hover:bg-gold/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-50 hover:bg-gold hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-gold"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
