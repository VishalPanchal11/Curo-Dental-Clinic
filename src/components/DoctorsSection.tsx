import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Award,
  User,
  GraduationCap,
  Heart,
  Star,
} from "lucide-react";

const doctors = [
  {
    id: "sachin",
    name: "Dr. Sachin Sonawane",
    primaryRole: "Prosthodontist & Implantologist",
    secondaryRole: "BDS, MDS (Prosthodontics)",
    intro:
      "Experience advanced restorative and implant dental care with Dr. Sachin Sonawane's expertise in prosthetic and implant treatments.",
    imageOnLeft: true,
    image: "https://ik.imagekit.io/curo/Curo%20Website/maleDoc.jpeg",
    expertise: [
      {
        title: "Prosthodontist & Implantologist",
        subtitle: "Restorative Expert",
        description:
          "Dr. Sachin Sonawane is an experienced Prosthodontist and Implantologist known for precision, ethical practice, and patient-first care.",
      },
      {
        title: "Extensive Implant Experience",
        subtitle: "500+ Procedures",
        description:
          "He has completed 500+ implant procedures, delivering predictable, long-lasting, and natural-looking results with high accuracy.",
      },
      {
        title: "Advanced Implant Planning",
        subtitle: "Guided Implantology Expert",
        description:
          "Specialized in prosthetically driven guided implantology, ensuring implants are placed with proper planning for strong function and aesthetics.",
      },
      {
        title: "Academic Background",
        subtitle: "Former Associate Professor",
        description:
          "Former Associate Professor at Aditya Dental College, combining academic excellence with real clinical expertise.",
      },
      {
        title: "Patient-First Approach",
        subtitle: "Ethical & Transparent Care",
        description:
          "Trusted for clear communication, detailed treatment planning, and ethical care focused on comfort and long-term success.",
      },
    ],
    awards: [
      "Recipient of the prestigious F.D. Mirza Award (First Prize) by the Indian Prosthodontic Society",
    ],
    stats: {
      experience: "15+ Years",
      procedures: "500+",
      rating: "4.9★",
    },
  },
  {
    id: "dhanashri",
    name: "Dr. Dhanashri Sonawane",
    primaryRole: "Oral & Maxillofacial Surgeon",
    secondaryRole: "BDS, MDS (Oral & Maxillofacial Surgery)",
    intro:
      "Experience safe and advanced surgical dental care with Dr. Dhanashri Sonawane's expertise in oral surgery and implant treatments.",
    imageOnLeft: false,
    image: "https://ik.imagekit.io/curo/Curo%20Website/femaleDoc.jpg",
    expertise: [
      {
        title: "Oral & Maxillofacial Surgeon",
        subtitle: "Surgical Specialist",
        description:
          "Dr. Dhanashri Sonawane is a highly skilled Oral & Maxillofacial Surgeon and Implantologist known for precise and patient-centric care.",
      },
      {
        title: "Extensive Implant Experience",
        subtitle: "500+ Implant Placements",
        description:
          "She has successfully completed 500+ dental implant placements, focusing on long-term implant stability and bone health.",
      },
      {
        title: "Advanced Implant Surgeries",
        subtitle: "Complex Case Expert",
        description:
          "Expert in advanced implant surgeries and bone augmentation, providing strong support even in difficult implant cases.",
      },
      {
        title: "Specialized Surgical Procedures",
        subtitle: "Sinus Lift & Surgical Care",
        description:
          "Performs advanced procedures like sinus lift surgeries (direct & indirect), wisdom tooth removal, biopsies, and pre-prosthetic surgeries.",
      },
      {
        title: "Comfort-Focused Treatment",
        subtitle: "Painless & Gentle Care",
        description:
          "Known for painless, minimally invasive surgical techniques with careful planning and smooth recovery for patients.",
      },
    ],
    awards: [
      "1st Award – AOMSI Poster Presentation",
      "1st Award – Paper Presentation on Pan-Facial Fractures",
      "1st Rank – MUHS, Nashik (BDS)",
      "4th Rank – MDS Oral & Maxillofacial Surgery",
    ],
    stats: {
      experience: "12+ Years",
      procedures: "500+",
      rating: "4.8★",
    },
  },
];

