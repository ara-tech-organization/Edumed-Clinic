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
      title: "Medical Assistant",
      duration: "12 months",
      description:
        "Comprehensive training in patient care, medical procedures, and administrative tasks.",
      image: medicalStudents,
    },
    {
      title: "Nursing Program",
      duration: "18 months",
      description:
        "Advanced nursing education with clinical rotations and hands-on experience.",
      image: medicalStudents,
    },
    {
      title: "Pharmacy Technician",
      duration: "9 months",
      description:
        "Learn pharmaceutical calculations, drug interactions, and pharmacy operations.",
      image: medicalStudents,
    },
    {
      title: "Dental Assistant",
      duration: "10 months",
      description:
        "Master dental procedures, patient prep, and lab work essentials.",
      image: medicalStudents,
    },
    {
      title: "Radiology Technician",
      duration: "15 months",
      description:
        "Train in X-ray imaging, safety protocols, and diagnostic support.",
      image: medicalStudents,
    },
    {
      title: "Health Admin Course",
      duration: "8 months",
      description:
        "Get skilled in healthcare management, billing systems, and hospital admin tasks.",
      image: medicalStudents,
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

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" data-aos="fade-down">
          <img
            src={heroImage}
            alt="Medical training facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          data-aos="fade-up"
        >
          <div className="max-w-4xl animate-fade-in">
            <h1 className="font-manrope text-3xl lg:text-5xl mb-3 text-primary-foreground leading-tight">
              Welcome to DrEduMed Coimbatore!
            </h1>
            <h5 className="font-manrope text-2xl lg:text-4xl mb-5 text-primary-foreground leading-tight">
              Your Path to a Successful Career in Medical & Aesthetics
            </h5>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Are you looking to expand your skills in the growing field of
              aesthetics? Join DrEduMed’s expert-led programs in Coimbatore and
              become a certified professional in medical aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" className="group">
                Explore Our Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button size="xl" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-secondary/30 overflow-hidden">
        {/* Abstract Blob Background */}
        <div className="absolute inset-0-z-10">
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
              >
                {/* Icon Bubble */}
                <div className="bg-gradient-to-br from-primary to-[#1e6f72] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="text-white h-8 w-8" />
                </div>

                {/* Count-up Number */}
                <div
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
                </div>

                {/* Label */}
                <div className="text-muted-foreground text-base font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <Button variant="gradient" size="lg" className="group">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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
            <h2 className="font-manrope text-4xl lg:text-5xl text-white mb-6">
              Featured Programs
            </h2>
            <img
              src={underlineImage} // Replace with actual import or path
              alt="Underline design"
              className="w-[180px] lg:w-[220px] mx-auto mt-2 mb-6 inline-block"
              data-aos="fade-up"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular training programs designed to launch
              your healthcare career with confidence and expertise.
            </p>
          </div>

          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ArrowLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ArrowRight className="h-6 w-6 text-primary" />
            </button>

            {/* Carousel */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-2 hide-scrollbar"
            >
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="min-w-[300px] md:min-w-[340px] shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {course.title}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
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

          {/* Logos */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 place-items-center"
            data-aos="fade-down"
          >
            {affiliations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 w-full max-w-[150px] flex justify-center items-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-contain"
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
