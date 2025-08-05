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
import ClinicalTrichology from "@/assets/Clinical-Trichology.png";
import React from "react";

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

const ClinicTrichology: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // Hardcoded course data
  const course: Course = {
    title: "Fellowship in Clinical Trichology",
    duration: "6 months",
    schedule: "Online - Live Sessions & Hands-on",
    eligibility:
      "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    longDescription:
      "Fellowship in Clinical Trichology is a specialized training program for medical professionals aiming to build advanced skills in diagnosing and treating hair and scalp conditions. This program covers trichological science, restoration techniques, and alternative treatments like artificial prosthesis and scalp micropigmentation. It equips students with a holistic understanding of hair biology and offers in-depth clinical exposure to support both independent and institutional practice.",
    image: ClinicalTrichology,
    curriculum: [
       "Module 1: Trichology",
        "Module 2: Hair Loss Pattern",
        "Module 3: Factors Affecting Hair Fall",
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
          question: "What is a fellowship in clinical trichology?",
          answer:
            "Fellowship in clinical trichology is a specialized training program that provides advanced knowledge and diagnostic skills in managing hair and scalp conditions.",
        },
        {
          question: "Who is eligible for a fellowship in Clinical Trichology?",
          answer: "MBBS, BDS, MDS, BHMS, BAMS, BUMS, BNYS",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a detailed course with 6 months of theoretical knowledge and 3–5 days of practical hands-on training.",
        },
        {
          question:
            "Career opportunities after completing clinical trichology?",
          answer:
            "• Opening a private practice focused on hair and scalp conditions.\n• Working in hair restoration clinics.\n• Taking on medical advisory roles in cosmetic or pharmaceutical companies.\n• Serving as a medical director in trichology clinics.",
        },
        {
          question: "Are Fellowships in clinical trichology Accredited?",
          answer: "Yes, it is accredited.",
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
            onClick={() => navigate("/courses")}
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

export default ClinicTrichology;