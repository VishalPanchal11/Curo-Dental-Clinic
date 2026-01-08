import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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

  // Embla Carousel setup
  // align: 'start' allows multiple slides to be visible nicely
  // containScroll: 'trimSnaps' prevents excessive whitespace at ends
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false, // Requested: "slider will not be sliding automatically" - implies manual control, usually loop is optional but non-auto sliding is key.
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    onScroll(emblaApi);

    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onSelect, onScroll]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-gradient-hero relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-semibold text-gold-dark mb-4 tracking-wide uppercase">
            💬 Testimonials
          </span>
          <h2 className="section-title">Happy Smiles</h2>
          <p className="section-subtitle mx-auto">
            Real experiences from our valued patients
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-10 md:px-16 mx-auto relative" // Added padding for arrows space
        >
          {/* Arrows - Desktop: Absolute Left/Right */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-gold hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-gold hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Arrows - Inside/Overlay or Above/Below? User said: "arrow buttons on left most and rightmost of screen" -> implying they want arrows even on mobile or just unified design. 
               However, user also said "slider below". Let's put arrows on sides for mobile too but smaller or part of the flow. 
               Actually, "in mobile 1 card at a time... it can slide through arrow buttons or in mobile devices sliding through finger". 
               Let's keep the arrows visible on mobile too but positioned carefully.
            */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="md:hidden absolute left-[-1rem] top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-gold hover:text-white disabled:opacity-30 flex items-center justify-center transition-all shadow-md border border-gold backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="md:hidden absolute right-[-1rem] top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-gold hover:text-white disabled:opacity-30 flex items-center justify-center transition-all shadow-md border border-gold backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden p-2 -m-2" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
                >
                  <div className="h-full relative bg-white rounded-2xl p-6 md:p-8 md:shadow-lg border border-gray-100 max-md:border-gold flex flex-col">
                    {/* Quote Icon */}
                    <div className="absolute top-2 right-6 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-gold-dark opacity-50" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 leading-relaxed mb-2 font-display italic flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-400 text-xs font-medium">
                          Verified Patient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Scrollbar / Progress */}
          <div className="md:hidden mt-8 px-4">
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
