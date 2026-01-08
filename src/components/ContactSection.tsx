import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="section-padding bg-gradient-hero"
      >
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gold/10 rounded-full text-sm font-semibold text-gold-dark mb-4 tracking-wide uppercase">
              📍 Visit Us
            </span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle mx-auto">
              Conveniently located in Kharghar, Navi Mumbai. Stop by for a
              visit!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Our Location
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      PLOT NO. B/73, MAULI KRUPA, SHIVAJI CHOWK,
                      <br />
                      Sector 12, Kharghar, Navi Mumbai,
                      <br />
                      Maharashtra 410210
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Phone Number
                    </h4>
                    <a
                      href="tel:08788127264"
                      className="text-gray-800 hover:text-gold transition-colors text-xl font-semibold block"
                    >
                      +91 87881 27264
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Available Mon-Sat
                    </p>
                  </div>
                </div>
              </div>

              {/* Timings Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Working Hours
                    </h4>
                    <div className="space-y-1 text-gray-600">
                      <p>
                        <span className="font-medium text-gray-900">
                          Morning:
                        </span>{" "}
                        10:00 AM - 2:00 PM
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">
                          Evening:
                        </span>{" "}
                        5:00 PM - 9:00 PM
                      </p>
                      <p className="text-sm text-gold-dark font-medium mt-2">
                        Sunday Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Email Us
                    </h4>
                    <a
                      href="mailto:curodentalcare@gmail.com"
                      className="text-gray-600 hover:text-gold transition-colors font-medium"
                    >
                      curodentalcare@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/8788127264?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20reaching%20our%20dental%20clinic.%20How%20may%20we%20assist%20you%20with%20your%20dental%20appointment%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-lg justify-center shadow-gold hover:shadow-gold-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[600px] relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3831847655984!2d73.06459!3d19.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24d4b285d1f%3A0x95f8cfb5e90f7e0a!2sSector%2012%2C%20Kharghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20410210!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Curo Advanced Dental Care Location"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img
                  src={logo}
                  alt="Curo Advanced Dental Care"
                  className="h-12 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Advanced dental care with a compassionate touch. We are
                dedicated to restoring smiles and confidence.
              </p>
              <div className="flex gap-4">
                {/* Socials placeholders if needed, currently just icons */}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Doctors",
                  "Treatments",
                  "Testimonials",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Dental Implants",
                  "Root Canal",
                  "Teeth Whitening",
                  "Braces & Aligners",
                  "Kids Dentistry",
                ].map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter/Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">
                Get In Touch
              </h4>
              <p className="text-gray-400 mb-4">Ready for your checkup?</p>
              <a
                href="tel:08788127264"
                className="text-2xl font-bold text-gold hover:text-white transition-colors"
              >
                0878 812 7264
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Curo Advanced Dental Care. All rights
              reserved.
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Precision. Compassion. Excellence.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
