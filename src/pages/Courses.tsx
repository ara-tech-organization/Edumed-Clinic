import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Award, ArrowRight, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import medicalStudents from '@/assets/medical-students.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';
import HeadingWithUnderline from '@/components/HeadingWithUnderline';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'medical', name: 'Medical Assistant' },
    { id: 'nursing', name: 'Nursing' },
    { id: 'pharmacy', name: 'Pharmacy' },
    { id: 'clinical', name: 'Clinical Research' }
  ];

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
      featured: true
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
      featured: true
    },
    {
      id: 3,
      title: "Pharmacy Technician",
      category: "pharmacy",
      duration: "9 months",
      students: "20-25",
      schedule: "Day & Weekend",
      rating: 4.7,
      price: "$14,500",
      description: "Learn pharmaceutical calculations, drug interactions, pharmacy operations, and customer service.",
      features: ["Pharmacy Law", "Drug Calculations", "Compounding", "Retail Experience"],
      image: medicalStudents,
      featured: false
    },
    {
      id: 4,
      title: "Clinical Research Coordinator",
      category: "clinical",
      duration: "15 months",
      students: "12-16",
      schedule: "Day",
      rating: 4.9,
      price: "$22,000",
      description: "Specialized training in clinical trial management, research protocols, and regulatory compliance.",
      features: ["GCP Certification", "Research Methods", "Data Management", "Regulatory Affairs"],
      image: clinicInterior,
      featured: false
    },
    {
      id: 5,
      title: "Medical Office Administration",
      category: "medical",
      duration: "8 months",
      students: "20-28",
      schedule: "Evening",
      rating: 4.6,
      price: "$12,500",
      description: "Administrative skills for medical offices including billing, coding, and patient management systems.",
      features: ["Medical Billing", "ICD-10 Coding", "Insurance Processing", "Office Management"],
      image: medicalStudents,
      featured: false
    },
    {
      id: 6,
      title: "Licensed Practical Nurse",
      category: "nursing",
      duration: "18 months",
      students: "18-22",
      schedule: "Day",
      rating: 4.8,
      price: "$24,500",
      description: "Practical nursing program preparing students for direct patient care in various healthcare settings.",
      features: ["Patient Care", "Medication Administration", "Clinical Skills", "NCLEX-PN Prep"],
      image: clinicInterior,
      featured: false
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const features = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "All programs include preparation for industry-standard certifications"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with low student-to-instructor ratios"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Day, evening, and weekend options to fit your lifestyle"
    },
    {
      icon: Star,
      title: "Expert Instructors",
      description: "Learn from experienced healthcare professionals"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h1 className="font-manrope text-5xl lg:text-7xl text-primary leading-tight">
                Our Programs
              </h1>
            </HeadingWithUnderline>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive healthcare training programs designed to prepare you for a successful career in the medical field.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Why Choose Our Programs?
              </h2>
            </HeadingWithUnderline>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the difference with our comprehensive approach to healthcare education.
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
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Browse Programs
              </h2>
            </HeadingWithUnderline>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "gradient" : "outline"}
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
                className={`overflow-hidden shadow-card hover-lift hover:shadow-hover transition-all duration-300 ${
                  course.featured ? 'ring-2 ring-primary/20' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {course.featured && (
                  <div className="gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(cat => cat.id === course.category)?.name}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <span className="font-semibold text-primary">{course.price}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Class size: {course.students}</span>
                      </div>
                      <span>{course.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {course.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="metallic" 
                    className="w-full group"
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
      <section className="py-20 bg-secondary/30">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground">
                Ready to Begin?
              </h2>
            </HeadingWithUnderline>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the next step toward your healthcare career. Our admissions team is here to help you choose the right program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="metallic">
                Apply Now
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;