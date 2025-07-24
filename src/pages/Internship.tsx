import { ArrowRight, MapPin, Clock, Users, Award, CheckCircle, Calendar, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import medicalStudents from '@/assets/medical-students.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';

const Internship = () => {
  const programs = [
    {
      title: "Clinical Medical Assistant Internship",
      duration: "8 weeks",
      locations: "15+ Partner Clinics",
      students: "12-16",
      description: "Hands-on experience in patient care, medical procedures, and clinic operations.",
      requirements: ["Completed Medical Assistant Program", "CPR Certification", "Background Check"],
      benefits: ["Real clinic experience", "Mentorship program", "Job placement assistance"]
    },
    {
      title: "Hospital Nursing Internship",
      duration: "12 weeks",
      locations: "8 Major Hospitals",
      students: "8-12",
      description: "Comprehensive nursing experience across multiple hospital departments.",
      requirements: ["Nursing Program Completion", "Current Immunizations", "Drug Screening"],
      benefits: ["Multiple department rotations", "Experienced preceptors", "Professional references"]
    },
    {
      title: "Pharmacy Operations Internship",
      duration: "6 weeks",
      locations: "20+ Pharmacies",
      students: "10-15",
      description: "Practical experience in retail and hospital pharmacy environments.",
      requirements: ["Pharmacy Tech Certification", "State Registration", "Clean Background"],
      benefits: ["Retail & hospital exposure", "Customer service training", "Career networking"]
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description: "Work alongside healthcare professionals in actual medical facilities"
    },
    {
      icon: Users,
      title: "Professional Mentorship",
      description: "Paired with experienced professionals who guide your learning"
    },
    {
      icon: Award,
      title: "Industry Connections",
      description: "Build relationships that often lead to job opportunities"
    },
    {
      icon: CheckCircle,
      title: "Skill Validation",
      description: "Apply classroom knowledge in real clinical settings"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Application Submission",
      description: "Complete internship application during your final semester",
      timeframe: "8 weeks before graduation"
    },
    {
      step: "2",
      title: "Interview Process",
      description: "Meet with potential placement sites and our coordination team",
      timeframe: "4-6 weeks before start"
    },
    {
      step: "3",
      title: "Placement Confirmation",
      description: "Receive your internship placement and orientation schedule",
      timeframe: "2 weeks before start"
    },
    {
      step: "4",
      title: "Begin Internship",
      description: "Start your hands-on learning experience at your assigned facility",
      timeframe: "Program completion"
    }
  ];

  const requirements = [
    "Completion of core program coursework with minimum 3.0 GPA",
    "Current CPR certification and basic life support training",
    "Completed background check and drug screening",
    "Current immunizations as required by placement facility",
    "Professional liability insurance (provided by the institute)",
    "Attendance at mandatory orientation session"
  ];

  const partnerFacilities = [
    "Metropolitan General Hospital",
    "Children's Healthcare Network",
    "Community Medical Centers",
    "Regional Specialty Clinics",
    "Urgent Care Associates",
    "Rehabilitation Services Inc."
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-manrope text-5xl lg:text-7xl text-primary mb-6 leading-tight">
              Internship Program
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Bridge the gap between classroom learning and professional practice with our comprehensive internship program.
            </p>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Why Our Internships Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our internship program provides the real-world experience employers value most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Available Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from our specialized internship tracks designed for different healthcare career paths.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.locations}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Class size: {program.students}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">Requirements:</p>
                    <div className="space-y-1">
                      {program.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

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

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Application Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our streamlined process ensures you're matched with the right internship opportunity for your career goals.
              </p>
              
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div 
                    key={index}
                    className="flex space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="gradient-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                      <p className="text-muted-foreground mb-1">{step.description}</p>
                      <p className="text-sm text-primary font-medium">{step.timeframe}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src={medicalStudents}
                alt="Students in clinical setting"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Partners */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="animate-slide-up">
              <h2 className="font-manrope text-3xl lg:text-4xl text-primary mb-6">
                General Requirements
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To ensure success in our internship program, all participants must meet these requirements.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Facilities */}
            <div className="animate-slide-up">
              <h2 className="font-manrope text-3xl lg:text-4xl text-primary mb-6">
                Partner Facilities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've partnered with leading healthcare organizations to provide diverse internship experiences.
              </p>
              
              <div className="grid gap-3">
                {partnerFacilities.map((facility, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Success Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our internship program delivers real results for our graduates.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "92%", label: "Job Placement Rate" },
              { stat: "89%", label: "Hired at Internship Site" },
              { stat: "4.8/5", label: "Student Satisfaction" },
              { stat: "95%", label: "Employer Satisfaction" }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-manrope text-4xl lg:text-5xl text-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-muted-foreground font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground mb-6">
              Start Your Professional Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the first step toward hands-on experience in your chosen healthcare field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Apply for Internship
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;