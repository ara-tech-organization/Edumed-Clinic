import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  Calendar,
  CheckCircle,
  Star,
  BookOpen,
  Globe,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
        "Masters in Facial Injectables is a specialized postgraduate program designed for medical professionals who desire to gain proficiency in performing injectable treatments like Botox, dermal fillers, and threads. This program provides in-depth knowledge, enormous hands-on experience, and expertise in non-surgical facial treatments aimed at uplifting facial aesthetics in the gravity of ageing.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: Facialinjectables,
      featured: true,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "Masters in Facial Injectables is a specialized postgraduate program designed for medical professionals who desire to gain proficiency in performing injectable treatments like Botox, dermal fillers, and threads. This program provides in-depth knowledge, enormous hands-on experience, and expertise in non-surgical facial treatments aimed at uplifting facial aesthetics in the gravity of ageing.",
      curriculum: [
        "Module 1: Introduction to skin",
        "Module 2: Deformities in skin",
        "Module 3: Indication of Injectables",
        "Module 4: Types of injectables",
        "Module 5: Treatment Execution",
        "Module 6: Post Care",
      ],
      careerOutcomes: [
        "Open your own clinic",
        "Work with dermatologists or plastic surgeons",
        "Offer advanced aesthetic procedures",
      ],
      requirements: [
        "Medical degree or relevant background",
        "Basic knowledge of anatomy & physiology",
        "Commitment to hands-on practice",
      ],
      faq: [
        {
          question: "What is Masters in Facial Injectables?",
          answer:
            "Master's in Facial Injectables is an advanced program for professionals seeking to specialize in non-surgical facial aesthetics. It focuses on injectable treatments, including Botox, dermal fillers, threads and other advanced injectables, for facial rejuvenation and contouring.",
        },
        {
          question: "Who is eligible for a Masters in Facial Injectables?",
          answer: "MDS Maxillofacial Surgeons, MBBS, MD DVL, MS, MCH",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 3–5 days program with full-fledged hands-on on patients.",
        },
        {
          question: "Is the Program Theoretical or Practical?",
          answer:
            "The program integrates both theoretical learning and hands-on practical experience. You will have the opportunity to practice supervised injections on real patients, allowing you to refine your skills and build confidence in your technique.",
        },
        {
          question: "Is the Program Accredited?",
          answer: "Yes, it is accredited.",
        },
      ],
    },

    {
      id: 2,
      title: "Master in Hair Transplant",
      category: "hair",
      duration: "3 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "A Master’s in Hair Transplant is a specialized postgraduate program designed for medical professionals, particularly surgeons and dermatologists, who aim to enhance skills in hair restoration techniques including surgical and non-surgical procedures.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: HairTransplant, // placeholder, same as others
      featured: true,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "A Master’s in Hair Transplant is a specialized postgraduate program designed for medical professionals, particularly surgeons and dermatologists, who aim to enhance skills in hair restoration techniques. This module provides in-depth knowledge and practical training in the latest hair transplant procedures involving both surgical and non-surgical methods to help patients retain hair and regain confidence.",
      curriculum: [
        "Module 1: Trichology",
        "Module 2: Hair loss Pattern",
        "Module 3: Factors affecting hair fall",
        "Module 4: Meso Treatments",
        "Module 5: Dandruff & Treatment",
        "Module 6: Available Treatments for Hair Restoration",
        "Module 7: Post Care follow-up’s",
      ],
      careerOutcomes: [
        "Hair Transplant Specialist",
        "Hair Restoration Consultant",
        "Aesthetic Clinic Practitioner",
      ],
      requirements: [
        "Medical degree or relevant qualification",
        "Understanding of basic dermatology or trichology",
        "Willingness to perform supervised hair procedures",
      ],
      faq: [
        {
          question: "What is a Master’s in Hair Transplant?",
          answer:
            "A Master's in Hair Transplant is an advanced training program for medical professionals who want to specialize in hair restoration. The curriculum covers a range of techniques, including Follicular Unit Extraction (FUE), Follicular Unit Transplantation (FUT), and other contemporary hair restoration methods.",
        },
        {
          question: "Who is eligible for a Master in Hair Transplant?",
          answer: "MDS Maxillofacial Surgeons, MBBS, MD DVL, MS, MCH",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 3-month program with full-fledged hands-on training on patients.",
        },
        {
          question: "Is the Program Theoretical or Practical?",
          answer:
            "The program combines theoretical knowledge with significant practical training. Medical professionals gain hands-on experience performing hair transplant procedures under supervision, allowing them to refine their skills.",
        },
        {
          question: "Are the Transplant Procedures Taught Safe?",
          answer:
            "Yes, safety is a major focus of the program. Medical professionals gain hands-on experience under expert supervision, ensuring they learn safe and effective techniques.",
        },
      ],
    },
    {
      id: 3,
      title: "PG Diploma in Clinical Cosmetology",
      category: "cosmetology",
      duration: "2 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "A Postgraduate Diploma (PG Diploma) in Clinical Cosmetology is a specialized, advanced training program for medical professionals seeking mastery in aesthetic treatments for skin, hair, and laser using advanced clinical equipment.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: ClinicalCosmetology, // placeholder
      featured: true,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "A Postgraduate Diploma (PG Diploma) in Clinical Cosmetology is a specialized, advanced training program for medical professionals seeking knowledge in clinical cosmetic treatments. This diploma combines theory, hands-on practice, and assessments to enhance appearance through safe and ethical skin, hair, and laser treatments. Graduates will gain confidence in performing aesthetic procedures while understanding the legal and safety standards that govern clinical cosmetology.",
      curriculum: [
        "Module 1: Trichology",
        "Module 2: Introduction to Skin",
        "Module 3: Chemical Peel",
        "Module 4: Lasers",
        "Module 5: Machineries in Aesthetics",
      ],
      careerOutcomes: [
        "Clinical Cosmetologist",
        "Aesthetic Consultant",
        "Medical Director at Aesthetic Clinics",
        "Aesthetic Practitioner in Hospitals",
        "Educator in Clinical Cosmetology",
      ],
      requirements: [
        "Medical background (MBBS, BDS, MDS, etc.)",
        "Passion for Aesthetic Medicine",
        "Willingness to engage in clinical practice",
      ],
      faq: [
        {
          question: "What is PG DIPLOMA in Clinical Cosmetology?",
          answer:
            "The Postgraduate Diploma in Clinical Cosmetology is an advanced program designed for medical professionals. It provides in-depth training in non-surgical cosmetic procedures and clinical treatments, hair growth treatment, laser therapy, skin rejuvenation, and more.",
        },
        {
          question: "Who is eligible for PG DIPLOMA in Clinical Cosmetology?",
          answer: "MBBS, BDS, MDS, BHMS, BAMS, BUMS, BYNS",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a detailed course with 1 month of theoretical knowledge and 3–5 days of practical hands-on training.",
        },
        {
          question:
            "What are the career opportunities for this course after completion?",
          answer:
            "After completing the program, you can serve as: • Clinical Cosmetologist • Aesthetic Consultant • Medical Director at Aesthetic Clinics • Aesthetic Practitioner in hospitals • Educator in Clinical Cosmetology",
        },
        {
          question: "Is PG DIPLOMA in Clinical Cosmetology Course Accredited?",
          answer: "Yes, it is accredited.",
        },
      ],
    },
    {
      id: 4,
      title: "PG Diploma in Facial Injectables",
      category: "aesthetics",
      duration: "3 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Advanced hands-on training for medical professionals in Botox, dermal fillers, and thread lift procedures, with a focus on facial aesthetics.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: DiplomaFacialInjectables, // 🔥 Replace with actual image import path when ready
      featured: true,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "A PG Diploma in Facial Injectables is a specialized postgraduate program designed for medical professionals. It offers advanced skills in performing injectable treatments like Botox, dermal fillers, and threads. The program emphasizes non-surgical facial enhancement, safety, ethics, and legal considerations to boost practitioner confidence and career opportunities.",
      curriculum: [
        "Module 1: Introduction to skin",
        "Module 2: Deformities in skin",
        "Module 3: Indication of Injectables",
        "Module 4: Types of injectables",
        "Module 5: Treatment Execution",
        "Module 6: Post Care",
      ],
      careerOutcomes: [
        "Aesthetic Practitioner",
        "Facial Injector",
        "Cosmetic Dermatology Assistant",
        "Aesthetic Clinic Consultant",
      ],
      requirements: [
        "MBBS",
        "MD",
        "MDS (Maxillofacial Surgeons)",
        "MD DVL",
        "MS",
        "MCh",
        "MDS (Oral Maxillofacial Surgeon)",
      ],
      faq: [
        {
          question: "What is a PG Diploma in Facial Injectables?",
          answer:
            "It's an advanced training program for medical professionals specializing in non-surgical injectable treatments like Botox, dermal fillers, and threads.",
        },
        {
          question: "Who is eligible for this program?",
          answer:
            "MDS (Maxillofacial Surgeons), MBBS, MD DVL, MS, MCH, and other qualified medical professionals.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It's a 3-day intensive program with hands-on training on patients.",
        },
        {
          question: "Are the injectables and procedures taught safe?",
          answer:
            "Yes. The course focuses on safety, proper techniques, understanding facial anatomy, and managing complications.",
        },
        {
          question:
            "Can I start my own aesthetic practice after completing this?",
          answer:
            "Absolutely. The diploma provides the skills needed to offer treatments in your own aesthetic practice or clinic.",
        },
      ],
    },
    {
      id: 5,
      title: "Diploma in Aesthetic Skin Technician",
      category: "aesthetics",
      duration: "5 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "A comprehensive hands-on training program designed for Nurses and OT professionals, focusing on advanced skincare procedures and aesthetic treatments.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: SkinTechnician, // 🔥 placeholder – make sure to plug in the real import path
      featured: false,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Nurses, OT Technicians, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "The Diploma in Aesthetic Skin Technician is crafted for nurses and OT professionals aiming to enter the aesthetic industry. This program combines essential theoretical knowledge with immersive, hands-on training in advanced skin procedures like lasers and chemical peels. Taught by industry experts, the course prepares learners to assist in clinical environments, ensuring both safety and precision.",
      curriculum: [
        "Module 1: Lasers",
        "Module 2: Peels",
        "Module 3: Medifacial",
        "Module 4: Non-Surgical/Non-Injectables",
      ],
      careerOutcomes: [
        "Aesthetic Assistant",
        "Laser Technician",
        "Clinic Coordinator in Aesthetic Centers",
        "Skin Therapy Specialist",
      ],
      requirements: [
        "Nursing or Paramedical Background",
        "OT Technician Certification (preferred)",
        "Interest in Skincare and Aesthetics",
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
    },
    {
      id: 6,
      title: "Fellowship in Clinical Cosmetology",
      category: "cosmetology",
      duration: "6 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "A fellowship program offering advanced training in skincare and anti-aging aesthetics, combining non-surgical treatments with real-world clinical expertise for medical professionals.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: DiplomaClinicalCosmetology, // placeholder
      featured: false,
      eligibility: "MBBS, MDS, BDS, BHMS, BAMS, BUMS, BNYS",
      longDescription:
        "The Fellowship in Clinical Cosmetology is an advanced-level program tailored for medical professionals seeking to deepen their expertise in aesthetic skin treatments and anti-aging procedures. With a strong blend of theory and hands-on experience, this course equips participants with the skills required to deliver safe, personalized cosmetic treatments using the latest technologies and techniques.",
      curriculum: [
        "Module 1: Trichology",
        "Module 2: Introduction To Skin",
        "Module 3: Chemical Peel",
        "Module 4: Lasers",
        "Module 5: Machineries in Aesthetics",
        "Module 6: Basics In Semi Permanent Makeup",
        "Module 7: Introduction to Injectables",
      ],
      careerOutcomes: [
        "Clinical Cosmetologist",
        "Aesthetic Practitioner",
        "Skincare Consultant",
        "Laser Technician",
        "Medical Aesthetics Specialist",
      ],
      requirements: [
        "Medical background (MBBS, MDS, BDS, etc.)",
        "Commitment to aesthetic and clinical excellence",
        "Active interest in non-surgical treatments",
      ],
      faq: [
        {
          question: "What is the Fellowship in Clinical Cosmetology?",
          answer:
            "This fellowship provides in-depth training in clinical cosmetology, focusing on advanced skincare and anti-aging techniques. It combines theoretical instruction with practical, real-world clinical experience.",
        },
        {
          question: "Who is eligible for this fellowship?",
          answer: "MBBS, MDS, BDS, BHMS, BAMS, BUMS, BNYS",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It’s a 6-month comprehensive program that includes both live online sessions and hands-on clinical training.",
        },
        {
          question: "What are the key modules included?",
          answer:
            "Trichology, Introduction to Skin, Chemical Peels, and Laser Treatments.",
        },
        {
          question: "What are the career opportunities after completion?",
          answer:
            "Graduates can pursue careers as Clinical Cosmetologists, Aesthetic Practitioners, Laser Specialists, or Consultants in aesthetic clinics and medispas.",
        },
      ],
    },
    {
      id: 7,
      title: "Fellowship in Facial Aesthetics",
      category: "aesthetics",
      duration: "6 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.9,
      price: "$TBD",
      description:
        "This advanced Fellowship in Facial Aesthetics provides in-depth training in non-surgical treatments, skin and hair science, lasers, and aesthetic medicine — empowering medical professionals to elevate facial harmony and restore youthful features with confidence.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: FacialAesthetics, // placeholder
      featured: true,
      eligibility:
        "MBBS, MD, MDS, BDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "This Fellowship in Facial Aesthetics is a comprehensive, hands-on program for medical professionals who want to level up their skills in non-surgical aesthetic treatments. The course blends theoretical learning with real-world practice in areas such as trichology, laser therapy, chemical peels, and facial rejuvenation. It emphasizes medical ethics, safety, and clinical precision to help you build a confident and successful aesthetic practice.",
      curriculum: [
        "Module 1: Trichology",
        "Module 2: Introduction To Skin",
        "Module 3: Chemical Peel",
        "Module 4: Lasers",
        "Module 5: Machineries in Aesthetics",
        "Module 6: Basics In Semi Permanent Makeup",
        "Module 7: Introduction to Injectables",
      ],
      careerOutcomes: [
        "Aesthetic Practitioner",
        "Facial Aesthetician",
        "Cosmetic Dermatology Assistant",
        "Medical Aesthetic Consultant",
        "Clinical Educator in Facial Aesthetics",
      ],
      requirements: [
        "Medical Degree (MBBS, BDS, MDS, etc.)",
        "Interest in Aesthetic Medicine",
        "Commitment to Clinical Practice",
      ],
      faq: [
        {
          question: "What is Fellowship in Facial Aesthetics?",
          answer:
            "Fellowship in Facial Aesthetics is a specialized, advanced training program for professionals who wish to upgrade their skills in non-surgical cosmetic procedures. These procedures include Trichology, lasers, chemical peels, Botox, dermal fillers, thread lifts, and facial contouring.",
        },
        {
          question: "Who is eligible for a Fellowship in Facial Aesthetics?",
          answer: "MBBS, MD, BDS, MDS.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It includes 6 months of theoretical knowledge and 7–8 days of hands-on practical training.",
        },
        {
          question:
            "Am I eligible to start my aesthetic practice after completing the Fellowship course?",
          answer:
            "Yes. After completing this fellowship, you'll gain the expertise to either expand your current medical practice or open your own aesthetic clinic.",
        },
        {
          question: "Are Fellowships in Facial Aesthetics Accredited?",
          answer: "Yes, the program is fully accredited.",
        },
      ],
    },
    {
      id: 8,
      title: "Fellowship in Clinical Trichology",
      category: "aesthetics",
      duration: "6 Months",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "Fellowship in Clinical Trichology is an advanced training program for medical professionals to deepen their knowledge in diagnosing and treating hair and scalp disorders, including modern approaches like artificial prosthesis and scalp micropigmentation.",
      features: [
        "Module 1: Trichology",
        "Module 2: Hair loss Pattern",
        "Module 3: Factors affecting hair fall",
        "Module 4: Meso Treatments",
        "Module 5: Dandruff & Treatment",
        "Module 6: Available Treatments for Hair Restoration",
      ],
      image: ClinicalTrichology, // placeholder
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "Fellowship in Clinical Trichology is a specialized training program for medical professionals aiming to build advanced skills in diagnosing and treating hair and scalp conditions. This program covers trichological science, restoration techniques, and alternative treatments like artificial prosthesis and scalp micropigmentation. It equips students with a holistic understanding of hair biology and offers in-depth clinical exposure to support both independent and institutional practice.",
      curriculum: [
        "Module 1: Trichology",
        "Module 2: Hair Loss Pattern",
        "Module 3: Factors Affecting Hair Fall",
      ],
      careerOutcomes: [
        "Private Trichology Practice",
        "Hair Restoration Clinic Consultant",
        "Medical Advisor in Cosmetic or Pharmaceutical Companies",
        "Medical Director at Trichology Clinics",
      ],
      requirements: [
        "Medical background (MBBS, BDS, MDS, etc.)",
        "Interest in Hair & Scalp Health",
        "Willingness to perform clinical diagnostics and treatments",
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
    },
    {
      id: 9,
      title: "Certificate Course in Medi Facial",
      category: "aesthetics",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "The Certificate Course in Medi Facial trains professionals in advanced facial treatments that address skin concerns like acne, pigmentation, and dullness, combining aesthetics with clinical precision.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: MediFacial, // placeholder, swap when you’ve got that glam shot
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Non-Doctors, Paramedical, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "The Certificate Course in Medifacial offers comprehensive knowledge of advanced facial treatments aimed at targeting specific skin concerns and enhancing overall skin health. The program emphasizes assessment, customization, safety, and post-care protocols. It equips practitioners to perform non-invasive procedures that deliver visible, lasting results.",
      curriculum: [
        "Module 1: Introduction to Facials",
        "Module 2: Introduction to Medifacial",
        "Module 3: Combination Facials",
        "Module 4: Laser Facials",
        "Module 5: Introducing Laser to Skin",
        "Module 6: Selection of Peels",
        "Module 7: Infusion & Enhancement",
        "Module 8: Different Techniques & Approach",
        "Module 9: Patient Selection",
        "Module 10: Treatment Procedure",
        "Module 11: Precautions & Procedures",
      ],
      careerOutcomes: [
        "Medi Facial Specialist",
        "Aesthetic Skincare Consultant",
        "Skin Technician in Aesthetic Clinics",
        "Laser Facial Technician",
        "Paramedical Aesthetician",
      ],
      requirements: [
        "Medical or paramedical background preferred",
        "Basic understanding of skincare helpful but not required",
        "Enthusiasm for aesthetics and patient care",
      ],
      faq: [
        {
          question: "What is a Certificate Course in Medi Facial?",
          answer:
            "This course focuses on advanced facial treatments in a clinical aesthetic context. It covers medical-grade facials, chemical peels, microdermabrasion, and other non-invasive methods to improve skin health and appearance.",
        },
        {
          question: "Who is eligible for the course?",
          answer:
            "MBBS, BDS, MDS, BHMS, BUMS, BAMS, BNYS, paramedical professionals, and non-doctors with a keen interest in aesthetics.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 2-day intensive program with full-fledged hands-on training on live patients.",
        },
        {
          question: "Is prior skincare or beauty experience required?",
          answer:
            "No, but having basic skincare knowledge can be helpful. The program is designed to accommodate beginners too.",
        },
        {
          question: "Do I need to bring any tools or products?",
          answer:
            "Nope — we provide all the equipment, products, and tools during the training period. You just bring the energy.",
        },
      ],
    },
    {
      id: 10,
      title: "Certificate Course in Chemical Peel",
      category: "aesthetics",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "This Certificate Course provides in-depth training in chemical exfoliation techniques for skin rejuvenation and treatment using a wide range of peel types.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Post Career Support",
      ],
      image: ChemicalPeel, // placeholder
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "The Certificate Course in Chemical Peel offers a detailed understanding of chemical exfoliation techniques for skin rejuvenation and treatment. Practitioners will master the science behind skin layers, types of peels, peel penetration, safety protocols, and post-care. From acne to pigmentation, this course equips participants with the knowledge to confidently perform customized peels in clinical settings.",
      curriculum: [
        "Module 1: Detailed function of skin",
        "Module 2: Skin Abnormalities",
        "Module 3: Types of Chemical peel",
        "Module 4: Peel Penetration",
        "Module 5: Glycolic peel",
        "Module 6: Latic Peel",
        "Module 7: Salicylic Peel",
        "Module 8: Phenol peel",
        "Module 9: TCA peel",
        "Module 10: Arginine peel",
        "Module 11: Retinol peel",
        "Module 12: Azelaic Acid peel",
        "Module 13: Benefits and contraindication of a peel",
        "Module 14: Patient selection and procedure",
        "Module 15: Post treatment care",
      ],
      careerOutcomes: [
        "Aesthetic Practitioner",
        "Chemical Peel Specialist",
        "Skin Therapist",
        "Cosmetic Dermatology Assistant",
      ],
      requirements: [
        "Medical or Paramedical Background",
        "Basic Knowledge of Skin Structure",
        "Interest in Aesthetic Procedures",
      ],
      faq: [
        {
          question: "What is a Certificate Course in Chemical Peels?",
          answer:
            "A specialized training program intended for medical professionals and skincare practitioners covering both theory and hands-on application of chemical peeling for skin rejuvenation, acne, pigmentation, and more.",
        },
        {
          question: "Who is eligible for a CC in Chemical Peel?",
          answer:
            "MBBS, BDS, MDS, BHMS, BUMS, BAMS, BNYS, and even non-doctors or paramedical professionals with a passion for skincare.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It’s a 2-day intensive program with full-fledged hands-on training on patients.",
        },
        {
          question: "Is the course suitable for beginners?",
          answer:
            "Absolutely. It’s designed especially for beginners, with foundational training to get you started in the world of chemical peels.",
        },
        {
          question:
            "Will I receive a certificate after completing the program?",
          answer:
            "Yes, successful candidates will receive a Certificate in Chemical Peels, validating their competency in the field.",
        },
      ],
    },
    {
      id: 11,
      title: "Certificate Course in Lasers",
      category: "aesthetics",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "This certificate course offers hands-on laser training for hair removal, pigmentation, acne scars, and skin rejuvenation—empowering practitioners to confidently integrate laser treatments into their aesthetic practice.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: Lasers, // placeholder – replace with your actual import
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "The Certificate Course in Lasers offers an in-depth understanding of laser technology and its medical aesthetic applications. Covering topics from laser physics to patient safety, this course equips professionals to confidently perform treatments such as hair removal, pigmentation correction, acne scar revision, and rejuvenation. With real-time training, practitioners will master clinical execution while ensuring safety and precision.",
      curriculum: [
        "Module 1: Introduction To Skin",
        "Module 2: Detailed function of skin",
        "Module 3: Skin Abnormalities",
        "Module 4: Introduction to LASERS in Aesthetics",
        "Module 5: Functions of Lasers",
        "Module 6: Indications and Precautions",
        "Module 7: Lasers in hair removal",
        "Module 8: Lasers in Skin Resurfacing",
        "Module 9: Tattoo removal in Laser",
        "Module 10: Hollywood Facial With laser",
        "Module 11: Skin rejuvenation",
        "Module 12: Patient selection and Precautions",
        "Module 13: Steps in each Lasers",
        "Module 14: Post treatment Care",
        "Module 15: Post Home remedies",
      ],
      careerOutcomes: [
        "Laser Aesthetician",
        "Aesthetic Practitioner",
        "Skin Therapist",
        "Medical Aesthetic Consultant",
      ],
      requirements: [
        "Medical background or Paramedical degree",
        "Basic knowledge of skin anatomy",
        "Keen interest in laser & aesthetic medicine",
      ],
      faq: [
        {
          question: "What is the Certificate Course in Laser?",
          answer:
            "It’s a specialized training program that teaches medical professionals how to safely and effectively use laser technology for various aesthetic treatments like hair removal, pigmentation, and skin rejuvenation.",
        },
        {
          question: "Who is eligible for a Certificate Course in Laser?",
          answer:
            "MBBS, BDS, MDS, BHMS, BAMS, BUMS, BNYS, and Paramedical professionals are eligible to enroll.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "The course spans 2 days with hands-on training on real patients.",
        },
        {
          question: "Is the course suitable for beginners?",
          answer:
            "Absolutely. It's designed for beginners, offering foundational theory and practical laser skills.",
        },
        {
          question: "What will I learn during the program?",
          answer:
            "You'll learn laser physics, skin interaction, treatment execution, safety protocols, patient selection, and post-treatment care.",
        },
      ],
    },
    {
      id: 12,
      title: "Certificate Course in Semi-Permanent Makeup",
      category: "aesthetics",
      duration: "3-5 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "This certificate course offers detailed training in semi-permanent makeup techniques such as microblading, lip blush, eyeliner tattooing, and scalp micropigmentation, focusing on safety, precision, and natural-looking results.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: Makeup, // placeholder, replace with actual asset
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon), Non-Medical",
      longDescription:
        "The Certificate Course in Semi-Permanent Makeup (SPMU) is a professional training program that equips practitioners with the skills to perform cosmetic tattooing procedures such as microblading, lip blush, and eyeliner tattooing. This course includes theory and practical modules covering pigment selection, skin anatomy, safety protocols, and precision techniques. Hands-on training ensures students learn safe application, custom treatment planning, and client aftercare. The program is ideal for anyone aiming to build a successful career in aesthetic enhancements.",
      curriculum: [
        "Module 1: Introduction to the world of cosmetology",
        "Module 2: Different Treatments in SPMU",
        "Module 3: Skin Enhancement with SPMU",
        "Module 4: Eyebrow Stroke Practice",
        "Module 5: Sheet/latex practice",
        "Module 6: Eyebrow mapping Practice",
        "Module 7: Eyebrow Shading practice",
        "Module 8: Latex /Fruits Practice",
        "Module 9: Lip Enhancement",
        "Module 10: Lip Neutralizer",
        "Module 11: Latex Practice",
        "Module 12: Lip Blush",
        "Module 13: Cheek Blush",
        "Module 14: Beauty Spot Placement",
        "Module 15: Lash Extension",
        "Module 16: Case selections & Precaution",
        "Module 17: Treatment & Progress",
        "Module 18: Post Treatment Care",
        "Module 19: Post Home remedies",
      ],
      careerOutcomes: [
        "SPMU Artist",
        "Cosmetic Tattoo Technician",
        "Brow & Lash Specialist",
        "Aesthetic Clinic Assistant",
        "Independent Beauty Practitioner",
      ],
      requirements: [
        "Medical or Paramedical Background (MBBS, BDS, BHMS, etc.)",
        "Open to Non-Medical Professionals with Interest in Aesthetics",
        "Commitment to Hygiene and Client Safety Standards",
      ],
      faq: [
        {
          question: "What is the Certificate Course in Semi-Permanent Makeup?",
          answer:
            "It's a specialized training program that teaches professionals to perform semi-permanent makeup procedures such as eyebrow tattoos, eyeliner tattoos, lip blush, and more.",
        },
        {
          question: "Who is eligible for the course?",
          answer:
            "MBBS, BDS, MDS, BHMS, BAMS, BUMS, BNYS, Paramedical professionals, and even Non-Medical aspirants interested in aesthetic practice.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 3–5 day program with full-fledged hands-on training on patients.",
        },
        {
          question: "Is the program theoretical or practical?",
          answer:
            "It blends theoretical knowledge with practical training. Students learn techniques and practice on models under expert supervision.",
        },
        {
          question: "Is the program accredited?",
          answer:
            "Yes, the Certificate Course in Semi-Permanent Makeup is accredited by recognized beauty or medical organizations.",
        },
      ],
    },
    {
      id: 13,
      title: "Certificate Course in Advanced Semi-Permanent Makeup",
      category: "aesthetics",
      duration: "5 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "This certificate course in Semi-Permanent Makeup (SPMU) trains professionals in cosmetic enhancements like microblading, lip blush, eyeliner tattooing, and scalp micropigmentation with strong focus on safety and precision.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: AdvancedMakeup, // replace with actual image import
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon), Paramedical",
      longDescription:
        "The Certificate Course in Advanced Semi-Permanent Make-Up (SPMU) offers comprehensive training in cosmetic procedures designed to enhance facial aesthetics. Covering everything from microblading to lash extensions, this program includes pigment theory, facial anatomy, safety protocols, and hands-on practice. Practitioners gain the skills needed to deliver customized, safe, and natural-looking results in modern aesthetic practice.",
      curriculum: [
        "Module 1: Introduction to the world of cosmetology",
        "Module 2: Different Treatments in SPMU",
        "Module 3: Skin Enhancement with SPMU",
        "Module 4: Eyebrow Stroke Practice",
        "Module 5: Sheet/latex practice",
        "Module 6: Eyebrow mapping Practice",
        "Module 7: Eyebrow Shading practice",
        "Module 8: Latex /Fruits Practice",
        "Module 9: Lip Enhancement",
        "Module 10: Lip Neutralizer",
        "Module 11: Latex Practice",
        "Module 12: Lip Blush",
        "Module 13: Cheek Blush",
        "Module 14: Beauty Spot Placement",
        "Module 15: Lash Extension",
        "Module 16: Case selections & Precaution",
        "Module 17: Treatment & Progress",
        "Module 18: Post Treatment Care",
        "Module 19: Post Home remedies",
      ],
      careerOutcomes: [
        "SPMU Technician",
        "Aesthetician",
        "Beauty Clinic Specialist",
        "Cosmetic Procedure Assistant",
        "Freelance Makeup Technician",
      ],
      requirements: [
        "Medical or Paramedical Background",
        "Basic Understanding of Skin Anatomy",
        "Interest in Cosmetic Procedures",
      ],
      faq: [
        {
          question: "What is CC in Advanced Semi-Permanent Makeup?",
          answer:
            "Advanced semi-permanent makeup involves cosmetic techniques to enhance facial features such as eyebrows, eyeliner, lips, and scalp. It uses specialized tools and pigments for long-lasting, natural-looking effects.",
        },
        {
          question: "Who is eligible for CC in Semi-Permanent Makeup?",
          answer:
            "MBBS, BDS, MDS, BHMS, BUMS, BAMS, BNYS, and Paramedical professionals.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 5-day program with full-fledged hands-on practice on patients.",
        },
        {
          question: "What will I learn during the course?",
          answer:
            "You'll learn basic techniques, skin analysis, pigment theory, safety protocols, eyebrow microblading, lip tint, lip neutralization, cheek blush, vitiligo camouflage, BB glow, and post-treatment care.",
        },
        {
          question: "Is the program accredited?",
          answer:
            "Yes, Certificate Courses in Semi-Permanent Makeup are accredited by recognized beauty and medical organizations.",
        },
      ],
    },
    {
      id: 14,
      title: "Certificate Course in Injectables",
      category: "aesthetics",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.8,
      price: "$TBD",
      description:
        "A Certificate Course in Injectables offering hands-on training for medical professionals in botulinum toxin, dermal fillers, and threads with clinical safety and patient handling.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: CertificateInjectables, // replace with your asset
      featured: false,
      eligibility:
        "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "This Certificate Course in Skin & Injectables offers specialized training in advanced skin treatments and injectable procedures. The curriculum covers facial anatomy, patient assessment, and precise application of injectables including botulinum toxin and dermal fillers. Practitioners gain practical experience in skin rejuvenation, tightening, and contouring with a strong emphasis on safety and ethical clinical practices.",
      curriculum: [
        "Module 1: Botox in detail",
        "Module 2: Case study",
        "Module 3: Patient Assessment",
        "Module 4: Botox Skin Tightening",
        "Module 5: Botox Indication",
        "Module 6: Feature Refining",
        "Module 7: Preventions & Precautions in Botox",
        "Module 8: Patient Handling",
        "Module 9: Fillers in Detail",
        "Module 10: Case Study",
        "Module 11: Patient Assessment",
        "Module 12: Volume Creation",
        "Module 13: Filler Enhancement",
        "Module 14: Case study",
        "Module 15: Patient Assessment",
        "Module 16: Face PRP",
        "Module 17: Face Mesotherapy",
      ],
      careerOutcomes: [
        "Facial Injector",
        "Aesthetic Practitioner",
        "Skin & Injectables Specialist",
        "Clinical Aesthetic Assistant",
      ],
      requirements: [
        "Medical background (MBBS, BDS, MDS, etc.)",
        "Interest in aesthetic injectables",
        "Willingness to engage in practical, hands-on training",
      ],
      faq: [
        {
          question: "What is Certificate Course in Injectables?",
          answer:
            "Certificate in Injectables is an advanced training program for medical professionals covering Botox, dermal fillers, threads, and other minimally invasive aesthetic treatments.",
        },
        {
          question: "Who is eligible for this course?",
          answer:
            "MBBS, BDS, MDS, MD DVL and other qualified medical professionals in the aesthetic field.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 2-day program with full-fledged hands-on training on patients.",
        },
        {
          question: "Is the program theoretical or practical?",
          answer:
            "It combines both — you’ll get essential theoretical knowledge along with robust hands-on training under supervision.",
        },
        {
          question: "Is the course suitable for beginners?",
          answer:
            "Yes, the course is designed for beginners who have basic knowledge of aesthetics. It builds from foundational concepts to advanced injectable techniques.",
        },
      ],
    },
    {
      id: 15,
      title: "Workshop in Hydrafacial & Basic Chemical Peels",
      category: "cosmetology",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "This workshop provides hands-on training in HydraFacial and basic chemical peels—two popular, non-invasive skin rejuvenation treatments for professional skincare practice.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: Hydrafacial, // placeholder — update with your asset
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "The Workshop in HydraFacial & Basic Chemical Peels equips medical and paramedical professionals with practical skills to perform two of the most in-demand skincare treatments. Covering everything from skin analysis to chemical peel application and HydraFacial protocols, the workshop blends theoretical insight with live patient training. Emphasis is placed on safety, ethics, client assessment, and post-treatment care.",
      curriculum: [
        "Module 1: Introduction to skin",
        "Module 2: Skin function and Abnormalities",
        "Module 3: Classification of Treatment with chemical peel",
        "Module 4: Classification of Treatment with hydra facial",
        "Module 5: Difference between Hydra facial and Chemical peel",
        "Module 6: Individual Procedure",
        "Module 7: Basic Hydrafacial",
        "Module 8: Advance Hydrafacial Practice",
        "Module 9: Hydra facial procedures",
        "Module 10: AHA Peel",
        "Module 11: BHA Peel",
        "Module 12: Combination Peel",
        "Module 13: Peel Application and Changes",
        "Module 14: Patient Selection and Precautions",
        "Module 15: Steps in Individual treatment",
        "Module 16: Treatment & Progress",
        "Module 17: Post Treatment Care",
        "Module 18: Post Home remedies",
      ],
      careerOutcomes: [
        "Hydrafacial Technician",
        "Chemical Peel Specialist",
        "Aesthetic Assistant",
        "Medical Facialist",
        "Clinical Aesthetician",
      ],
      requirements: [
        "Background in medical or paramedical sciences",
        "Understanding of skin anatomy",
        "Willingness to perform hands-on skincare procedures",
      ],
      faq: [
        {
          question:
            "What does the Workshop in HydraFacial and Chemical Peel contain?",
          answer:
            "This is a hands-on training workshop that covers HydraFacial procedures and chemical peels. It includes cleansing, exfoliation, hydration, peel application, and post-care, all while prioritizing patient safety and treatment effectiveness.",
        },
        {
          question:
            "Who is eligible for a Workshop in HydraFacial & Chemical Peel?",
          answer:
            "MBBS, BDS, MDS, BHMS, BUMS, BAMS, BNYS, Paramedical professionals, and other qualified medical practitioners.",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a 2-day program with full-fledged hands-on training on patients.",
        },
        {
          question:
            "What are the benefits of combining Chemical Peels and HydraFacial?",
          answer:
            "Combining both treatments allows for a comprehensive skincare approach, addressing multiple skin concerns in a single session.",
        },
        {
          question:
            "Will I learn how to use different types of chemical peels?",
          answer:
            "Yes, the course includes training on various peels like AHA, BHA, and combination peels, including application and patient selection.",
        },
      ],
    },

    {
      id: 16,
      title: "Workshop in Semi-Permanent Makeup",
      category: "cosmetology",
      duration: "2 Days",
      students: "Not specified",
      schedule: "Online - Live Sessions & Hands-on",
      rating: 4.7,
      price: "$TBD",
      description:
        "The Workshop in Semi-Permanent Make-Up (SPMU) equips medical and beauty professionals with hands-on skills in microblading, lip blush, powder brows, and more, with a strong focus on precision, safety, and natural aesthetics.",
      features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
      image: Makeup, // placeholder — replace when you’ve got the goods
      featured: false,
      eligibility:
        "MBBS, MD, MDS, BDS, BHMS, BAMS, BUMS, BNYS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, Paramedical, MDS (Oral Maxillofacial Surgeon)",
      longDescription:
        "The Workshop in Semi-Permanent Makeup (SPMU) is an intensive, hands-on training program designed to empower professionals in delivering advanced cosmetic procedures. Covering microblading, lip blush, eyeliner enhancement, and more, the workshop dives deep into skin prep, pigment selection, safety standards, and aftercare guidance — enabling practitioners to confidently provide customized, natural-looking results.",
      curriculum: [
        "Module 1: Introduction to the world of cosmetology",
        "Module 2: Different Treatments in SPMU",
        "Module 3: Skin Enhancement with SPMU",
        "Module 4: Eyebrow Stroke Practice",
        "Module 5: Eyebrow mapping Practice",
        "Module 6: Eyebrow Shading practice",
        "Module 7: Lip Enhancement",
        "Module 8: Lip Neutralizer",
        "Module 9: Latex Practice",
        "Module 10: Beauty Spot Placement",
        "Module 11: Case selections & Precaution",
        "Module 12: Treatment & Progress",
        "Module 13: Post Treatment Care",
        "Module 14: Post Home remedies",
      ],
      careerOutcomes: [
        "Semi-Permanent Makeup Artist",
        "Aesthetic Technician",
        "Cosmetology Assistant",
        "Freelance Beauty Consultant",
        "Aesthetic Practitioner",
      ],
      requirements: [
        "Medical or Paramedical Background",
        "Interest in Aesthetic Treatments",
        "Commitment to Client Safety & Hygiene",
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
    },
  ];

  const course =
    courses.find((c) => c.id === parseInt(id || "1")) || courses[0];

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
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
            <div data-aos="fade-right">
              <div className="text-start">
                <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                  {course.title}
                </h2>
                <img
                  src={Underline}
                  alt="Decorative Line"
                  className="mt-4 mb-3 w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            <div data-aos="fade-left">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-6 sm:px-12 lg:px-20">
          {/* Duration (renamed to Training Mode) */}
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

          {/* Schedule */}
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

          {/* Eligibility */}
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

        {/* Apply Now Button Centered */}
        <div className="flex justify-center mt-8">
          <Button
            size="xl"
            variant="gradient"
            data-aos="fade-up"
            onClick={() => navigate("/contact")}
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Requirements Section */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Key Highlights
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card" data-aos="zoom-in">
              <CardContent className="p-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-3" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Course Curriculum
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed to prepare you for real-world
              challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Subjects */}
            <Card
              className="shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              data-aos="fade-right"
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

            {/* Key Features */}
            <Card
              className="shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden"
              data-aos="fade-left"
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
              Frequently Asked Questions
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
          </div>

          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
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
                            xmlns="http://www.w3.org/2000/svg"
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

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <div className="text-center">
            <h2 className="font-manrope text-3xl lg:text-3xl text-white">
              Ready to Start Your Journey?
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful graduates who have launched their
            healthcare careers with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="xl" variant="metallic">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
