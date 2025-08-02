import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Award,
  CheckCircle,
  Calendar,
  Briefcase,
  Rocket,
  Stethoscope,
  Microscope,
  Globe,
  UserCheck,
  FileText,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import medicalStudents from "@/assets/medical-students.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import underlineImage from "/line.png";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { CalendarDays } from "lucide-react";
import dayjs from "dayjs";
import CountUp from "react-countup";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
import Facialinjectables from "@/assets/Facial-injectables.png";
import ClinicalCosmetology from "@/assets/Clinical-Cosmetology.png";
import DiplomaClinicalCosmetology from "@/assets/Diploma-Clinical-Cosmetology.png";
import FacialAesthetics from "@/assets/Facial-Aesthetics.png";
import MediFacial from "@/assets/Medi-Facial.png";
import Makeup from "@/assets/Makeup.png";
import { Line } from "recharts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InternshipBg from "@/assets/InternshipPage.jpg";
import ChemicalPeel from "@/assets/Chemical-Peel.png";
import Lasers from "@/assets/Lasers.png";
// import Makeup from "@/assets/Makeup.png";
import AdvancedMakeup from "@/assets/Advanced-Makeup.png";
import CertificateInjectables from "@/assets/Certificate-Injectables.png";
dayjs.extend(duration);

const targetDate = dayjs("2025-07-31T00:00:00");


const Internship = () => {
  
  const programs = [
    {
      title: "Clinical Medical Assistant Internship",
      duration: "8 weeks",
      locations: "15+ Partner Clinics",
      students: "12-16",
      description:
        "Hands-on experience in patient care, medical procedures, and clinic operations.",
      requirements: [
        "Completed Medical Assistant Program",
        "CPR Certification",
        "Background Check",
      ],
      benefits: [
        "Real clinic experience",
        "Mentorship program",
        "Job placement assistance",
      ],
    },
    {
      title: "Hospital Nursing Internship",
      duration: "12 weeks",
      locations: "8 Major Hospitals",
      students: "8-12",
      description:
        "Comprehensive nursing experience across multiple hospital departments.",
      requirements: [
        "Nursing Program Completion",
        "Current Immunizations",
        "Drug Screening",
      ],
      benefits: [
        "Multiple department rotations",
        "Experienced preceptors",
        "Professional references",
      ],
    },
    {
      title: "Pharmacy Operations Internship",
      duration: "6 weeks",
      locations: "20+ Pharmacies",
      students: "10-15",
      description:
        "Practical experience in retail and hospital pharmacy environments.",
      requirements: [
        "Pharmacy Tech Certification",
        "State Registration",
        "Clean Background",
      ],
      benefits: [
        "Retail & hospital exposure",
        "Customer service training",
        "Career networking",
      ],
    },
  ];

   const courses = [
    {
      title: "Master in Facial Injectables",
      duration: "5 Days",
      description:
        "This specialized postgraduate program trains medical professionals in injectable treatments like Botox, dermal fillers, and threads. Emphasizing facial aesthetics and aging, it delivers deep theoretical insights and hands-on experience.",
      image: Facialinjectables,
    },
    {
      title: "PG Diploma in Clinical Cosmetology",
      duration: "2 Months",
      description:
        "An advanced program tailored for medical professionals looking to master cosmetic treatments for skin, hair, and laser. Blends deep theoretical knowledge with practical training using the latest aesthetic equipment.",
      image: ClinicalCosmetology,
    },
    {
      title: "Fellowship in Clinical Cosmetology",
      duration: "6 months",
      description:
        "In-depth training in clinical cosmetology with a focus on advanced skin care, anti-aging treatments, and non-surgical aesthetic techniques. Blends theoretical learning with real-world skills.",
      image: DiplomaClinicalCosmetology,
    },
    {
      title: "Fellowship in Facial Aesthetics",
      duration: "6 months",
      description:
        "Comprehensive program focused on Hair & Skin Science, cosmetic procedures, non-surgical aesthetic techniques, and ethics in practice. Designed for professionals in aesthetic medicine.",
      image: FacialAesthetics,
    },
    
    {
      title: "Workshop in Semi-Permanent Makeup (SPMU)",
      duration: "2 Days",
      description:
        "Comprehensive workshop on microblading, powder brows, lip blush, and eyeliner enhancement. Covers client consultation, pigment selection, tool handling, and aftercare guidance.",
      image: Makeup,
    },
  ];

  const certificationcourses = [
    {
      title: "Certificate Course in Medi Facial",
      duration: "5 Days",
      description:
        "Covers advanced facial treatments targeting skin concerns like acne, pigmentation, and dullness. Focuses on rejuvenation using non-invasive techniques with an emphasis on patient assessment and treatment customization.",
      image: MediFacial,
    },
    {
      title: "Certificate Course in Chemical Peel",
      duration: "2 Months",
      description:
        "Focused on chemical exfoliation and skin rejuvenation techniques. Teaches appropriate peel selection, application, safety, and combination treatments for various skin conditions.",
      image: ChemicalPeel,
    },
    {
      title: "Certificate Course in Lasersy",
      duration: "6 months",
      description:
        "A deep dive into laser technology in medical aesthetics. Learn laser physics, patient assessment, and perform treatments like hair removal, pigmentation correction, and scar revision safely.",
      image: Lasers,
    },
    {
      title: "Certificate Course in Semi-permanent Make Up",
      duration: "6 months",
      description:
        "Trains practitioners in cosmetic tattooing including microblading, lip blush, eyeliner, and scalp micropigmentation. Includes safety, pigment theory, and client customization.",
      image: Makeup,
    },
    {
      title: "Certificate Course in Advanced Semi-Permanent Makeup",
      duration: "2 Days",
      description:
        "An advanced version of the SPMU course, covering detailed cosmetic tattooing with expert-level techniques and tools for enhanced facial aesthetics.",
      image: AdvancedMakeup,
    },
    {
      title: "Certificate Course in Injectables",
      duration: "2 Days",
      description:
        "Specialized training in skin rejuvenation and injectable procedures such as botulinum toxin and dermal fillers. Combines facial anatomy with hands-on skills in contouring and anti-aging.",
      image: CertificateInjectables,
    },
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description:
        "Work alongside healthcare professionals in actual medical facilities",
    },
    {
      icon: Users,
      title: "Professional Mentorship",
      description:
        "Paired with experienced professionals who guide your learning",
    },
    {
      icon: Award,
      title: "Industry Connections",
      description: "Build relationships that often lead to job opportunities",
    },
    {
      icon: CheckCircle,
      title: "Skill Validation",
      description: "Apply classroom knowledge in real clinical settings",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Application Submission",
      description: "Complete internship application during your final semester",
      timeframe: "8 weeks before graduation",
    },
    {
      step: "2",
      title: "Interview Process",
      description:
        "Meet with potential placement sites and our coordination team",
      timeframe: "4-6 weeks before start",
    },
    {
      step: "3",
      title: "Placement Confirmation",
      description: "Receive your internship placement and orientation schedule",
      timeframe: "2 weeks before start",
    },
    {
      step: "4",
      title: "Begin Internship",
      description:
        "Start your hands-on learning experience at your assigned facility",
      timeframe: "Program completion",
    },
  ];
