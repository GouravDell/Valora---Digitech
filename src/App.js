import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Testimonial />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;