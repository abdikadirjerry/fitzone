import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MembershipModal from "./components/MembershipModal";
import { MembershipProvider } from "./context/MembershipContext";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Membership from "./sections/Membership";
import Schedule from "./sections/Schedule";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <MembershipProvider>
      <div className="app">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Programs />
          <Trainers />
          <Membership />
          <Schedule />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <MembershipModal />
      </div>
    </MembershipProvider>
  );
}

export default App;
