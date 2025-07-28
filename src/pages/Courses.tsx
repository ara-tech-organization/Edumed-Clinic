import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  Users,
  Award,
  ArrowRight,
  Star,
  Calendar,
  UserCheck,
  FileText,
  ShieldCheck,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import medicalStudents from "@/assets/medical-students.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
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
import CertificateInjectables from "@/assets/Certificate-Injectables.png";
import Hydrafacial from "@/assets/Hydrafacial.png";
import HeadingWithUnderline from "@/components/HeadingWithUnderline";
import Underline from "/line.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "master", name: "Master Courses" },
    { id: "pg", name: "PG Diploma" },
    { id: "fellowship", name: "Fellowship Courses" },
    { id: "certificate", name: "Certificate Courses" },
    { id: "workshop", name: "Live Workshop" },
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

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

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

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      setSelectedCategory(category); // <- You already have this in your state
      const filterElement = document.getElementById("category-filter");

      if (filterElement) {
        setTimeout(() => {
          filterElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // timeout ensures DOM is ready
      }
    }
  }, [location.search]);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-4 lg:py-12 bg-white overflow-hidden">
        {/* Image Container with Padding and Rounded Corners */}
        <div
          className="mx-4 sm:mx-6 lg:mx-8 rounded-3xl bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('./src/assets/Courses - Detailed.jpg')",
          }}
        >
          <div className="rounded-3xl w-full h-full absolute inset-0" />{" "}
          {/* Optional overlay */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
            <div className="max-w-4xl" data-aos="fade-up">
              <div className="inline-block relative">
                <h1 className="font-manrope text-5xl lg:text-7xl text-primary leading-tight relative z-10 mb-5">
                  Our Courses
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

      {/* Features Section */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Why Choose Our ?
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the difference with our comprehensive approach to
              healthcare education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center shadow-card hover-lift hover:shadow-hover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-l font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-manrope">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Dr.EduMed?
            </span>
          </h2>
          <img
            src={Underline}
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

      {/* Course Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Why Choose Our Courses?
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
                className={`flex flex-col overflow-hidden shadow-card hover-lift hover:shadow-hover transition-all duration-300 ${
                  course.featured ? "ring-2 ring-primary/20" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => navigate(`/course/${course.id}`)}
              >
                {/* {course.featured && (
                  <div className="gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )} */}

                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    onClick={() => navigate(`/course/${course.id}`)}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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
                  <Button
                    variant="outline"
                    className="w-full group border-[#032c40] text-[#032c40] hover:bg-[#032c40] hover:text-white transition-colors"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Enrollment Process
              </h2>
            </HeadingWithUnderline>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Simple steps to start your healthcare education journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Apply Online", description: "Complete our simple online application form" },
              { step: "2", title: "Interview", description: "Schedule a consultation with our admissions team" },
              { step: "3", title: "Start Learning", description: "Begin your journey to a rewarding healthcare career" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-white">
                Ready to Begin?
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the next step toward your Medical and Aesthetic career. Our
              admissions team is here to help you choose the right program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                variant="metallic"
                onClick={() => navigate("/contact")}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
