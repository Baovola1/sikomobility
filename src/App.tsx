import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
