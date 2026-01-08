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
  emoji: string;
  delay?: number;
}

const DoctorCard = ({
  name,
  title,
  description,
  highlights,
  expertise,
  awards,
  emoji,
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
      className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border hover-lift gold-border-glow"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-gold">
          <span className="text-3xl md:text-3xl">{emoji}</span>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {name}
          </h3>
          <p className="text-primary font-medium">{title}</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-muted-foreground mb-6 leading-relaxed space-y-4 text-justify text-sm">
        {description
          .split("\n")
          .map(
            (paragraph, index) =>
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
          )}
      </div>

      {/* Quick Highlights */}
      <div className="mb-4">
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
              <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-foreground/80">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expertise */}
      {expertise && expertise.length > 0 && (
        <div className="py-4 border-t border-border">
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
            {awards.map((item, index) => {
              const isAward = item.toLowerCase().includes("award");
              return (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">{isAward ? "🏆" : "📜"}</span>
                  {item}
                </li>
              );
            })}
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
      className="py-12 px-4 bg-white relative"
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
            Expert Care
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
            description={
              "Dr. Sachin Sonawane is an experienced Prosthodontist and Implantologist known for precision, ethical practice, and patient-focused care. A former Associate Professor at Aditya Dental College, he combines academic excellence with advanced clinical expertise.\n\nWith 500+ successful implant procedures, he specializes in prosthodontically driven guided implantology and is a recipient of the prestigious F.D. Mirza Award by the Indian Prosthodontic Society."
            }
            emoji="👨‍⚕️"
            highlights={drSachinHighlights}
            awards={[
              "F.D. Mirza Award (First Prize) – Indian Prosthodontic Society",
            ]}
            delay={0.1}
          />

          <DoctorCard
            name="Dr. Dhanashri Sonawane"
            title="Oral & Maxillofacial Surgeon & Implantologist"
            description={
              "Dr. Dhanashri Sonawane is a highly skilled Oral & Maxillofacial Surgeon known for providing precise, painless surgical care and patient-focused treatment. With 500+ implant placements, she specializes in advanced implant surgeries, bone augmentation, and complex maxillofacial procedures.\n\nAn award-winning researcher with national and international publications, she also holds multiple copyrights in Oral & Maxillofacial Surgery, reflecting her strong academic and research excellence."
            }
            emoji="👩‍⚕️"
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
              "AOMSI Poster Presentation - 1st Award",
              "Paper Presentation on Pan-Facial Fractures - 1st Award",
              "MUHS, Nashik (BDS) - 1st Rank",
              "MDS Oral & Maxillofacial Surgery - 4th Rank",
            ]}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};