const featuredRef = useRef(null);
  const certificationRef = useRef(null);
  const requirements = [
    "Completion of core program coursework with minimum 3.0 GPA",
    "Current CPR certification and basic life support training",
    "Completed background check and drug screening",
    "Current immunizations as required by placement facility",
    "Professional liability insurance (provided by the institute)",
    "Attendance at mandatory orientation session",
  ];

  const partnerFacilities = [
    "Metropolitan General Hospital",
    "Children's Healthcare Network",
    "Community Medical Centers",
    "Regional Specialty Clinics",
    "Urgent Care Associates",
    "Rehabilitation Services Inc.",
  ];
  const features = [
    {
      icon: UserCheck,
      title: "In-Depth Expert Training",
    },
    {
      icon: FileText,
      title: "Government and International Accredited Certificate",
    },
    {
      icon: Briefcase,
      title: "Guaranteed Placement with Refund Policy",
    },
    {
      icon: ShieldCheck,
      title: "Medico-Legal Expert and Vendor Assistance",
    },
    {
      icon: MessageSquare,
      title: "Business Launch Support",
    },
  ];

  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9;

    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const calculateTimeLeft = () => {
    const now = dayjs();
    const diff = targetDate.diff(now);
    const dur = dayjs.duration(diff);

    return {
      days: String(dur.days()).padStart(2, "0"),
      hours: String(dur.hours()).padStart(2, "0"),
      minutes: String(dur.minutes()).padStart(2, "0"),
      seconds: String(dur.seconds()).padStart(2, "0"),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-8 lg:py-12 bg-white overflow-hidden">
        {/* 🟦 Container with background image, padding, and curved corners */}
        <div
          className="mx-4 sm:mx-6 lg:mx-8 rounded-3xl bg-cover bg-center bg-no-repeat relative"
          style={{
             backgroundImage: `url(${InternshipBg})`,
          }}
        >
          {/* Optional semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 rounded-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
            <div className="max-w-4xl" data-aos="fade-up">
              <div className="inline-block relative">
                <h1 className="font-manrope text-5xl lg:text-7xl text-primary leading-tight relative z-10 mb-5">
                  Experience-Based Learning
                </h1>
              </div>
              <div className="max-w-xl">
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-primary">
                  Global & Pan-India Internship & Career Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white overflow-hidden">
        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-10 top-10 text-[#032c40]"
        >
          <Stethoscope size={50} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-16 top-1/2 text-[#032c40]"
        >
          <Microscope size={50} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/4 bottom-12 text-[#032c40]"
        >
          <Globe size={50} />
        </motion.div>

        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 shadow-xl rounded-3xl p-10 border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-center text-[#032c40] mb-6 leading-snug">
              <span className="bg-gradient-to-r from-[#032c40] to-[#065f7a] text-transparent bg-clip-text">
                Unlock Your Career
              </span>{" "}
              with Dr. EduMed
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
              At Dr. EduMed, we empower students with the skills and expertise
              to
              <span className="text-[#032c40] font-medium"> excel</span> in the
              competitive field of medical aesthetics. Upon completing the
              course, students gain exclusive access to a wide range of{" "}
              <span className="text-[#032c40] font-medium">
                national and international internships
              </span>{" "}
              that offer hands-on experience and exposure to the latest industry
              innovations. Work alongside experts, stay ahead of emerging
              trends, and build a successful career with us.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#032c40] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Internships
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

       <section
        className="py-24"
        style={{
          backgroundColor: "#e0f7f4", // light pastel teal
          marginLeft: "2rem", // left gap
          marginRight: "2rem", // right gap
          borderRadius: "1rem", // optional: soft rounded edges
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="font-manrope text-3xl lg:text-3xl"
              style={{ color: "#032c40" }}
            >
              Our Core Values
            </h2>
            <img
              src={underlineImage}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from curriculum
              development to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "In-Depth Expert Training",
                description:
                  "Comprehensive, hands-on training led by industry experts.",
                Icon: UserCheck,
              },
              {
                title: "Govt. & International Accredited Certificate",
                description:
                  "Recognized certifications to enhance your professional credibility.",
                Icon: Award,
              },
              {
                title: "Guaranteed Placement & Refund Policy",
                description:
                  "Confidence in your career with assured placement and refund options.",
                Icon: Briefcase,
              },
              {
                title: "Medico-Legal Expert & Vendor Assist",
                description:
                  "Guidance on legal matters and vendor partnerships to support your journey.",
                Icon: ShieldCheck,
              },
              {
                title: "Business Launch Support",
                description:
                  "Help to successfully start, scale, and sustain your aesthetic practice.",
                Icon: Rocket,
              },
              {
                title: "Lifelong Alumni Access",
                description:
                  "Stay connected, upskill and grow through our lifetime alumni support.",
                Icon: Users,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="relative group bg-white/60 backdrop-blur-sm border border-[#032c40]/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-all duration-300" />
                <div className="flex items-center gap-2 mb-2">
                  <value.Icon className="h-6 w-6 flex-shrink-0 text-[#032c40]" />
                  <h3 className="text-lg font-bold text-[#032c40] leading-tight">
                    {value.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-manrope">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Dr.EduMed?
            </span>
          </h2>
          <img
            src={underlineImage}
            alt="Decorative Line"
            className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#ccfbf1] rounded-2xl shadow-md text-center p-6 transition-transform duration-300 transform hover:scale-105 backdrop-blur-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-gradient-primary" />
              </div>
              <p className="text-base font-medium text-gray-800">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </section>

       <section className="py-20 bg-foreground" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 mb-6">
              Featured Courses
            </h2>
            <img
              src={underlineImage} // Replace with actual import or path
              alt="Underline design"
              className="w-[180px] lg:w-[220px] mx-auto mt-3 mb-6 inline-block"
              data-aos="fade-up"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular training programs designed to launch
              your healthcare career with confidence and expertise.
            </p>
          </div>

          <div className="relative">
            {/* Scroll Buttons */}
            {/* Buttons */}
            <button
              onClick={() => scroll(featuredRef, "left")}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ArrowLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={() => scroll(featuredRef, "right")}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ArrowRight className="h-6 w-6 text-primary" />
            </button>

            {/* Carousel */}
            <div
              ref={featuredRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-2 hide-scrollbar"
            >
              {/* course cards here */}

              {courses.map((course, index) => (
  <Card
    key={index}
    className="group relative min-w-[300px] md:min-w-[340px] shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in flex flex-col py-4 px-4"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    {/* Internship label top-right except excluded categories / specific course */}
    {course.category !== "certificate" &&
     course.category !== "workshop" &&
     course.id !== 5 && (
      <div className="pointer-events-none absolute top-2 right-2 z-30">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
          Internship available
        </div>
      </div>
    )}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                  </div>

                  {/* Make CardContent grow and push button to bottom */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {course.title}
                      </h3>
                      {/* If you want to add duration badge again, do it here */}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {course.description}
                    </p>

                    {/* Button aligned at bottom */}
                    <div className="mt-auto pt-4">
                      <Link to="/courses" className="block">
                        <Button
                          variant="outline"
                          className="w-full group border-[#032c40] text-[#032c40] hover:bg-[#032c40] hover:text-white transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/courses">
                <Button size="xl" variant="metallic" data-aos="fade-up">
                  Explore Our Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 mb-6">
              Certification Courses
            </h2>
            <img
              src={underlineImage} // Replace with actual import or path
              alt="Underline design"
              className="w-[180px] lg:w-[220px] mx-auto mt-3 mb-6 inline-block"
              data-aos="fade-up"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular training programs designed to launch
              your healthcare career with confidence and expertise.
            </p>
          </div>

          <div className="relative">
            {/* Scroll Buttons */}
            {/* Buttons */}
            <button
              onClick={() => scroll(certificationRef, "left")}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-foreground rounded-full p-2 shadow"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => scroll(certificationRef, "right")}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-foreground rounded-full p-2 shadow"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>

            {/* Carousel */}
            <div
              ref={certificationRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-2 hide-scrollbar"
            >
              {/* certification course cards here */}

              {certificationcourses.map((course, index) => (
                <Card
                  key={index}
                  className="min-w-[300px] md:min-w-[340px] shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in flex flex-col px-4 py-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Make CardContent grow and push button to bottom */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {course.title}
                      </h3>
                      {/* If you want to add duration badge again, do it here */}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {course.description}
                    </p>

                    {/* Button aligned at bottom */}
                    <div className="mt-auto pt-4">
                      <Link to="/courses" className="block">
                        <Button
                          variant="outline"
                          className="w-full group border-[#032c40] text-[#032c40] hover:bg-[#032c40] hover:text-white transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/courses?category=certificate">

                <Button size="xl" variant="gradient" data-aos="fade-up">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative w-full my-20 px-4 sm:px-6 lg:px-8 pb-[50px]">
        <div className="relative">
          <img
            src="/src/assets/Banner.png"
            alt="Workshop Banner"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-6xl z-10">
          <div className="bg-[#032c40] text-white py-8 px-4 sm:px-6 md:px-10 lg:px-12 rounded-xl shadow-xl flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3 ">
              <CalendarDays className="w-6 h-6 text-white" />
              <div>
                <p className="text-sm opacity-80">Starting at</p>
                <p className="text-xl font-semibold whitespace-nowrap">
                  July 31, 2025
                </p>
              </div>
            </div>


            <div className="flex flex-wrap justify-center gap-4 text-center">
              {[
                { label: "days", value: timeLeft.days },
                { label: "hours", value: timeLeft.hours },
                { label: "minutes", value: timeLeft.minutes },
                { label: "seconds", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="bg-[#063949] px-4 py-2 rounded-md text-2xl font-bold w-16 text-center">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#032c40] transition whitespace-nowrap">
              Enrol now
            </button>
          </div>
        </div>
        <div className="mt-28" />
      </section> */}

      {/* Available Programs */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Available Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from our specialized internship tracks designed for
              different healthcare career paths.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        Duration: {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.locations}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        Class size: {program.students}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Requirements:
                    </p>
                    <div className="space-y-1">
                      {program.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {req}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Benefits:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {program.benefits.map((benefit, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Process */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Application Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our streamlined process ensures you're matched with the right
                internship opportunity for your career goals.
              </p>

              <div className="space-y-6">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className="flex space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="gradient-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        {step.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {step.timeframe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src={medicalStudents}
                alt="Students in clinical setting"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Requirements & Partners */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            <div className="animate-slide-up">
              <h2 className="font-manrope text-3xl lg:text-4xl text-primary mb-6">
                General Requirements
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To ensure success in our internship program, all participants
                must meet these requirements.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            <div className="animate-slide-up">
              <h2 className="font-manrope text-3xl lg:text-4xl text-primary mb-6">
                Partner Facilities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've partnered with leading healthcare organizations to provide
                diverse internship experiences.
              </p>

              <div className="grid gap-3">
                {partnerFacilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Success Stats */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Success Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our internship program delivers real results for our graduates.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "92%", label: "Job Placement Rate" },
              { stat: "89%", label: "Hired at Internship Site" },
              { stat: "4.8/5", label: "Student Satisfaction" },
              { stat: "95%", label: "Employer Satisfaction" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-manrope text-4xl lg:text-5xl text-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-muted-foreground font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground mb-6">
              Start Your Professional Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the first step toward hands-on experience in your chosen
              healthcare field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/courses" className="inline-block">
                                 <Button size="xl" variant="metallic" data-aos="fade-left">
                                   Explore all courses
                                 </Button>
                               </Link>
              {/* <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-white-foreground hover:bg-primary-foreground/10"
                onClick={() => navigate("/courses")}
              >
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
