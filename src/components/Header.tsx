import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div>
              <img
                src={Logo}
                alt="MedEdu Logo"
                className="h-20 w-20 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.name === "Courses" ? (
                <div key="Courses" className="relative group">
                  <button
                    className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname.startsWith("/courses")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    Courses
                  </button>

                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                    {[
                      { id: "all", name: "All Programs" },
                      { id: "master", name: "Master Courses" },
                      { id: "pg", name: "PG Diploma" },
                      { id: "fellowship", name: "Fellowship Courses" },
                      { id: "certificate", name: "Certificate Courses" },
                      { id: "workshop", name: "Live Workshop" },
                    ].map((category) => (
                      <Link
                        key={category.id}
                        to={`/courses?category=${category.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:flex">
            <Button className="gradient-primary shadow-elegant hover:shadow-hover transition-all">
              Apply Now
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <nav className="py-4 space-y-2">
              {navItems.map((item) =>
                item.name === "Courses" ? (
                  <div key="Courses" className="space-y-1">
                    <span className="block px-3 py-2 text-base font-medium text-muted-foreground">
                      Courses
                    </span>
                    {[
                      { id: "all", name: "All Programs" },
                      { id: "master", name: "Master Courses" },
                      { id: "pg", name: "PG Diploma" },
                      { id: "fellowship", name: "Fellowship Courses" },
                      { id: "certificate", name: "Certificate Courses" },
                      { id: "workshop", name: "Live Workshop" },
                    ].map((category) => (
                      <Link
                        key={category.id}
                        to={`/courses?category=${category.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block ml-4 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary rounded-md"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* <div className="pt-2">
                <Button className="w-full gradient-primary shadow-elegant">
                  Apply Now
                </Button>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
