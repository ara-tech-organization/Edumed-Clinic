import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Youtube,
} from "lucide-react";
import { Global } from "recharts";
import Logo from "@/assets/logo2.png"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                <img
                  src={Logo}
                  alt="MedEdu Logo"
                  className="h-40 w-40 object-contain"
                />
              </div>

              {/* <span className="font-manrope text-xl">
                DrEduMed Medical & Aesthetic Training Academy
              </span> */}
            </div>
            {/* <p className="text-primary-foreground/80 leading-relaxed">
              Leading the future of medical education with innovative training
              programs and world-class facilities.
            </p> */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dr.edumedcoimbatore"
                className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://g.co/kgs/RcKpGE7"
                className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dr.edumedcoimbatore/"
                className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                Our Courses
              </Link>
              <Link
                to="/internship"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                Internship Program
              </Link>
              <Link
                to="/contact"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Programs</h3>
            <nav className="space-y-2">
              <a
                href="/courses"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                Master in Facial Injectables
              </a>
              <a
                href="/courses"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                Diploma in Aesthetic Skin Technician
              </a>
              <a
                href="/courses"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
               Fellowship in Facial Aesthetics
              </a>
              <a
                href="/courses"
                className="block hover:text-primary-foreground/80 transition-colors"
              >
                Certificate Course in Chemical Peel
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>3rd Floor, 64, Variety Hall Rd,</p>
                  <p>Town Hall,Coimbatore - 641001</p>
                  <p> Tamil Nadu </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:9751510000" className="text-sm sm:text-base">
                  97515 10000
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:coimbatore@dredumed.com"
                  className="text-sm sm:text-base"
                >
                  coimbatore@dredumed.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <p className="text-primary-foreground/80 text-sm max-w-4xl">
              © 2025 MedEdu Institute. All rights reserved. Website created by{" "}
              <a
                href="https://discovertechnologies.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors"
              >
                ARA Discover Technologies
              </a>{" "}
              – A unit of ARA Discoveries Pvt. Ltd.
            </p>
          </div>

          {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Accessibility
              </a>
            </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
