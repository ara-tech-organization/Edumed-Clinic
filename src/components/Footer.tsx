import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground/20 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-manrope text-xl">MedEdu Institute</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading the future of medical education with innovative training programs and world-class facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block hover:text-primary-foreground/80 transition-colors">
                About Us
              </Link>
              <Link to="/courses" className="block hover:text-primary-foreground/80 transition-colors">
                Our Courses
              </Link>
              <Link to="/internship" className="block hover:text-primary-foreground/80 transition-colors">
                Internship Program
              </Link>
              <Link to="/contact" className="block hover:text-primary-foreground/80 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Programs</h3>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-primary-foreground/80 transition-colors">
                Medical Assistant
              </a>
              <a href="#" className="block hover:text-primary-foreground/80 transition-colors">
                Nursing
              </a>
              <a href="#" className="block hover:text-primary-foreground/80 transition-colors">
                Pharmacy Tech
              </a>
              <a href="#" className="block hover:text-primary-foreground/80 transition-colors">
                Clinical Research
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
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p>info@mededu.institute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 MedEdu Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;