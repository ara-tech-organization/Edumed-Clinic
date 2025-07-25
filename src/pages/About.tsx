import {
  ArrowRight,
  Users,
  Award,
  Heart,
  Globe,
  CheckCircle,
  Lightbulb,
  Target,
  Compass,
  Zap,
  MapPin,
  PhoneCall,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import medicalStudents from "@/assets/medical-students.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import HeadingWithUnderline from "@/components/HeadingWithUnderline";
import Underline from "/line.png";
import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We instill empathy and compassion as the foundation of excellent healthcare.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to the highest standards in medical education and training.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Fostering teamwork and communication skills essential in healthcare.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing cutting-edge technology and teaching methods.",
    },
  ];

  const achievements = [
    "Accredited by the National Healthcare Education Council",
    "98% graduate employment rate within 6 months",
    "Over 15,000 successful healthcare professionals trained",
    "Partnerships with 200+ healthcare facilities",
    "State-of-the-art simulation labs and clinical facilities",
  ];

  const teamMembers = [
    {
      name: "Dr. Elizabeth Morrison",
      role: "Director of Medical Programs",
      credentials: "MD, PhD",
      description: "25 years of clinical experience in emergency medicine",
    },
    {
      name: "Professor James Chen",
      role: "Dean of Nursing Education",
      credentials: "RN, MSN, PhD",
      description: "Expert in advanced nursing practices and patient care",
    },
    {
      name: "Dr. Sarah Williams",
      role: "Clinical Training Coordinator",
      credentials: "PharmD, MBA",
      description:
        "Specialized in pharmaceutical education and clinical operations",
    },
  ];

  const journeySteps = [
    {
      year: "2003",
      icon: Lightbulb,
      title: "The Vision",
      description:
        "Founded with a mission to revolutionize healthcare education",
    },
    {
      year: "2008",
      icon: Target,
      title: "First Expansion",
      description:
        "Opened our state-of-the-art simulation labs and clinical training center",
    },
    {
      year: "2015",
      icon: Compass,
      title: "Innovation Era",
      description:
        "Integrated cutting-edge technology and virtual reality training",
    },
    {
      year: "2023",
      icon: Zap,
      title: "Excellence Achieved",
      description:
        "Recognized as the top healthcare education institute in the region",
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

  return (
    <div>
      {/* Hero Section */}

      <section
        className="relative py-20 lg:py-32 bg-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('./about.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />{" "}
        {/* Optional blur overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-block relative">
              <h1 className="font-manrope text-5xl lg:text-7xl text-primary leading-tight relative z-10 mb-5">
                Our Story
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-primary">
              Two decades of excellence in medical education, shaping the future
              of healthcare one student at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#032c40]/5 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>

        {/* Add a proper container with max-width */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            {/* Left Image */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="relative h-full">
                <img
                  src={clinicInterior}
                  alt="Modern medical facility"
                  className="rounded-3xl shadow-elegant hover:shadow-hover transition-all duration-500 h-[500px] w-full object-cover"
                />
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-4 border-primary/30 rounded-full"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="text-center">
                <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                  Begin Your Journey to Excellence in Aesthetic Medicine
                </h2>
                <img
                  src={Underline}
                  alt="Decorative Line"
                  className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
                />
              </div>

              <div className="text-gray-700 space-y-5 text-sm leading-relaxed">
                <p>
                  <strong>
                    Dr. EduMed Medical & Aesthetic Training Academy
                  </strong>{" "}
                  stands as a leading institution committed to providing
                  top-tier education and hands-on training in the field of
                  medical aesthetics.
                </p>
                <p>
                  Our comprehensive programs cover a wide range of treatments
                  such as Botox, dermal fillers, laser therapies, and skin
                  rejuvenation techniques.
                </p>
                <p>
                  Guided by a team of seasoned medical experts specializing in
                  aesthetics, we prepare licensed medical practitioners to excel
                  in this rapidly growing industry.
                </p>
                <p>
                  With the increasing demand for qualified aesthetic doctors,
                  our advanced training ensures you are fully equipped to meet
                  the needs of today’s beauty and wellness market.
                </p>
                <p>
                  Unlike typical educational institutions,{" "}
                  <strong>Dr. EduMed</strong> offers exclusive,
                  scientifically-driven courses designed specifically for
                  medical professionals who aim to advance their skills and
                  achieve success in aesthetic medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Unique Hexagonal Design */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-4xl lg:text-5xl text-primary">
                Our Journey
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the milestones that shaped our commitment to healthcare
              education excellence.
            </p>
          </div>


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

                  <div className="relative">
                    <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 transform hover:-translate-y-2">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {step.year}
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[#032c40] text-white py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* VISION */}
          <div className="animate-on-scroll opacity-0 transition-opacity duration-1000">
            <h2 className="text-3xl font-bold mb-4 text-[#20B2AA]">Vision</h2>
            <p className="text-sm leading-relaxed">
              Our vision is to be a globally recognized center of excellence in
              medical and aesthetic education. We strive to drive innovation,
              uphold professionalism, and foster transformative learning that
              empowers the next generation of skilled and ethical professionals.
            </p>
          </div>

          {/* MISSION */}
          <div className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200">
            <h2 className="text-3xl font-bold mb-4 text-[#20B2AA]">Mission</h2>
            <p className="text-sm leading-relaxed">
              We deliver high-quality, internationally benchmarked medical and
              aesthetic training through cutting-edge programs focused on an
              expert-led, practical approach. Our mission is to cultivate a
              community of ethically sound, competent, and confident
              professionals equipped with the skills to excel in their fields.
            </p>
          </div>
        </div>
      </section>

      {/* Values - Diamond Grid Pattern */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="font-manrope text-3xl lg:text-3xl"
              style={{ color: "#032c40" }}
            >
              Our Core Values
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from curriculum
              development to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "In-Depth Expert Training",
                description:
                  "Comprehensive, hands-on training led by industry experts.",
              },
              {
                title: "Govt. & International Accredited Certificate",
                description:
                  "Recognized certifications to enhance your professional credibility.",
              },
              {
                title: "Guaranteed Placement & Refund Policy",
                description:
                  "Confidence in your career with assured placement and refund options.",
              },
              {
                title: "Medico-Legal Expert & Vendor Assist",
                description:
                  "Guidance on legal matters and vendor partnerships to support your journey.",
              },
              {
                title: "Business Launch Support",
                description:
                  "Help to successfully start, scale, and sustain your aesthetic practice.",
              },
              {
                title: "Lifelong Alumni Access",
                description:
                  "Stay connected, upskill and grow through our lifetime alumni support.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="relative group bg-white/60 backdrop-blur-sm border border-[#032c40]/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-all duration-300" />
                <h3 className="text-lg font-bold text-[#032c40] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Staggered Cards */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Diagonal Line Background */}
        <svg
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
        </svg>

        {/* Floating gradient blobs */}
        <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-400 opacity-20 rounded-full blur-[140px] top-[-100px] left-[-120px] animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute w-[35rem] h-[35rem] bg-gradient-to-br from-purple-200 via-pink-300 to-yellow-200 opacity-20 rounded-full blur-[160px] bottom-[-120px] right-[-140px] animate-[float_14s_ease-in-out_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated gradient bar under heading */}
          <div className="relative text-center mb-20" data-aos="fade-up">
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
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>

      {/* Achievements - Asymmetric Layout */}
      {/* <section className="py-20 bg-secondary/30 relative overflow-hidden">
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
                Recognition and milestones that reflect our commitment to
                excellence in medical education.
              </p>


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
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-white">
                Join Our Community
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Become part of a legacy of excellence and start your journey in
              healthcare education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="xl"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                 Contact Admissions
                </Button>
              </Link>
              {/* <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-black-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Visit
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
