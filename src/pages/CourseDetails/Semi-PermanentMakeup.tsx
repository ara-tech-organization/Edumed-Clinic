// src/pages/CourseDetails/FaceInjection.tsx
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle,
  BookOpen,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Underline from "/line.png";
import { AnimatePresence, motion } from "framer-motion";
import Facialinjectables from "@/assets/Facial-injectables.png";
import React from "react";
import Makeup from "@/assets/Makeup.png";
import emailjs from "@emailjs/browser";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Course {
  title: string;
  duration: string;
  schedule: string;
  eligibility: string;
  longDescription: string;
  image: string;
  curriculum: string[];
  features: string[];
  faq: FAQItem[];
}

const SemiPermanentMakeup: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

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
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
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


  // Hardcoded course data
  const course: Course = {
    title: "Workshop in Semi-Permanent Makeup",
    duration: "2 Days",
    schedule: "Online - Live Sessions & Hands-on",
    eligibility:
      "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
    longDescription:
      "The Workshop in Semi-Permanent Makeup (SPMU) is an intensive, hands-on training program designed to empower professionals in delivering advanced cosmetic procedures. Covering microblading, lip blush, eyeliner enhancement, and more, the workshop dives deep into skin prep, pigment selection, safety standards, and aftercare guidance — enabling practitioners to confidently provide customized, natural-looking results.",
    image: Makeup,
    curriculum: [
      "Module 1: Introduction to the World of Cosmetology",
        "Module 2: Different Treatments in SPMU",
        "Module 3: Skin Enhancement with SPMU",
        "Module 4: Eyebrow Stroke Practice",
        "Module 5: Eyebrow Mapping Practice",
        "Module 6: Eyebrow Shading Practice",
        "Module 7: Lip Enhancement",
        "Module 8: Lip Neutralizer",
        "Module 9: Latex Practice",
        "Module 10: Beauty Spot Placement",
        "Module 11: Case Selections & Precautions",
    ],
    features: [
      "Comprehensive Course Framework",
      "Hands-On Practical Training",
      "Expert-Led Sessions",
      "Specialized Internships in Medical Aesthetics",
      "Certification & Career Advancement",
      "Post Career Support",
    ],
    faq: [
       {
          question: "What is Workshop in Semi-Permanent Makeup?",
          answer:
            "Workshop in Semi-Permanent Makeup is a practical training program aimed at beauty and medical professionals interested in mastering the techniques of semi-permanent makeup.",
        },
        {
          question: "Who is eligible for the Workshop?",
          answer:
            "MBBS, BDS, MDS, BHMS, BAMS, BUMS, BNYS, Paramedical professionals, and other medically-qualified individuals.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 2-day program with full-fledged hands-on training on patients.",
        },
        {
          question: "What will I learn during the workshop?",
          answer:
            "You’ll learn basic techniques, skin analysis, safety protocols, a variety of SPMU procedures, and effective post-care treatments.",
        },
        {
          question: "Is the program accredited?",
          answer:
            "Yes. Certificate courses in Semi-Permanent Makeup are accredited by recognized beauty or medical organizations.",
        },
    ],
  };

  const toggleFAQ = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <div className="min-h-screen">
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/landingpage")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                {course.title}
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            <div>
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-6 sm:px-12 lg:px-20">
          <Card className="shadow-card w-full hover:bg-grey transition-colors duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-2">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-semibold text-primary">Training Mode</h3>
              </div>
              <p className="font-medium text-muted-foreground ml-8">
                {course.duration}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card w-full hover:bg-grey transition-colors duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-2">
                <Calendar className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-semibold text-primary">Duration</h3>
              </div>
              <p className="font-medium text-muted-foreground ml-8">
                {course.schedule}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card w-full hover:bg-grey transition-colors duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-2">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <h3 className="font-semibold text-primary">Eligible for</h3>
              </div>
              <p className="font-medium text-muted-foreground ml-8">
                {course.eligibility}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button className="w-[300px]" size="xl" variant="metallic">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
              Course Curriculum
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed to prepare you for real-world
              challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className="shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              style={{ backgroundColor: "#7ed4ef1a" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#0f617f] mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    Core Subjects
                  </h3>
                </div>
                <div className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#0f617f]" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              style={{ backgroundColor: "#66d0981a" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Target className="h-6 w-6 text-[#02664f] mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    Key Features
                  </h3>
                </div>
                <h3 className="text-sm text-primary mb-3">
                  This course is for those seeking to:
                </h3>
                <div className="space-y-3">
                  {course.features.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#02664f]" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        id="enroll-section"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="font-manrope text-3xl lg:text-3xl text-primary text-center mb-5">
            Contact Us
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
              Frequently Asked Questions
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {course.faq.map((item, index) => (
                    <div
                      key={index}
                      className={`group border border-gray-200 rounded-lg p-4 transition-all duration-300 ${
                        openIndex === index ? "shadow-md" : ""
                      }`}
                    >
                      <div
                        className="font-semibold text-primary text-lg flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                      >
                        {item.question}
                        <span
                          className={`ml-2 transform transition-transform ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {openIndex === index && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope text-3xl lg:text-3xl text-white">
            Ready to Start Your Journey?
          </h2>
          <img
            src={Underline}
            alt="Decorative Line"
            className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
          />
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful graduates who have launched their
            healthcare careers with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="metallic">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SemiPermanentMakeup;