import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/logo2.png";

const LandingPageFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo + Address Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-8">
          <img
            src={Logo}
            alt="DrEduMed Logo"
            className="h-32 w-auto object-contain"
          />

          <div className="space-y-3 max-w-md">
            <div className="flex items-start justify-center gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <div>
                <p>3rd Floor, 64, Variety Hall Rd,</p>
                <p>Town Hall, Coimbatore - 641001</p>
                <p>Tamil Nadu</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:9751510000" className="hover:underline">
                97515 10000
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:coimbatore@dredumed.com"
                className="hover:underline"
              >
                coimbatore@dredumed.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-primary-foreground/80 text-xs">
            © 2025 MedEdu Institute. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-1">
            Website by{" "}
            <a
              href="https://discovertechnologies.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              ARA Discover Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
