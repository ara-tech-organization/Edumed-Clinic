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
import CertificateInjectables from "@/assets/Certificate-Injectables.png";

import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const targetDate = dayjs("2025-07-31T00:00:00");

const Index = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

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
      title: "Certificate Course in Medi Facial",
      duration: "2 Days",
      description:
        "Focused on chemical exfoliation and skin rejuvenation techniques. Teaches appropriate peel selection, application, safety, and combination treatments for various skin conditions.",
      image: MediFacial,
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image and gradient overlay */}
        <div className="absolute inset-0 z-0" data-aos="fade-down">
          <img
            src={heroImage}
            alt="Medical training facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>

        {/* Content block centered */}
        <div
          className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex justify-center items-center"
          data-aos="fade-up"
        >
          <div className="max-w-4xl text-center animate-fade-in">
            <h1 className="font-manrope text-3xl lg:text-5xl mb-3 text-primary-foreground leading-tight">
              Welcome to DrEduMed Coimbatore!
            </h1>
            <h5 className="font-manrope text-2xl lg:text-4xl mb-5 text-primary-foreground leading-tight">
              Your Path to a Successful Career in <br />
              Medical & Aesthetics
            </h5>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Are you looking to expand your skills in the growing field of
              aesthetics? <br />
              Join DrEduMed’s expert-led programs in Coimbatore and become a
              certified professional in medical aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/courses">
                <Button size="xl" variant="hero" className="group">
                  Explore Our Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" data-aos="fade-right">
              <h2
                className="font-manrope text-4xl lg:text-5xl text-primary mb-6"
                data-aos="fade-up"
              >
                About DrEduMed Coimbatore
              </h2>
              {/* Underline Image */}
              <img
                src={underlineImage} // Replace with actual import or path
                alt="Underline design"
                className="w-[180px] lg:w-[220px] mt-2 mb-6"
                data-aos="fade-up"
              />
              <p
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
                data-aos="fade-up"
              >
                DrEduMed is a prestigious institution dedicated to providing
                world-class aesthetic training. Our Coimbatore branch offers
                comprehensive programs that cater to both beginners and
                professionals looking to refine their skills.
              </p>
              <p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                data-aos="fade-up"
              >
                With expert trainers and state-of-the-art facilities, we ensure
                that our students are prepared to excel in the field of
                aesthetics.
              </p>
              <Link to="/about">
                <Button variant="gradient" size="lg" className="group">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in" data-aos="fade-left">
              <img
                src={medicalStudents}
                alt="Medical students learning"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
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

      {/* Featured Courses Section */}
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
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
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
                  className="min-w-[300px] md:min-w-[340px] shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in flex flex-col"
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
              <Link to="/courses">
                <Button
                  size="xl"
                  variant="hero"
                  className="group bg-[#032c40] text-white border border-[#032c40] hover:bg-white hover:text-amber-100 transition-all duration-300"
                >
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
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ArrowLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={() => scroll(certificationRef, "right")}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ArrowRight className="h-6 w-6 text-primary" />
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
                  className="min-w-[300px] md:min-w-[340px] shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in flex flex-col"
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" data-aos="fade-down">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="animate-fade-in w-full flex justify-center">
              <img
                src={testimonialDoctor}
                alt="Happy graduate"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500 w-full max-w-md sm:max-w-lg lg:max-w-full"
              />
            </div>

            {/* Text & Carousel Section */}
            <div className="animate-slide-up text-center lg:text-left">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-3xl lg:text-4xl text-primary-foreground mb-6">
              Enroll in DrEduMed Coimbatore Today! Ready to Kickstart Your
              Career?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Join the DrEduMed Coimbatore branch and gain access to
              industry-leading aesthetic courses.Start your journey today and be
              part of the fastest-growing field in medical aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Apply Today
              </Button> */}
              <Link to="/contact">
                <Button
                  size="xl"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
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

      <section
        className="relative w-full my-10 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          {/* ⏱️ Countdown Box */}
          <div className="bg-[#032c40] text-white py-8 px-4 sm:px-6 md:px-10 lg:px-12 rounded-xl shadow-xl flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 sm:gap-8">
            {/* Left: Start Date */}
            <div className="flex items-center gap-3">
              <CalendarDays className="w-6 h-6 text-white" />
              <div>
                <p className="font-semibold">
                  Workshop in Semi-Permanent Makeup
                </p>
                <p className="text-sm opacity-80">Starting at</p>
                <p className="text-xl font-semibold whitespace-nowrap">
                  July 31, 2025
                </p>
              </div>
            </div>

            {/* Center: Countdown */}
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

            {/* Right: CTA Button */}
            <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#032c40] transition whitespace-nowrap">
              Enroll now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
