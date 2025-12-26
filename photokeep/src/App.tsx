import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <FAQ/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
