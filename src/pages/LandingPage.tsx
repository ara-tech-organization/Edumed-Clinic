import { ArrowRight, Users, Award, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Carousel from "@/components/Carousel";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-medical-training.jpg";
import medicalStudents from "@/assets/medical-students.jpg";
import testimonialDoctor from "@/assets/testimonial-doctor.jpg";
import CountUp from "react-countup";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import bannerImage from "../../Banner.png";
import {
  Briefcase,
  UserCheck,
  FileText,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import underlineImage from "/Vector (1).png";
import { CalendarDays } from "lucide-react";
import dayjs from "dayjs";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Facialinjectables from "@/assets/Facial-injectables.png";
import HairTransplant from "@/assets/Hair-Transplant.png";
import ClinicalCosmetology from "@/assets/Clinical-Cosmetology.png";
import DiplomaFacialInjectables from "@/assets/Diploma-Facial-Injectables.png";
import SkinTechnician from "@/assets/Skin-Technician.png";
import DiplomaClinicalCosmetology from "@/assets/Diploma-Clinical-Cosmetology.png";
import FacialAesthetics from "@/assets/Facial-Aesthetics.png";
import ClinicalTrichology from "@/assets/Clinical-Trichology.png";
import MediFacial from "@/assets/Medi-Facial.png";
import ChemicalPeel from "@/assets/Chemical-Peel.png";
import Lasers from "@/assets/Lasers.png";
import Makeup from "@/assets/Makeup.png";
import AdvancedMakeup from "@/assets/Advanced-Makeup.png";
import Hydrafacial from "@/assets/Hydrafacial.png";
import Underline from "/line.png";
import CertificateInjectables from "@/assets/Certificate-Injectables.png";
import duration from "dayjs/plugin/duration";
import BannerWithCountdown from "@/components/BannerWithCountdown";
import ContactFormModal from "../components/ContactFormModal";
import emailjs from "@emailjs/browser";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";

dayjs.extend(duration);

const targetDate = dayjs("2025-08-10T00:00:00");

const LandingPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState("fellowship");
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);
    const contentRefs = useRef([]);
     const location = useLocation();

    useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // Add delay to ensure the element is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

     const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const stats = [
    { icon: Users, label: "Students Graduated", value: 15000, suffix: "+" },
    { icon: Award, label: "Success Rate", value: 98, suffix: "%" },
    { icon: BookOpen, label: "Programs Offered", value: 25, suffix: "+" },
    { icon: Clock, label: "Years of Excellence", value: 20, suffix: "+" },
  ];

  const affiliations = [
    { src: "./1750748998_kab.jpg", alt: "ISO 21001:2018" },
    { src: "./1750749088_iso_certified_compay.jpg", alt: "IAF" },
    { src: "./1750749113_iso15.jpeg", alt: "KAB" },
    { src: "./1750755119_Red_Logo_NoBG.png", alt: "ISO 9001:2015" },
    { src: "./Rectangle+507.png", alt: "Global Business Process" },
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

  const categories = [
    // { id: "all", name: "All Programs" },
    // { id: "master", name: "Master Courses" },
    // { id: "pg", name: "PG Diploma" },
    { id: "fellowship", name: "Fellowship Courses" },
    { id: "certificate", name: "Certificate Courses" },
    // { id: "workshop", name: "Live Workshop" },
  ];

   const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "Requirements vary by program but generally include a high school diploma or equivalent, completion of prerequisite courses, and passing entrance exams.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer various financial aid options including federal aid, scholarships, and payment plans. Our financial aid office can help you explore all available options.",
    },
    {
      question: "How long are the programs?",
      answer:
        "Program lengths vary from 8 months to 24 months depending on the specific healthcare career track you choose.",
    },
    {
      question: "Are classes available in the evening?",
      answer:
        "Yes, we offer flexible scheduling including day, evening, and weekend options to accommodate working professionals.",
    },
    {
      question: "What is the job placement rate?",
      answer:
        "Our graduates have a 92% job placement rate within 6 months of graduation, with many hired directly by their internship sites.",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Master in Facial Injectables",
      category: "master",
      duration: "5 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "This specialized postgraduate program trains medical professionals in injectable treatments like Botox, dermal fillers, and threads. Emphasizing facial aesthetics and aging, it delivers deep theoretical insights and hands-on experience.",
      features: [
        "Botox & Dermal Fillers",
        "Thread Lifting Techniques",
        "Non-Surgical Facial Aesthetics",
        "Gravity of Aging Rejuvenation",
      ],
      image: Facialinjectables, // replace with actual image import if needed
      featured: true,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 2,
      title: "Master in Hair Transplant",
      category: "master",
      duration: "3 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Designed for surgeons and dermatologists aiming to specialize in hair restoration. Covers both surgical and non-surgical techniques for effective hair transplant procedures, including patient confidence building.",
      features: [
        "Surgical Hair Transplant Techniques",
        "Non-Surgical Hair Retention Methods",
        "Advanced Restoration Skills",
        "Patient Confidence Enhancement",
      ],
      image: HairTransplant, // replace with actual image import
      featured: true,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 3,
      title: "PG Diploma in Clinical Cosmetology",
      category: "pg",
      duration: "2 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "An advanced program tailored for medical professionals looking to master cosmetic treatments for skin, hair, and laser. Blends deep theoretical knowledge with practical training using the latest aesthetic equipment.",
      features: [
        "Advanced Skin, Hair & Laser Treatments",
        "Use of Modern Aesthetic Equipment",
        "Medical Safety & Ethics",
        "Real-World Confidence Building",
      ],
      image: ClinicalCosmetology, // swap with your real asset
      featured: true,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 4,
      title: "PG Diploma in Facial Injectables",
      category: "pg",
      duration: "3 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "A short yet power-packed diploma for mastering Botox, dermal fillers, and thread lifts. Focused on medical aesthetics, this program ensures legal, ethical, and confident practice in your clinical journey.",
      features: [
        "Injectable Mastery: Botox, Fillers & Threads",
        "Ethics & Safety in Aesthetic Practice",
        "Non-Surgical Rejuvenation Skills",
        "Career Boost in Competitive Aesthetic Field",
      ],
      image: DiplomaFacialInjectables,
      featured: true,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 5,
      title: "Diploma in Aesthetic Skin Technician",
      category: "pg",
      duration: "5 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "Comprehensive hands-on training for Nurses and OT professionals to perform advanced skin care procedures. This career-boosting diploma mixes theory with practice under expert guidance.",
      features: [
        "Advanced Aesthetic Skin Care",
        "Hands-On Training for Nurses & OT Techs",
        "Career Pathway in Aesthetic Medicine",
        "Guided Practical Sessions",
      ],
      image: SkinTechnician,
      featured: true,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Nurses, OT Technicians, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 6,
      title: "Fellowship in Clinical Cosmetology",
      category: "fellowship",
      duration: "6 months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "In-depth training in clinical cosmetology with a focus on advanced skin care, anti-aging treatments, and non-surgical aesthetic techniques. Blends theoretical learning with real-world skills.",
      features: [
        "Advanced Skin Treatments",
        "Non-Surgical Aesthetics",
        "Customized Treatment Planning",
        "Clinical Application",
      ],
      image: DiplomaClinicalCosmetology,
      featured: true,
      eligibility: "MBBS, MDS, BDS, BHMS, BAMS, BUMS, BNYS",
      link: "/FellowCosmetology",
    },
    {
      id: 7,
      title: "Fellowship in Facial Aesthetics",
      category: "fellowship",
      duration: "6 months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "Comprehensive program focused on Hair & Skin Science, cosmetic procedures, non-surgical aesthetic techniques, and ethics in practice. Designed for professionals in aesthetic medicine.",
      features: [
        "Facial Rejuvenation Techniques",
        "Non-Surgical Procedures",
        "Medical Ethics & Safety",
        "Hair & Skin Science",
      ],
      image: FacialAesthetics,
      featured: true,
      link: "/FacialAesthetic",
      eligibility:
        "MBBS, MD, MDS, BDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh",
    },
    {
      id: 8,
      title: "Fellowship in Clinical Trichology",
      category: "fellowship",
      duration: "6 months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Specialized training in diagnosis and treatment of hair and scalp disorders. Includes modern trichology techniques and alternative treatments like prosthetics and scalp micropigmentation.",
      features: [
        "Hair & Scalp Disorder Management",
        "Micropigmentation",
        "Hair Restoration Options",
        "Clinical Trichology Foundations",
      ],
      image: ClinicalTrichology,
      featured: false,
      link: "/trichology",
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MD DVL, MS, MCh",
    },

    {
      id: 9,
      title: "Certificate Course in Medi Facial",
      category: "certificate",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "Covers advanced facial treatments targeting skin concerns like acne, pigmentation, and dullness. Focuses on rejuvenation using non-invasive techniques with an emphasis on patient assessment and treatment customization.",
      features: [
        "Skin Rejuvenation Techniques",
        "Non-Invasive Treatments",
        "Custom Facial Protocols",
        "Post-Procedure Care",
      ],
      image: MediFacial,
      featured: true,
      link: "/medi-facial",
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Non-Doctors, Paramedical, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 10,
      title: "Certificate Course in Chemical Peel",
      category: "certificate",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Focused on chemical exfoliation and skin rejuvenation techniques. Teaches appropriate peel selection, application, safety, and combination treatments for various skin conditions.",
      features: [
        "Superficial to Deep Peels",
        "Skin Layer Science",
        "Pigmentation & Acne Solutions",
        "Combination & Complication Management",
      ],
      image: ChemicalPeel,
      featured: false,
      link: "/chemical-peel",
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 11,
      title: "Certificate Course in Lasers",
      category: "certificate",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "A deep dive into laser technology in medical aesthetics. Learn laser physics, patient assessment, and perform treatments like hair removal, pigmentation correction, and scar revision safely.",
      features: [
        "Laser Physics & Skin Interaction",
        "Hair & Pigmentation Treatments",
        "Scar Revision Techniques",
        "Laser Safety & Patient Handling",
      ],
      image: Lasers,
      featured: true,
      link: "/laser",
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 12,
      title: "Certificate Course in Semi-permanent Make Up",
      category: "certificate",
      duration: "3 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "Trains practitioners in cosmetic tattooing including microblading, lip blush, eyeliner, and scalp micropigmentation. Includes safety, pigment theory, and client customization.",
      features: [
        "Microblading & Lip Blush",
        "Eyeliner Tattooing",
        "Scalp Micropigmentation",
        "Color Theory & Aftercare",
      ],
      image: Makeup,
      featured: false,
      link: "/semi-makeup",
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon), Non Medical",
    },
    {
      id: 13,
      title: "Certificate Course in Advanced Semi-Permanent Makeup",
      category: "certificate",
      duration: "5 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "An advanced version of the SPMU course, covering detailed cosmetic tattooing with expert-level techniques and tools for enhanced facial aesthetics.",
      features: [
        "Advanced Microblading",
        "Multi-Zone Pigmentation Techniques",
        "Natural Look Design",
        "Complication Handling",
      ],
      image: AdvancedMakeup,
      featured: true,
      link: "/adv-semi-makeup",
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 14,
      title: "Certificate Course in Injectables",
      category: "certificate",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Specialized training in skin rejuvenation and injectable procedures such as botulinum toxin and dermal fillers. Combines facial anatomy with hands-on skills in contouring and anti-aging.",
      features: [
        "Botulinum Toxin & Dermal Fillers",
        "Facial Mapping & Marking",
        "Threads & Lifting Techniques",
        "Minimally Invasive Rejuvenation",
      ],
      image: CertificateInjectables,
      featured: true,
      link: "/injectables",
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 15,
      title: "Workshop in HydraFacial & Basic Chemical Peels",
      category: "workshop",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Hands-on training in HydraFacial and basic chemical peels. Learn cleansing, exfoliation, hydration, serum infusion, and peel application techniques. Master safety protocols, client needs, and post-treatment care.",
      features: [
        "HydraFacial Techniques & Serums",
        "Skin Analysis & Peel Selection",
        "Application & Post-Treatment Protocols",
        "Complication Management",
      ],
      image: Hydrafacial, // or whatever image asset you're using
      featured: true,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
    },
    {
      id: 16,
      title: "Workshop in Semi-Permanent Makeup (SPMU)",
      category: "workshop",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Comprehensive workshop on microblading, powder brows, lip blush, and eyeliner enhancement. Covers client consultation, pigment selection, tool handling, and aftercare guidance.",
      features: [
        "Microblading & Powder Brows",
        "Lip Blush & Eyeliner Techniques",
        "Skin Prep & Pigment Selection",
        "Safety Protocols & Client Aftercare",
      ],
      image: Makeup,
      featured: true,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.category?.toLowerCase() === selectedCategory.toLowerCase()
  );

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

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Graduate, Medical Assistant Program",
      content:
        "The hands-on training and experienced instructors prepared me perfectly for my career. I felt confident from day one in my new position.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Nursing Program Graduate",
      content:
        "The clinical rotations gave me real-world experience that made all the difference. The support from faculty was incredible throughout the program.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Pharmacy Tech Graduate",
      content:
        "I loved the modern facilities and the way they kept the curriculum updated with the latest industry standards. Highly recommend!",
      rating: 5,
    },
  ];

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_qwzr0ek", // Your EmailJS service ID
      "template_wkm4avs", // Your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "NfEcae-M2BEDXk3Po" // Your public key
    )
    .then(
      () => {
       

        // ✅ Trigger Google Ads Conversion
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17387012267/asypCIXluIEbEKuB4-JA", // 🔁 Replace with actual IDs
          });
        }

        // ✅ Clear the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // ✅ Redirect to thank you page
        navigate("/thankyou");
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      }
    );
};

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const featuredRef = useRef(null);
  const certificationRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };



  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Medical training facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8">
          <div
            className="max-w-3xl mx-auto text-center text-white space-y-6"
            data-aos="fade-up"
          >
            <h1 className="font-manrope text-3xl lg:text-5xl mb-3 text-primary-foreground leading-tight">
              Welcome to DrEduMed Coimbatore!
            </h1>
            {/* <h5 className="font-manrope text-2xl lg:text-4xl mb-5 text-primary-foreground leading-tight">
              Your Path to a Successful Career in <br />
              Medical & Aesthetics
            </h5> */}
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Are you looking to expand your skills in the growing field of
              aesthetics? <br />
              Join DrEduMed’s expert-led programs in Coimbatore and become a
              certified professional in medical aesthetics.
            </p>
            <a href="#enroll-section">
              <Button size="lg" variant="gradient" className="group mt-5">
                Enroll now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="relative py-24 bg-secondary/30 overflow-hidden"> */}
      {/* Abstract Blob Background */}
      {/* <div className="absolute inset-0-z-10">
          <svg
            className="absolute top-[-5rem] left-[-4rem] w-[350px] h-[350px] opacity-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#032c40"
              d="M50,-64.9C66.2,-54.7,80.1,-38.5,80.8,-21.7C81.6,-4.8,69.1,12.7,57.4,28.5C45.7,44.2,34.8,58.1,19.8,64.6C4.9,71.2,-14.1,70.3,-31.8,63.6C-49.4,57,-65.6,44.5,-72.8,28.2C-79.9,11.9,-78,-8.2,-68.2,-24.4C-58.3,-40.6,-40.5,-52.9,-22.4,-60.5C-4.4,-68.1,13.8,-70,30.4,-64.9C47,-59.8,63.8,-47.6,50,-64.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          ref={ref}
          data-aos="fade-up"
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
            data-aos="fade-right"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-aos="fade-left"
              > */}
      {/* Icon Bubble */}
      {/* <div className="bg-gradient-to-br from-primary to-[#1e6f72] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="text-white h-8 w-8" />
                </div> */}

      {/* Count-up Number */}
      {/* <div
                  className="text-4xl lg:text-5xl font-manrope font-extrabold text-primary mb-2"
                  data-aos="fade-left"
                >
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator=","
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    "0"
                  )}
                </div> */}

      {/* Label */}
      {/* <div className="text-muted-foreground text-base font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </section> */}

      {/* About Preview Section */}

      {/* Featured Courses Section */}

      {/* Testimonials Section */}
      {/* <section className="py-20" data-aos="fade-down">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> */}
      {/* Image Section */}
      {/* <div className="animate-fade-in w-full flex justify-center">
              <img
                src={testimonialDoctor}
                alt="Happy graduate"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500 w-full max-w-md sm:max-w-lg lg:max-w-full"
              />
            </div> */}

      {/* Text & Carousel Section */}
      {/* <div className="animate-slide-up text-center lg:text-left">
              <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
                Success Stories
              </h2>

              <div className="flex justify-center lg:justify-start">
                <img
                  src={underlineImage}
                  alt="Underline design"
                  className="w-[140px] sm:w-[180px] lg:w-[220px] mt-2 mb-6"
                  data-aos="fade-up"
                />
              </div>

              <div className="w-full">
                <Carousel autoPlay interval={6000} showDots responsive>
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Featured Courses
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>

            {/* Category Filter */}
            <div
              id="category-filter"
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "gradient" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className={`group relative flex flex-col overflow-hidden shadow-card hover-lift hover:shadow-hover transition-all duration-300 ${
                  course.featured ? "ring-2 ring-primary/20" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Internship badge on hover */}
                {course.category !== "certificate" &&
                  course.category !== "workshop" &&
                  course.id !== 5 && (
                    <div className="pointer-events-none absolute top-2 right-2 z-30">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
                        Internship available
                      </div>
                    </div>
                  )}

                <div className="aspect-video overflow-hidden rounded-lg p-4 bg-white">
                  <div className="w-full h-full overflow-hidden rounded-md">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {
                          categories.find((cat) => cat.id === course.category)
                            ?.name
                        }
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {course.description}
                    </p>
                  </div>

                  <Link to={course.link}>
                    <button className="text-sm text-white bg-[#032c40] px-4 py-2 rounded hover:bg-[#054455] transition">
                      Learn More
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        id="enroll-section"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="font-manrope text-3xl lg:text-3xl text-primary text-center mb-5">
            Enroll Now
          </h3>
          <div className="bg-[#f9f9f9] text-gray-800 rounded-2xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Email address"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Phone number"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Write your message here"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#002B40] hover:bg-[#01465d] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
                </svg>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-manrope">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Dr.EduMed?
            </span>
          </h2>
          <img
            src={underlineImage} // Replace with actual import or path
            alt="Underline design"
            className="w-[180px] lg:w-[220px] mx-auto mt-2 mb-6 inline-block mt-6"
            data-aos="fade-up"
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

        <section
        className="w-full py-16 px-4 sm:px-6 lg:px-20"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading with gradient */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text mb-10">
            Affiliation & Accreditation
          </h2>

          {/* Logos Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 place-items-center"
            data-aos="fade-down"
          >
            {affiliations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-blue-100 w-[150px] h-[150px] flex justify-center items-center overflow-hidden px-4"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20 bg-secondary/30" data-aos="fade-down">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <img
              src={Underline}
              alt="Underline design"
              className="w-[140px] sm:w-[180px] lg:w-[220px] mt-2 mb-6 inline-block"
              data-aos="fade-up"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about our programs and
              admissions process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-border rounded-lg bg-white shadow-card hover:shadow-hover transition-all duration-300"
                >
                  {/* Clickable Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <h3 className="text-lg font-semibold text-primary">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300 rotate-180" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300" />
                    )}
                  </button>

                  {/* Expandable Answer with Smooth Height Transition */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease, opacity 0.3s ease",
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="px-6 pb-4 text-muted-foreground leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section
        className="relative w-full my-10 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <BannerWithCountdown />
      </section> */}
    </div>
  );
};

export default LandingPage;
