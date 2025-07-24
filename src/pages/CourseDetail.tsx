import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, Calendar, CheckCircle, Star, BookOpen, Globe, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import medicalStudents from '@/assets/medical-students.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';
import HeadingWithUnderline from '@/components/HeadingWithUnderline';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Medical Assistant Certification",
      category: "medical",
      duration: "12 months",
      students: "24-32",
      schedule: "Day & Evening",
      rating: 4.9,
      price: "$18,500",
      description: "Comprehensive training in patient care, medical procedures, administrative tasks, and electronic health records management.",
      features: ["Clinical Externship", "EHR Training", "Lab Procedures", "Administrative Skills"],
      image: medicalStudents,
      longDescription: "Our Medical Assistant Certification program is designed to prepare you for a rewarding career in healthcare. This comprehensive 12-month program combines theoretical knowledge with hands-on practical experience, ensuring graduates are well-prepared for the demands of modern medical facilities.",
      curriculum: [
        "Medical Terminology and Anatomy",
        "Clinical Procedures and Patient Care",
        "Electronic Health Records (EHR) Management",
        "Medical Administrative Procedures",
        "Laboratory Techniques and Safety",
        "Pharmacology and Medication Administration",
        "Medical Ethics and Legal Issues",
        "Clinical Externship (160 hours)"
      ],
      careerOutcomes: [
        "Medical Assistant in hospitals and clinics",
        "Administrative roles in healthcare facilities",
        "Laboratory assistant positions",
        "Medical office coordinator",
        "Patient care specialist"
      ],
      requirements: [
        "High school diploma or equivalent",
        "Background check and drug screening",
        "Immunization records",
        "Basic computer literacy",
        "Strong communication skills"
      ]
    },
    {
      id: 2,
      title: "Registered Nursing Program",
      category: "nursing",
      duration: "24 months",
      students: "16-20",
      schedule: "Full-time",
      rating: 4.8,
      price: "$32,000",
      description: "Advanced nursing education with extensive clinical rotations in various healthcare settings.",
      features: ["Clinical Rotations", "NCLEX Prep", "Simulation Labs", "Nursing Theory"],
      image: clinicInterior,
      longDescription: "Our Registered Nursing Program is a comprehensive 24-month Associate Degree in Nursing (ADN) program that prepares students to become competent, caring registered nurses. The program emphasizes evidence-based practice, critical thinking, and compassionate patient care.",
      curriculum: [
        "Nursing Fundamentals and Theory",
        "Anatomy and Physiology",
        "Pharmacology for Nurses",
        "Medical-Surgical Nursing",
        "Mental Health Nursing",
        "Maternal-Child Health Nursing",
        "Community Health Nursing",
        "Clinical Rotations (800+ hours)"
      ],
      careerOutcomes: [
        "Staff nurse in hospitals",
        "Community health nurse",
        "Long-term care facility nurse",
        "Clinic and outpatient care nurse",
        "Continuing education for BSN"
      ],
      requirements: [
        "Prerequisites: Anatomy, Physiology, Microbiology",
        "Minimum GPA of 3.0",
        "TEAS exam score",
        "Background check and health clearance",
        "CPR certification"
      ]
    }
  ];

  const course = courses.find(c => c.id === parseInt(id || '1')) || courses[0];

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/courses')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <Badge variant="secondary" className="mb-4">
                {course.category}
              </Badge>
              <HeadingWithUnderline className="mb-6">
                <h1 className="font-manrope text-4xl lg:text-5xl text-primary">
                  {course.title}
                </h1>
              </HeadingWithUnderline>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {course.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">Class: {course.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.schedule}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating} Rating</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary">{course.price}</span>
                <Button variant="metallic" size="lg">
                  Apply Now
                </Button>
              </div>
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
      </section>

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Course Curriculum
              </h2>
            </HeadingWithUnderline>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed to prepare you for real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300" data-aos="fade-right">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Core Subjects</h3>
                </div>
                <div className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300" data-aos="fade-left">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Career Outcomes</h3>
                </div>
                <div className="space-y-3">
                  {course.careerOutcomes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Admission Requirements
              </h2>
            </HeadingWithUnderline>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card" data-aos="zoom-in">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                      <Award className="h-6 w-6 mr-3" />
                      Prerequisites
                    </h3>
                    <div className="space-y-3">
                      {course.requirements.map((req, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <HeadingWithUnderline className="mb-8">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
          </HeadingWithUnderline>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful graduates who have launched their healthcare careers with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="metallic">
              Apply Now
            </Button>
            <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;