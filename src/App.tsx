import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import Contact1 from "./pages/Contact1";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Volunteering from "./pages/Volunteering";
import FaceInjection from "./pages/CourseDetails/FaceInjectables";
import SemiPermanentMakeup from "./pages/CourseDetails/Semi-PermanentMakeup";
import HydraFacial from "./pages/CourseDetails/Hydrafacial";
import Injectables from "./pages/CourseDetails/Injectables";
import CertifiCourseAdvSemiPermanentMakeup from "./pages/CourseDetails/Certifi-course-Semi_perma_makeup";
import CertifiCourseSemiMakeup from "./pages/CourseDetails/Certifi_Course_Semi-Permanent-Makeup";
import CertifiLaser from "./pages/CourseDetails/CertifiLaser";
import ChemicalPeel from "./pages/CourseDetails/ChemicalPeel";
import MediFacial from "./pages/CourseDetails/MediFacial";
import ClinicTrichology from "./pages/CourseDetails/ClinicalTrichology";
import HairTransplant from "./pages/CourseDetails/HairTransplant";
import ClinicalCosmetology from "./pages/CourseDetails/DiplomaFacialInjectables";
import SkinTechnicians from "./pages/CourseDetails/SkinTechnician";
import FellowCosmetology from "./pages/CourseDetails/FellowCosmetology";
import FaceAesthetics from "./pages/CourseDetails/FacialAesthetics";
import DiplomaFacialInjectables from "./pages/CourseDetails/DiplomaFacialInjectables";
import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/Thankyou";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          {/* <LoadingSpinner /> */}
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/landingpage" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/volunteering" element={<Volunteering />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contactpage" element={<Contact1 />} />
              <Route path="/faceinjectables" element={<FaceInjection />} />
              <Route path="/semipermanentmakeup" element={<SemiPermanentMakeup />} />
              <Route path="/hydrafacial" element={<HydraFacial />} />
              <Route path="/injectables" element={<Injectables />} />
              <Route
                path="/adv-semi-makeup"
                element={<CertifiCourseAdvSemiPermanentMakeup />}
              />
              <Route
                path="/semi-makeup"
                element={<CertifiCourseSemiMakeup />}
              />
              <Route
                path="/laser"
                element={<CertifiLaser />}
              />
               <Route
                path="/chemical-peel"
                element={<ChemicalPeel />}
              />
               <Route
                path="/medi-facial"
                element={<MediFacial />}
              />
              <Route
                path="/trichology"
                element={<ClinicTrichology />}
              />
                <Route path="/HairTransplant" element={<HairTransplant />} />
              <Route path="/ClinicalCosmetology" element={<ClinicalCosmetology />} />
               <Route path="/diploma-facial-injectables" element={<DiplomaFacialInjectables />} />
              <Route path="/SkinTechnicians" element={<SkinTechnicians />} />
              <Route path="/FellowCosmetology" element={<FellowCosmetology />} />
              <Route path="/FacialAesthetic" element={<FaceAesthetics />} />
                <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>

        <a
          href="https://wa.me/9751510000" // replace with your number
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
