import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/marchand" && <Header />}
      {children}
      {location.pathname !== "/marchand" && <Footer />}
    </>
  );
};

export default Layout;
