import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import clinicInterior from '@/assets/clinic-interior.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Location",
      details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Toll Free: (800) 123-4567"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["admissions@mededu.institute", "info@mededu.institute"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "Schedule Visit"
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      role: "New Student Enrollment",
      phone: "(555) 123-4567",
      email: "admissions@mededu.institute"
    },
    {
      name: "Student Services",
      role: "Current Student Support",
      phone: "(555) 123-4568",
      email: "services@mededu.institute"
    },
    {
      name: "Financial Aid",
      role: "Scholarships & Aid",
      phone: "(555) 123-4569",
      email: "financial@mededu.institute"
    },
    {
      name: "Career Services",
      role: "Job Placement Support",
      phone: "(555) 123-4570",
      email: "careers@mededu.institute"
    }
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Requirements vary by program but generally include a high school diploma or equivalent, completion of prerequisite courses, and passing entrance exams."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer various financial aid options including federal aid, scholarships, and payment plans. Our financial aid office can help you explore all available options."
    },
    {
      question: "How long are the programs?",
      answer: "Program lengths vary from 8 months to 24 months depending on the specific healthcare career track you choose."
    },
    {
      question: "Are classes available in the evening?",
      answer: "Yes, we offer flexible scheduling including day, evening, and weekend options to accommodate working professionals."
    },
    {
      question: "What is the job placement rate?",
      answer: "Our graduates have a 92% job placement rate within 6 months of graduation, with many hired directly by their internship sites."
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
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Ready to start your healthcare career? Get in touch with our admissions team to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions about our programs? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="program">Program Interest</Label>
                        <Select onValueChange={(value) => handleInputChange('program', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical-assistant">Medical Assistant</SelectItem>
                            <SelectItem value="nursing">Nursing Program</SelectItem>
                            <SelectItem value="pharmacy">Pharmacy Technician</SelectItem>
                            <SelectItem value="clinical-research">Clinical Research</SelectItem>
                            <SelectItem value="other">Other/General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select onValueChange={(value) => handleInputChange('inquiry', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions Information</SelectItem>
                          <SelectItem value="financial-aid">Financial Aid</SelectItem>
                          <SelectItem value="program-details">Program Details</SelectItem>
                          <SelectItem value="schedule-tour">Schedule a Tour</SelectItem>
                          <SelectItem value="career-services">Career Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us more about what you'd like to know..."
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-primary" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Campus Image & Info */}
            <div className="animate-fade-in">
              <img 
                src={clinicInterior}
                alt="Campus facility"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500 mb-8"
              />
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Visit Our Campus</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Schedule a tour to see our state-of-the-art facilities, simulation labs, and meet with our admissions team.
                  </p>
                  <div className="flex space-x-3">
                    <Button variant="gradient" size="sm" className="flex-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Tour
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Department Contacts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect directly with the right department for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card 
                key={index}
                className="shadow-card hover-lift hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="gradient-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{dept.role}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about our programs and admissions process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the next step in your healthcare career. Our admissions team is here to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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

export default Contact;