const DoctorCard = ({ doctor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16 last:mb-0">
      <div
        className={`flex flex-col ${
          doctor.imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 items-start`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-[40%] relative">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 shadow-lg">
            {/* Verified Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-gold text-secondary px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Doctor
              </span>
            </div>

            {/* Doctor Image */}
            <div className="w-full aspect-[3.4/4] bg-slate-100 flex items-center justify-center overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Info Overlay - Cohesive Vertical Layout */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent py-2 px-4 max-md:pb-4 pt-32">
              <div className="space-y-2">
                {/* 1. Name & Basic Info */}
                <div className="flex justify-between items-center md:items-end max-md:mb-4">
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-bold">
                      {doctor.name}
                    </h3>
                    <p className="text-gold-light text-xs font-semibold">
                      {doctor.secondaryRole}
                    </p>
                    <p className="text-slate-300 text-[10px]">
                      {doctor.primaryRole}
                    </p>
                  </div>

                  {/* Mobile Dropdown Button */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden bg-gold text-secondary p-2 rounded-full shadow-lg hover:bg-gold-dark transition-colors mr-4"
                    aria-label="Toggle details"
                  >
                    {isExpanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                </div>

                {/* 2. Summary Stats Cards (Role, Exp, Rating) */}
                <div className="grid grid-cols-3 gap-2">
                  {/* Card 1: Role/Qual */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-xl flex items-center gap-2">
                    <div className="bg-gold/20 p-1.5 rounded-lg shrink-0">
                      <GraduationCap className="w-4 h-4 text-gold" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[9px] font-bold text-white leading-tight uppercase truncate">
                        {doctor.secondaryRole.split(",")[0]}
                      </p>
                      <p className="text-[8px] text-white/60 leading-tight">
                        Expert Specialist
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Experience */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-xl flex items-center gap-2">
                    <div className="bg-gold/20 p-1.5 rounded-lg shrink-0">
                      <Heart className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white leading-tight">
                        {doctor.stats.experience}
                      </p>
                      <p className="text-[8px] text-white/60 leading-tight">
                        Experience
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Rating or Procedures */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-xl flex items-center gap-2">
                    <div className="bg-gold/20 p-1.5 rounded-lg shrink-0">
                      <Star className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white leading-tight">
                        {doctor.stats.rating}
                      </p>
                      <p className="text-[8px] text-white/60 leading-tight">
                        Patient Rating
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Awards & Achievements - List Format */}
                <div className="pt-2 border-t border-white/10 max-md:hidden">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center">
                      Awards & Achievements
                    </span>
                  </div>
                  <ul className="">
                    {doctor.awards.map((award, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-[10px] shrink-0">🏆</span>
                        <p className="text-[10px] text-white/90 leading-snug font-medium">
                          {award}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`w-full lg:w-[60%] ${
            isExpanded ? "block" : "hidden lg:block"
          }`}
        >
          <div className="space-y-5">
            {/* Header */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Meet Your <span className="text-gold">Doctor</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed italic border-l-3 border-gold pl-3 py-1 bg-gold/5 rounded-r">
                {doctor.intro}
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-3">
              {doctor.expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 group hover:bg-slate-50 p-2.5 rounded-lg transition-colors"
                >
                  <div className="shrink-0">
                    <div className="bg-gold-muted p-2 rounded-lg group-hover:bg-gold transition-colors">
                      <User className="w-4 h-4 text-gold group-hover:text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h5 className="font-bold text-slate-900 text-xs">
                        {item.title}
                      </h5>
                      <span className="bg-gold-muted text-gold-dark text-[9px] px-2 py-0.5 rounded-full font-semibold">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Awards & Achievements - Mobile Only */}
              <div className="lg:hidden mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-gold-muted p-2 rounded-lg">
                    <Award className="w-4 h-4 text-gold" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Awards & Achievements
                  </h5>
                </div>
                <div className="space-y-2 pl-1">
                  {doctor.awards.map((award, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5 text-xs">🏆</span>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        {award}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-gold font-bold text-xs uppercase tracking-wider mb-2 block">
            Expert Clinical Team
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Meet Our <span className="text-gradient-gold">Specialists</span>
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our team of highly qualified and experienced dental specialists is
            dedicated to providing you with the highest quality of clinical care
            and personal service.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="max-w-6xl mx-auto">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
