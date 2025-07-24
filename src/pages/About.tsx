import { ArrowRight, Users, Award, Heart, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import medicalStudents from '@/assets/medical-students.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-manrope text-5xl lg:text-7xl text-primary mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Two decades of excellence in medical education, shaping the future of healthcare one student at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To provide exceptional medical education that combines theoretical knowledge with hands-on clinical experience, 
                preparing competent, compassionate healthcare professionals who make a positive impact in their communities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that quality healthcare begins with quality education. Our comprehensive programs are designed 
                to meet the evolving needs of the healthcare industry while maintaining the highest standards of academic excellence.
              </p>
              <Button variant="gradient" size="lg" className="group">
                Our Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="animate-fade-in">
              <img 
                src={medicalStudents}
                alt="Medical education"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from curriculum development to student support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the experienced educators and healthcare professionals leading our institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-primary/70 font-medium mb-1">{member.credentials}</p>
                  <p className="text-muted-foreground font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={clinicInterior}
                alt="Modern medical facility"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Recognition and milestones that reflect our commitment to excellence in medical education.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Become part of a legacy of excellence and start your journey in healthcare education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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