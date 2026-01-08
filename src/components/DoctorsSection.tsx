import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  Users,
  Stethoscope,
  FlaskConical,
  Handshake,
  Copyright,
  Syringe,
  FileText,
  Trophy,
} from "lucide-react";

const drSachinHighlights = [
  { icon: Stethoscope, text: "Prosthodontist & Implant Specialist" },
  {
    icon: GraduationCap,
    text: "Former Associate Professor – Aditya Dental College",
  },
  { icon: FlaskConical, text: "500+ implant procedures" },
  { icon: Users, text: "Expert in prosthetically driven guided implantology" },
  { icon: Award, text: "F.D. Mirza Award – Indian Prosthodontic Society" },
  { icon: Handshake, text: "Patient-focused, ethical approach" },
];

const drDhanashriHighlights = [
  {
    icon: Stethoscope,
    text: "Oral & Maxillofacial Surgeon and Implantologist",
  },
  { icon: Syringe, text: "500+ dental implant placements" },
  {
    icon: FlaskConical,
    text: "Expertise in advanced implant surgeries & bone augmentation",
  },
  {
    icon: Copyright,
    text: "Several copyright holder in Oral & Maxillofacial Surgery",
  },
  {
    icon: FileText,
    text: "Award-winning researcher with national & international publications",
  },
  {
    icon: Trophy,
    text: "Known for painless, precise & patient-centric surgical care",
  },
];

interface DoctorCardProps {
  name: string;
  title: string;
  description: string;
  highlights: { icon: React.ElementType; text: string }[];
  expertise?: string[];
  awards?: string[];
  delay?: number;
}

const DoctorCard = ({
  name,
  title,
  description,
  highlights,
  expertise,
  awards,
  delay = 0,
}: DoctorCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border hover-lift gold-border-glow"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-gold">
          <span className="text-3xl md:text-4xl">👨‍⚕️</span>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {name}
          </h3>
          <p className="text-primary font-medium">{title}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Quick Highlights */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
          Quick Highlights
        </h4>
        <div className="grid gap-3">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-foreground/80">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expertise */}
      {expertise && expertise.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
            Clinical Expertise
          </h4>
          <ul className="grid gap-2">
            {expertise.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
            Awards & Achievements
          </h4>
          <ul className="grid gap-2">
            {awards.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">🏆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export const DoctorsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="doctors"
      ref={sectionRef}
      className="section-padding bg-white relative"
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
            👨‍⚕️ Expert Care
          </span>
          <h2 className="section-title">Meet Our Specialists</h2>
          <p className="section-subtitle mx-auto">
            Experienced specialists combining academic excellence with advanced
            clinical expertise.
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <DoctorCard
            name="Dr. Sachin Sonawane"
            title="Prosthodontist & Implantologist"
            description="Dr. Sachin Sonawane is an experienced Prosthodontist and Implantologist known for his precision, ethical practice, and patient-first approach. He is a former Associate Professor at Aditya Dental College, bringing a strong blend of academic excellence and advanced clinical expertise. During his postgraduate training, he placed 100+ dental implants and has since completed 500+ implant procedures, delivering predictable, long-lasting, and natural-looking results through prosthetically driven guided implantology."
            highlights={drSachinHighlights}
            delay={0.1}
          />

          <DoctorCard
            name="Dr. Dhanashri Sonawane"
            title="Oral & Maxillofacial Surgeon"
            description="Dr. Dhanashri Sonawane is a highly skilled Oral & Maxillofacial Surgeon and Implantologist, known for advanced surgical expertise, academic excellence, and compassionate, patient-focused care. She brings a strong surgical approach to implant dentistry, with 500+ successful dental implant placements to date, focusing on precise planning, bone health, and long-term implant success—even in complex cases."
            highlights={drDhanashriHighlights}
            expertise={[
              "Painless, atraumatic & minimally invasive surgical procedures",
              "Dental implants planned from a surgical and anatomical perspective",
              "Sinus lift surgeries (direct & indirect)",
              "Wisdom tooth removal (simple & complex)",
              "Pre-prosthetic surgeries",
              "Management of cysts, tumors & oral biopsies",
            ]}
            awards={[
              "1st Award – AOMSI Poster Presentation",
              "1st Award – Paper Presentation on Pan-Facial Fractures",
              "1st Rank – MUHS, Nashik (BDS)",
              "4th Rank – MDS Oral & Maxillofacial Surgery",
            ]}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};
