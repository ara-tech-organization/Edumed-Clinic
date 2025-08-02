import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import HeadingWithUnderline from "@/components/HeadingWithUnderline";
import Underline from "/line.png";
import {
  Heart,
  Droplets,
  Sparkles,
  Star,
  PenTool,       // microblading (precision pen-like tool)
  Award,
  Users,
  CheckCircle ,
  Shield,        // could be swapped with Activity if needed
  Zap,           // lasers
  Activity,      // body contouring (represents movement/health)
  Scissors,      // thread lift (surgical threads)
  Dna,
  Droplet,       // PRP for Hair (blood/plasma vibe)
  Target,
  ZapOff,        // laser hair removal (alt icon to differentiate)
  Syringe,       // botox (makes sense to reuse)
  Brush,         // micropigmentation (tattoo brush)
  Waves,         // skin tightening
} from "lucide-react";
import volunteerHero from "@/assets/volunteer-hero.jpg";
import volunteerForm from "@/assets/volunteer-form.jpg";
import AboutUsBg from "@/assets/About Us Page.jpg";

interface VolunteerFormData {
  fullName: string;
  email: string;
  age: string;
  contactNumber: string;
  gender: string;
  services: string;
  medicalHistory: string;
}

const Volunteering = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<VolunteerFormData>();

  const services = [
    "Lip Fillers",
    "PRP for Face",
    "Chemical Peels",
    "Skin Rejuvenation",
    "Microblading",
    "Mesotherapy for Face & Hair",
    "Dermal Fillers",
    "Skin Lasers",
    "Body Contouring & Tightening",
    "Face Lift – Threads",
    "Hair Transplant",
    "PRP for Hair",
    "Tattoo/Mole Removal",
    "Laser Therapy for Hair",
    "Botulinum Toxin",
    "Micropigmentation",
    "Skin Tightening",
  ];

