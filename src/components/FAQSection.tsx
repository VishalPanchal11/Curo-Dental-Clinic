import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is dental treatment painful?",
    answer:
      "Most treatments are performed using modern, pain-free techniques to ensure comfort. We use local anesthesia and the latest technology to minimize any discomfort. Our gentle approach and calm environment help even anxious patients feel at ease.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, we provide gentle and friendly dental care for kids. Our pediatric dental services include preventive care, cavity treatment, and education about oral hygiene in a fun, child-friendly environment.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Simply click the WhatsApp booking button and send your preferred date and time. You can also call us directly at 087881 27264. We'll confirm your appointment and send you a reminder before your visit.",
  },
  {
    question:
      "Do you offer advanced treatments like implants and laser dentistry?",
    answer:
      "Yes, we provide dental implants, laser dentistry, full mouth rehabilitation, and many other advanced treatments. Our specialists have performed 500+ implant procedures with excellent success rates.",
  },
  {
    question: "What are your clinic timings?",
    answer:
      "Our clinic operates from 10 AM - 2 PM and 5 PM - 9 PM. We recommend booking an appointment in advance to ensure you get your preferred time slot.",
  },
  {
    question: "What safety measures do you follow?",
    answer:
      "We maintain strict sterilization and infection control protocols. All instruments are autoclaved, and our clinic follows international hygiene standards to ensure a safe environment for every patient.",
  },
];

export const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-semibold text-gold-dark mb-4 tracking-wide uppercase">
            ❓ FAQ
          </span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Find answers to common questions about our dental services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white shadow-gold border border-gold/40"
                    : "bg-gray-50 border border-transparent hover:bg-white hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? "bg-gold text-white"
                        : "bg-gray-200 text-gray-500 group-hover:bg-gold/20 group-hover:text-gold-dark"
                    }`}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-bold text-lg ${
                      openIndex === index
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? "text-gold-dark" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  className={`p-6 pt-2 text-gray-600 leading-relaxed border-x border-b border-gold/10 rounded-b-2xl mx-2 ${
                    openIndex === index ? "bg-white shadow-sm" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
