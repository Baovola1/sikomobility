import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marchand from "./pages/Marchand";
import Layout from "./components/Layout";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/marchand" element={<Marchand />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
