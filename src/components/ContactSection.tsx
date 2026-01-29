import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
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
            className="text-center mb-10"
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 max-md:order-2"
            >
              {/* Address Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 m-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="m-2 ml-0">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Our Location
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      PLOT NO. B/73, MAULI KRUPA, SHIVAJI CHOWK, Sector 12,
                      <br />
                      Kharghar, Navi Mumbai, Maharashtra 410210
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 m-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="m-3 ml-0">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Phone Number:
                    </h4>
                    <a
                      href="tel:+918788127264"
                      className="text-gray-700 hover:text-gold transition-colors text-xl font-semibold block"
                    >
                      +91 87881 27264 (Mon-Sat)
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 m-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="m-2 ml-0">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Working Hours
                    </h4>
                    <div className=" text-gray-600">
                      <p>
                        <span className="font-medium text-gray-900">
                          Morning:
                        </span>{" "}
                        10:00 AM - 3:00 PM
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">
                          Evening:
                        </span>{" "}
                        5:00 PM - 11:00 PM
                      </p>
                      <p className="text-sm text-gold-dark font-medium">
                        Sunday Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-gold/20 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 m-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="m-3 ml-0">
                    <h4 className="font-bold text-gray-900 text-lg">
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
                href="https://wa.me/918788127264?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full max-md:w-[80%] max-md:mx-[10%] text-lg justify-center shadow-gold hover:shadow-gold-lg font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                Book Appointment{" "}
                <span className="max-md:hidden">via WhatsApp</span>
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden max-md:hidden shadow-2xl border-4 border-white h-[500px] relative order-2 max-md:order-1"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30168.67664288295!2d73.02395084107914!3d19.060018520189303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c380411df4c5%3A0x333a0b47de852ddd!2sCURO%20Advanced%20Dental%20Care!5e0!3m2!1sen!2sin!4v1767904680392!5m2!1sen!2sin"
                width="600"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.5rem] md:hidden overflow-hidden shadow-2xl border-4 border-white h-[450px] relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30168.67664288295!2d73.02395084107914!3d19.060018520189303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c380411df4c5%3A0x333a0b47de852ddd!2sCURO%20Advanced%20Dental%20Care!5e0!3m2!1sen!2sin!4v1767904680392!5m2!1sen!2sin"
                width="400"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="bg-[#050505] text-white pt-8 max-md:pt-8 pb-6 border-t border-white/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex mb-4 max-md:flex-col justify-between max-md:justify-center max-md:items-center ">
            {/* Brand */}
            <div className="md:w-[32.5%]">
              <div className="flex items-center gap-12 mb-4 max-md:mb-8 mt-2 w-full">
                <img
                  src={logo}
                  alt="Curo Advanced Dental Care"
                  className="h-12 md:h-16 w-auto brightness-0 invert opacity-90 max-md:mx-auto"
                />
                <div className="md:hidden">
                  <h4 className="text-xl max-md:text-center font-bold text-white">
                    Get In Touch
                  </h4>
                  <a
                    href="tel:+918788127264"
                    className="text-xl font-bold text-gold hover:text-white transition-colors"
                  >
                    +91 8788127264
                  </a>
                </div>
              </div>
              <p className="text-gray-400 md:mb-4 text-sm  max-md:hidden">
                Advanced dental care with a compassionate touch. We are
                dedicated to restoring smiles and confidence.
              </p>
              <div className="hidden md:flex gap-4 mb-2">
                <a
                  href="https://www.instagram.com/curo_advanced_dental_care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/curodentalcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/curodentalcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex md:hidden gap-20">
              {/* Quick Links */}
              <div>
                <h4 className="text-xl max-md:text-base font-bold text-white mb-2">
                  Quick Links
                </h4>
                <ul className="space-y-1 max-md:text-sm">
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
                <h4 className="text-xl max-md:text-base font-bold text-white mb-2">
                  Our Services
                </h4>
                <ul className="space-y-1 max-md:text-sm">
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
            </div>
            {/* Social Links for Mobile */}
            <div className="flex md:hidden gap-6 mt-8 justify-center">
              <a
                href="https://www.instagram.com/curo_advanced_dental_care/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/curodentalcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/curodentalcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            {/* Quick Links */}
            <div className="max-md:hidden">
              <h4 className="text-xl font-bold text-white mb-2">Quick Links</h4>
              <ul className="space-y-0">
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
            <div className="max-md:hidden">
              <h4 className="text-xl font-bold text-white mb-2">
                Our Services
              </h4>
              <ul className="space-y-0">
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
            <div className="max-md:hidden">
              <h4 className="text-xl max-md:text-2xl max-md:text-center font-bold text-white mb-2">
                Get In Touch
              </h4>
              <p className="text-gray-400 mb-2  max-md:text-center">
                Ready for your checkup?
              </p>
              <a
                href="tel:+918788127264"
                className="text-2xl max-md:text-xl max-md:ml-4 font-bold text-gold hover:text-white transition-colors"
              >
                +91 8788127264
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm max-md:text-xs text-gray-500">
              © {new Date().getFullYear()} Curo Advanced Dental Care. All rights
              reserved.
            </p>
            <p className="text-sm max-md:text-xs text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Precision. Compassion. Excellence.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
