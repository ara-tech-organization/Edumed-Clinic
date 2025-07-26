import { useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  PhoneCall,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Underline from "/line.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clinicInterior from "@/assets/clinic-interior.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    program: "",
    message: "",
  });

  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Location",
      details: [
        "3rd Floor, 64, Variety Hall Rd, Town Hall, Coimbatore, Tamil Nadu 641001",
      ],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 97515 10000"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["coimbatore@dredumed.com"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "Schedule Visit",
    },
  ];

  const branches = [
    {
      name: "DrEduMed - Chennai Regional Office",
      location: "Chennai, Tamil Nadu",
      company: "Edumed Tech Private Limited",
      address:
        "Anugraha Apartments, 4th Floor, Nungambakkam High Rd, Tirumurthy Nagar, Thousand Lights, Chennai, Tamil Nadu, 600034",
      phone: "1800 890 4303 / +91 80729 13539",
    },
    {
      name: "DrEduMed - Coimbatore",
      location: "Coimbatore, Tamil Nadu",
      company: "Edumed Tech Private Limited",
      address:
        "3rd Floor, 64, Variety Hall Rd, Town Hall, Coimbatore, Tamil Nadu, 641001. Opposite Variety Hall Police Station.",
      phone: "+91 97515 10000",
      email: "coimbatore@dredumed.com",
    },
    {
      name: "DrEduMed - Chennai",
      location: "Chennai, Tamil Nadu",
      company: "Edumed Tech Private Limited",
      address:
        "New No.1, Old No. C-52, Muvas Arcade, 2nd Floor, 2nd Avenue, 1st Main Rd, C Block, Annanagar East, Chennai, Tamil Nadu, 600102",
      phone: "+91 99999 10000",
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "Requirements vary by program but generally include a high school diploma or equivalent, completion of prerequisite courses, and passing entrance exams.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer various financial aid options including federal aid, scholarships, and payment plans. Our financial aid office can help you explore all available options.",
    },
    {
      question: "How long are the programs?",
      answer:
        "Program lengths vary from 8 months to 24 months depending on the specific healthcare career track you choose.",
    },
    {
      question: "Are classes available in the evening?",
      answer:
        "Yes, we offer flexible scheduling including day, evening, and weekend options to accommodate working professionals.",
    },
    {
      question: "What is the job placement rate?",
      answer:
        "Our graduates have a 92% job placement rate within 6 months of graduation, with many hired directly by their internship sites.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-manrope text-5xl lg:text-7xl text-primary mb-6 leading-tight">
              Contact Us
            </h1>
            <img
              src={Underline}
              alt="Underline design"
              className="w-[140px] sm:w-[180px] lg:w-[220px] mt-2 mb-6 inline-block"
              data-aos="fade-up"
            />
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Ready to start your healthcare career? Get in touch with our
              admissions team to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20" data-aos="fade-down">
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
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.title === "Campus Location" ? (
                    <a href="#map-section" className="inline-block">
                      <Button variant="outline" size="sm" className="text-xs">
                        {info.action}
                      </Button>
                    </a>
                  ) : info.title === "Phone" ? (
                    <a
                      href={`tel:${info.details[0].replace(/\s/g, "")}`}
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm" className="text-xs">
                        {info.action}
                      </Button>
                    </a>
                  ) : info.title === "Email" ? (
                    <a
                      href={`mailto:${info.details[0]}`}
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm" className="text-xs">
                        {info.action}
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" size="sm" className="text-xs">
                      {info.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12" data-aos="fade-up">
            {/* Contact Form */}
            <div className="animate-slide-up" data-aos="fade-right">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
                Send us a Message
              </h2>
              <img
                src={Underline}
                alt="Underline design"
                className="w-[140px] sm:w-[180px] lg:w-[220px] mt-2 mb-6"
                data-aos="fade-up"
              />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions about our programs? Fill out the form below and
                we'll get back to you within 24 hours.
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
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="program">Program Interest</Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("program", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical-assistant">
                              Medical Assistant
                            </SelectItem>
                            <SelectItem value="nursing">
                              Nursing Program
                            </SelectItem>
                            <SelectItem value="pharmacy">
                              Pharmacy Technician
                            </SelectItem>
                            <SelectItem value="clinical-research">
                              Clinical Research
                            </SelectItem>
                            <SelectItem value="other">
                              Other/General Inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("inquiry", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">
                            Admissions Information
                          </SelectItem>
                          <SelectItem value="financial-aid">
                            Financial Aid
                          </SelectItem>
                          <SelectItem value="program-details">
                            Program Details
                          </SelectItem>
                          <SelectItem value="schedule-tour">
                            Schedule a Tour
                          </SelectItem>
                          <SelectItem value="career-services">
                            Career Services
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us more about what you'd like to know..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Campus Image & Info */}
            <div className="animate-fade-in" data-aos="fade-left">
              <img
                src={clinicInterior}
                alt="Campus facility"
                className="rounded-lg shadow-elegant hover:shadow-hover transition-all duration-500 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-16 bg-white px-4 sm:px-6 lg:px-20"
        id="map-section"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Find Us on the Map
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Visit our campus or clinic using the map below. We're easily
            accessible and look forward to seeing you!
          </p>

          {/* Responsive Google Map Embed */}
          <div
            className="w-full h-80 sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-down"
          >
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.536312597718!2d76.96151427451981!3d10.998329655062575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85984a3ad0e93%3A0xcc72770a13ad57ac!2sDr.EduMed%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1753426216142!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      {/* <section className="py-24 relative overflow-hidden bg-white"> */}
      {/* Diagonal Line Background */}
      {/* <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 -z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="line-pattern"
              patternUnits="userSpaceOnUse"
              width="50"
              height="50"
            >
              <path d="M0,50 L50,0" stroke="#b2f5ea" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#line-pattern)" />
        </svg> */}

      {/* Floating gradient blobs */}
      {/* <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-400 opacity-20 rounded-full blur-[140px] top-[-100px] left-[-120px] animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute w-[35rem] h-[35rem] bg-gradient-to-br from-purple-200 via-pink-300 to-yellow-200 opacity-20 rounded-full blur-[160px] bottom-[-120px] right-[-140px] animate-[float_14s_ease-in-out_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> */}
      {/* Animated gradient bar under heading */}
      {/* <div className="relative text-center mb-20" data-aos="fade-up">
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-cyan-400 via-teal-300 to-transparent rounded-full blur-md rotate-2 opacity-40 z-0" />
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Our Branches
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed relative z-10">
              Explore our regional offices across Tamil Nadu.
            </p>
          </div> */}

      {/* Cards */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardContent className="flex flex-col justify-between flex-grow px-6 pb-6 pt-0 relative z-10">
                  <div className="w-20 h-20 mx-auto -mt-14 mb-4 bg-white border-4 border-primary/20 rounded-full shadow-lg flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {branch.name}
                    </h3>
                    <div className="inline-block px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-800 rounded-full shadow-sm">
                      {branch.location}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {branch.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-muted-foreground text-center">
                    <p className="flex items-center justify-center gap-1 font-medium">
                      <PhoneCall className="h-4 w-4 text-primary" />{" "}
                      {branch.phone}
                    </p>
                    {branch.email && (
                      <p className="flex items-center justify-center gap-1 font-medium">
                        <Mail className="h-4 w-4 text-primary" /> {branch.email}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30" data-aos="fade-down">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <img
              src={Underline}
              alt="Underline design"
              className="w-[140px] sm:w-[180px] lg:w-[220px] mt-2 mb-6 inline-block"
              data-aos="fade-up"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about our programs and
              admissions process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-border rounded-lg bg-white shadow-card hover:shadow-hover transition-all duration-300"
                >
                  {/* Clickable Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <h3 className="text-lg font-semibold text-primary">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300 rotate-180" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300" />
                    )}
                  </button>

                  {/* Expandable Answer with Smooth Height Transition */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease, opacity 0.3s ease",
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="px-6 pb-4 text-muted-foreground leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-scale-in">
            <h2 className="font-manrope text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Take the next step in your healthcare career. Our admissions team
              is here to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
      {/* <Button
                size="xl"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Apply Now
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Request Information
              </Button> */}
      {/* </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
