import { ArrowRight, Users, Award, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Carousel from '@/components/Carousel';
import TestimonialCard from '@/components/TestimonialCard';
import heroImage from '@/assets/hero-medical-training.jpg';
import medicalStudents from '@/assets/medical-students.jpg';
import testimonialDoctor from '@/assets/testimonial-doctor.jpg';

const Index = () => {
  const stats = [
    { icon: Users, label: "Students Graduated", value: "15,000+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: BookOpen, label: "Programs Offered", value: "25+" },
    { icon: Clock, label: "Years of Excellence", value: "20+" },
  ];

  const courses = [
    {
      title: "Medical Assistant",
      duration: "12 months",
      description: "Comprehensive training in patient care, medical procedures, and administrative tasks.",
      image: medicalStudents,
    },
    {
      title: "Nursing Program",
      duration: "18 months", 
      description: "Advanced nursing education with clinical rotations and hands-on experience.",
      image: medicalStudents,
    },
    {
      title: "Pharmacy Technician",
      duration: "9 months",
      description: "Learn pharmaceutical calculations, drug interactions, and pharmacy operations.",
      image: medicalStudents,
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Graduate, Medical Assistant Program",
      content: "The hands-on training and experienced instructors prepared me perfectly for my career. I felt confident from day one in my new position.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Nursing Program Graduate",
      content: "The clinical rotations gave me real-world experience that made all the difference. The support from faculty was incredible throughout the program.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Pharmacy Tech Graduate",
      content: "I loved the modern facilities and the way they kept the curriculum updated with the latest industry standards. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Medical training facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-manrope text-5xl lg:text-7xl mb-6 text-primary-foreground leading-tight">
              Shape Your Medical Career
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join the next generation of healthcare professionals with our cutting-edge training programs and world-class facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" className="group">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="font-manrope text-3xl lg:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
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
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Excellence in Medical Education
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over two decades, MedEdu Institute has been at the forefront of medical education, 
                training the next generation of healthcare professionals with innovative programs and 
                state-of-the-art facilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence, combined with hands-on learning experiences and 
                industry partnerships, ensures our graduates are ready to make an immediate impact 
                in their chosen healthcare careers.
              </p>
              <Button variant="gradient" size="lg" className="group">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="animate-fade-in">
              <img 
                src={medicalStudents}
                alt="Medical students learning"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Featured Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular training programs designed to launch your healthcare career 
              with confidence and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="overflow-hidden shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in"
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
                    <h3 className="text-xl font-semibold text-primary">{course.title}</h3>
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={testimonialDoctor}
                alt="Happy graduate"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-8">
                Success Stories
              </h2>
              <Carousel autoPlay interval={6000} showDots>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    {...testimonial}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the first step towards a rewarding career in healthcare. 
              Our admissions team is ready to help you find the perfect program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Apply Today
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
