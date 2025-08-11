import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import LandingPageFooter from "./LandingPageFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const hideHeaderRoutes = [
    "/landingpage",
    "/contactpage",
    "/faceinjectables",
    "/semipermanentmakeup",
    "/hydrafacial",
    "/injectables",
    "/adv-semi-makeup",
    "/semi-makeup",
    "/laser",
    "/chemical-peel",
    "/medi-facial",
    "/trichology",
    "/HairTransplant",
    "/ClinicalCosmetology",
    "/SkinTechnicians",
    "/FellowCosmetology",
    "/FacialAesthetic",
    "/diploma-facial-injectables",
  ];

  const landingPageFooterRoutes = [
    "/landingpage",
    "/adv-semi-makeup",
    "/semi-makeup",
    "/laser",
    "/chemical-peel",
    "/medi-facial",
    "/trichology",
    "/FellowCosmetology",
    "/FacialAesthetic",
    "/injectables",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main className="flex-1">{children}</main>
      {landingPageFooterRoutes.includes(location.pathname) ? (
        <LandingPageFooter />
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