const serviceItems = [
  {
    icon: Heart,
    title: "Lip Fillers",
    desc: "Enhance lip volume and definition",
  },
  {
    icon: Droplets,
    title: "PRP for Face",
    desc: "Platelet-rich plasma facial treatments",
  },
  {
    icon: Sparkles,
    title: "Chemical Peels",
    desc: "Skin resurfacing and renewal",
  },
  {
    icon: Star,
    title: "Skin Rejuvenation",
    desc: "Advanced anti-aging treatments",
  },
  {
    icon: PenTool,
    title: "Microblading",
    desc: "Semi-permanent eyebrow enhancement",
  },
  {
    icon: Syringe,
    title: "Mesotherapy for Face & Hair",
    desc: "Face and hair rejuvenation therapy",
  },
  {
    icon: Shield,
    title: "Dermal Fillers",
    desc: "Volume restoration and contouring",
  },
  {
    icon: Zap,
    title: "Skin Lasers",
    desc: "Advanced laser skin treatments",
  },
  {
    icon: Activity,
    title: "Body Contouring & Tightening",
    desc: "Body sculpting and skin tightening",
  },
  {
    icon: Scissors,
    title: "Face Lift – Threads",
    desc: "Non-surgical thread lift procedures",
  },
  {
    icon: Dna,
    title: "Hair Transplant",
    desc: "Hair restoration and transplantation",
  },
  {
    icon: Droplet,
    title: "PRP for Hair",
    desc: "Platelet-rich plasma hair treatments",
  },
  {
    icon: Target,
    title: "Tattoo/Mole Removal",
    desc: "Safe removal of tattoos and moles",
  },
  {
    icon: ZapOff,
    title: "Laser Therapy for Hair",
    desc: "Laser hair removal treatments",
  },
  {
    icon: Syringe,
    title: "Botulinum Toxin",
    desc: "Wrinkle reduction and prevention",
  },
  {
    icon: Brush,
    title: "Micropigmentation",
    desc: "Cosmetic tattooing procedures",
  },
  {
    icon: Waves,
    title: "Skin Tightening",
    desc: "Non-invasive skin firming treatments",
  },
];

  const benefits = [
    {
      icon: Award,
      title: "Professional Experience",
      description:
        "Gain hands-on experience with cutting-edge aesthetic procedures under expert supervision.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Help advance medical training while contributing to the healthcare community.",
    },
    {
      icon: Star,
      title: "Free Treatments",
      description:
        "Receive professional aesthetic treatments at no cost while supporting education.",
    },
    {
      icon: CheckCircle,
      title: "Safe Environment",
      description:
        "All procedures performed by certified professionals in a controlled clinical setting.",
    },
  ];

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-8 lg:py-12 bg-white overflow-hidden"
        data-aos="fade-down"
      >
        {/* Image container with background, padding, and rounded corners */}
        <div
          className="mx-4 sm:mx-6 lg:mx-8 rounded-3xl bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${AboutUsBg})`,
          }}
        >
          {/* Optional overlay if needed for text readability */}
          <div className="absolute inset-0 rounded-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
            <div className="max-w-4xl" data-aos="fade-up">
              <div className="inline-block relative">
                <h1 className="font-manrope text-5xl lg:text-7xl text-primary leading-tight relative z-10 mb-5">
                  Join Our Volunteer Program
                </h1>
              </div>
              <div className="max-w-xl">
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-primary">
                  Help advance medical education while receiving professional
                  aesthetic treatments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Hexagon Pattern */}
      <section
        className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rotate-45 rounded-lg"></div>
          <div className="absolute top-32 right-20 w-20 h-20 gradient-primary rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-secondary rotate-12 rounded-lg"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 gradient-primary opacity-50 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl font-bold text-primary mb-4">
              Available Services
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the range of professional aesthetic treatments available
              through our volunteer program
            </p>
          </div>

          {/* Honeycomb/Hexagon style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceItems.map((service, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                {/* Hexagon background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <div className="text-center">
                    <div className="gradient-primary p-4 w-16 h-16 rounded-full mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-primary group-hover:text-primary/80">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-secondary rounded-full opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Timeline/Path Style */}
      <section
        className="py-20 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Flowing background pattern */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
          >
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              opacity="0.1"
              fill="none"
            />
            <path
              d="M0,450 Q300,250 600,450 T1200,450"
              stroke="hsl(var(--secondary))"
              strokeWidth="1"
              opacity="0.1"
              fill="none"
            />
            <circle
              cx="200"
              cy="350"
              r="4"
              fill="hsl(var(--primary))"
              opacity="0.2"
            />
            <circle
              cx="500"
              cy="450"
              r="3"
              fill="hsl(var(--secondary))"
              opacity="0.3"
            />
            <circle
              cx="800"
              cy="300"
              r="5"
              fill="hsl(var(--primary))"
              opacity="0.15"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2
              className="font-manrope text-4xl font-bold text-primary mb-4"
              data-aos="fade-up"
            >
              Why Volunteer With Us?
            </h2>
            <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique benefits of participating in our volunteer
              program
            </p>
          </div>

          {/* Flowing timeline design */}
          <div className="relative">
            {/* Central flowing line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden lg:block"></div>

            <div className="space-y-16 lg:space-y-24">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  {/* Content side */}
                  <div className="flex-1 text-center lg:text-left group">
                    <div
                      className={`relative p-8 bg-card/60 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 ${
                        index % 2 === 1 ? "lg:text-right" : ""
                      }`}
                    >
                      {/* Floating accent */}
                      <div
                        className={`absolute -top-3 ${
                          index % 2 === 1 ? "lg:-left-3" : "lg:-right-3"
                        } w-6 h-6 gradient-primary rounded-full shadow-lg`}
                      ></div>

                      <h3 className="font-semibold text-2xl mb-4 text-primary group-hover:text-primary/80 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {benefit.description}
                      </p>

                      {/* Decorative elements */}
                      <div
                        className={`absolute bottom-4 ${
                          index % 2 === 1 ? "lg:left-4" : "lg:right-4"
                        } w-2 h-2 bg-secondary rounded-full opacity-50`}
                      ></div>
                    </div>
                  </div>

                  {/* Icon side */}
                  <div className="flex-shrink-0 relative group">
                    <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <benefit.icon className="h-12 w-12 text-primary-foreground relative z-10" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary/60 rounded-full animate-pulse animation-delay-1000"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section - Split Design with Floating Elements */}
     <section className="py-20 bg-gradient-to-bl from-background via-primary/5 to-secondary/10 relative overflow-hidden" data-aos="fade-up">
        {/* Background floating shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 border border-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 gradient-primary rounded-lg rotate-45 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 border-2 border-secondary rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-36 h-36 gradient-primary opacity-30 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            {/* <HeadingWithUnderline> */}
              <h2 className="font-manrope text-4xl font-bold text-primary mb-4">
                Join as Volunteer
              </h2>
               <img
              src={Underline}
              alt="Decorative Line"
              className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
            />

            {/* </HeadingWithUnderline> */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out this form and await our response if you're ready to apply
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Left side - Enhanced Image with Overlays */}
            <div className="relative group" data-aos="fade-right" data-aos-delay="200">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={volunteerForm} 
                  alt="Volunteers at clinic" 
                  className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-secondary/30 rounded-3xl"></div>
                
                {/* Floating info cards */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">Safe & Professional</span>
                  </div>
                </div>
                
                {/* <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"> */}
                  {/* <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground">Happy Volunteers</div>
                  </div> */}
                {/* </div> */}
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 -left-4 w-8 h-8 bg-secondary rounded-full opacity-70 animate-bounce animation-delay-500"></div>
                <div className="absolute top-1/3 -right-2 w-6 h-6 bg-primary rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
              </div>
              
              {/* Side decoration */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-secondary rounded-full opacity-30"></div>
            </div>

            {/* Right side - Enhanced Form with Modern Design */}
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl -z-10"></div>
              
              <div className="bg-card/80 backdrop-blur-sm p-10 rounded-3xl border border-primary/20 shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 gradient-primary opacity-10 rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 gradient-primary opacity-10 rounded-tl-3xl"></div>
                
                {/* Form header */}
                <div className="text-center mb-8">
                  <div className="gradient-primary p-3 w-fit rounded-xl mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Application Form</h3>
                  <p className="text-muted-foreground">Start your volunteer journey today</p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              className="border-primary/20 focus:border-primary transition-colors" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your email" 
                              type="email" 
                              className="border-primary/20 focus:border-primary transition-colors" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Age</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your age" 
                                type="number" 
                                className="border-primary/20 focus:border-primary transition-colors" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Contact Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your phone number" 
                                className="border-primary/20 focus:border-primary transition-colors" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-primary/20 focus:border-primary transition-colors">
                                <SelectValue placeholder="Select your gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="services"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Services of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-primary/20 focus:border-primary transition-colors">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-6">
                      <h4 className="text-primary font-medium text-lg">Medical History</h4>
                      
                      <FormField
                        control={form.control}
                        name="previousSurgery"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">
                              • Have you undergone any hair or skin-related surgeries before?
                            </FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="border-primary/20 focus:border-primary transition-colors">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="yes">Yes</SelectItem>
                                  <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="allergies"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">
                              • Do you have any allergies?
                            </FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="border-primary/20 focus:border-primary transition-colors">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="yes">Yes</SelectItem>
                                  <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="metallic" 
                      size="lg" 
                      className="w-full relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <CheckCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteering;
