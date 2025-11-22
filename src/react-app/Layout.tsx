import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ThemeProvider } from "@/react-app/contexts/ThemeContext";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="bg-[#f8fafc] dark:bg-gray-900 text-[#111111] dark:text-gray-100 min-h-screen transition-colors duration-300">

        {/* GLOBAL HEADER (always visible) */}
        <Header />

        {/* Changing page content */}
        <Outlet />

        {/* GLOBAL FOOTER */}
        <Footer />

      </div>
    </ThemeProvider>
  );
}
