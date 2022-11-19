import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import ServiceWelcome from "./components/ServiceWelcome.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServiceWelcome />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
