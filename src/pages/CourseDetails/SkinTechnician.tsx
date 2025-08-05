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
// import Facialinjectables from "@/assets/Facial-injectables.png";
import React from "react";
import SkinTechnician from "@/assets/Skin-Technician.png";

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

const SkinTechnicians: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // Hardcoded course data
  const course: Course = {
    title: "Diploma in Aesthetic Skin Technician",
    duration: "5 Days",
    schedule: "Online - Live Sessions & Hands-on",
    eligibility:
      "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    longDescription:
      "The Diploma in Aesthetic Skin Technician is crafted for nurses and OT professionals aiming to enter the aesthetic industry. This program combines essential theoretical knowledge with immersive, hands-on training in advanced skin procedures like lasers and chemical peels. Taught by industry experts, the course prepares learners to assist in clinical environments, ensuring both safety and precision.",
    image: SkinTechnician,
    curriculum: ["Module 1: Lasers"],
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
          question:
            "What is a Diploma in Aesthetic Skin Technician for non-doctors?",
          answer:
            "A Diploma in Aesthetic Skin Technician for non-doctors is a specialized training program designed for individuals without a medical degree who wish to pursue a career in aesthetic skin care. This program teaches advanced skincare techniques, treatments, and procedures commonly used in medical clinics, such as facials, lasers, minor chemical peels, and other non-invasive treatments.",
        },
        {
          question: "Who is eligible for Diploma in Aesthetic Skin Technician?",
          answer: "Nurse/OT technician/Paramedical",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 3–5 days program with full-fledged hands-on on patients.",
        },
        {
          question: "Is medical knowledge required to enrol?",
          answer:
            "No, a medical background is not required. The program is designed for individuals without a medical degree. However, having a basic understanding of skincare or beauty treatments can be helpful but is not mandatory.",
        },
        {
          question:
            "Can I work in an aesthetic clinic after completing the diploma?",
          answer:
            "Yes, you can work in assisting the doctor in your trained field.",
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

export default SkinTechnicians;
