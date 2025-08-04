import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // List of routes where Header should not be shown
  const hideHeaderRoutes = ["/contactpage",];

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
