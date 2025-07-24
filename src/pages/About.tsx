import { ArrowRight, Users, Award, Heart, Globe, CheckCircle, Lightbulb, Target, Compass, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import medicalStudents from '@/assets/medical-students.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';
import HeadingWithUnderline from '@/components/HeadingWithUnderline';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We instill empathy and compassion as the foundation of excellent healthcare."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in medical education and training."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering teamwork and communication skills essential in healthcare."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing cutting-edge technology and teaching methods."
    }
  ];

  const achievements = [
    "Accredited by the National Healthcare Education Council",
    "98% graduate employment rate within 6 months",
    "Over 15,000 successful healthcare professionals trained",
    "Partnerships with 200+ healthcare facilities",
    "State-of-the-art simulation labs and clinical facilities"
  ];

  const teamMembers = [
    {
      name: "Dr. Elizabeth Morrison",
      role: "Director of Medical Programs",
      credentials: "MD, PhD",
      description: "25 years of clinical experience in emergency medicine"
    },
    {
      name: "Professor James Chen",
      role: "Dean of Nursing Education", 
      credentials: "RN, MSN, PhD",
      description: "Expert in advanced nursing practices and patient care"
    },
    {
      name: "Dr. Sarah Williams",
      role: "Clinical Training Coordinator",
      credentials: "PharmD, MBA",
      description: "Specialized in pharmaceutical education and clinical operations"
    }
  ];

  const journeySteps = [
    {
      year: "2003",
      icon: Lightbulb,
      title: "The Vision",
      description: "Founded with a mission to revolutionize healthcare education"
    },
    {
      year: "2008",
      icon: Target,
      title: "First Expansion",
      description: "Opened our state-of-the-art simulation labs and clinical training center"
    },
    {
      year: "2015",
      icon: Compass,
      title: "Innovation Era",
      description: "Integrated cutting-edge technology and virtual reality training"
    },
    {
      year: "2023",
      icon: Zap,
      title: "Excellence Achieved",
      description: "Recognized as the top healthcare education institute in the region"
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
                Our Story
              </h1>
            </HeadingWithUnderline>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Two decades of excellence in medical education, shaping the future of healthcare one student at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Unique Hexagonal Design */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Our Journey
              </h2>
            </HeadingWithUnderline>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the milestones that shaped our commitment to healthcare education excellence.
            </p>
          </div>

          {/* Hexagonal Timeline */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 gradient-primary transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className="relative" 
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  {/* Hexagonal Card */}
                  <div className="relative">
                    <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 transform hover:-translate-y-2">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">{step.year}</div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Connector */}
                    {index < journeySteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-primary/20 rounded-full transform -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Circular Design Pattern */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <HeadingWithUnderline className="mb-8">
                <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                  Our Mission
                </h2>
              </HeadingWithUnderline>
              
              {/* Circular Mission Cards */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="w-40 h-40 rounded-full gradient-primary p-1">
                      <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-center p-4 group-hover:bg-primary/5 transition-all duration-300">
                        <div>
                          <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium text-primary">Excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group mt-8">
                    <div className="w-40 h-40 rounded-full gradient-primary p-1">
                      <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-center p-4 group-hover:bg-primary/5 transition-all duration-300">
                        <div>
                          <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium text-primary">Compassion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group -mt-4">
                    <div className="w-40 h-40 rounded-full gradient-primary p-1">
                      <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-center p-4 group-hover:bg-primary/5 transition-all duration-300">
                        <div>
                          <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium text-primary">Innovation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group mt-4">
                    <div className="w-40 h-40 rounded-full gradient-primary p-1">
                      <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-center p-4 group-hover:bg-primary/5 transition-all duration-300">
                        <div>
                          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium text-primary">Community</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="relative">
                <img 
                  src={medicalStudents}
                  alt="Medical education"
                  className="rounded-3xl shadow-elegant hover:shadow-hover transition-all duration-500 relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-primary rounded-full opacity-20 z-0"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Diamond Grid Pattern */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Our Core Values
              </h2>
            </HeadingWithUnderline>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from curriculum development to student support.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="relative"
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                >
                  {/* Diamond Shape Container */}
                  <div className="relative transform hover:scale-105 transition-all duration-300">
                    <div className="bg-card p-8 rounded-3xl shadow-card hover:shadow-hover border border-primary/20 relative overflow-hidden">
                      {/* Diamond Background Pattern */}
                      <div className="absolute top-4 right-4 w-16 h-16 border border-primary/20 transform rotate-45"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 bg-primary/10 transform rotate-45"></div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                          <value.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Staggered Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Leadership Team
              </h2>
            </HeadingWithUnderline>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the experienced educators and healthcare professionals leading our institution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`transform ${index === 1 ? 'md:translate-y-8' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <Card className="shadow-card hover:shadow-hover transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Slanted Header */}
                    <div className="relative h-32 gradient-primary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-card transform -skew-y-1 origin-bottom-left"></div>
                    </div>
                    
                    <div className="p-6 -mt-16 relative z-10">
                      <div className="w-20 h-20 bg-card rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-primary/20">
                        <Users className="h-10 w-10 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                        <p className="text-primary/70 font-medium mb-1">{member.credentials}</p>
                        <p className="text-muted-foreground font-medium mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Asymmetric Layout */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="relative">
                <img 
                  src={clinicInterior}
                  alt="Modern medical facility"
                  className="rounded-3xl shadow-elegant hover:shadow-hover transition-all duration-500"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-4 border-primary/30 rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:col-span-3" data-aos="fade-left">
              <HeadingWithUnderline className="mb-8">
                <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                  Our Achievements
                </h2>
              </HeadingWithUnderline>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Recognition and milestones that reflect our commitment to excellence in medical education.
              </p>
              
              {/* Achievement Grid */}
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group"
                    data-aos="slide-left"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="bg-card p-4 rounded-xl shadow-sm border border-primary/10 flex-1 group-hover:shadow-md transition-all duration-300">
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <HeadingWithUnderline className="mb-8">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground">
                Join Our Community
              </h2>
            </HeadingWithUnderline>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Become part of a legacy of excellence and start your journey in healthcare education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="metallic">
                Contact Admissions
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;