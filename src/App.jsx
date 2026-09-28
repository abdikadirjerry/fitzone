import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Membership from "./sections/Membership";
import Schedule from "./sections/Schedule";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Schedule />
      </main>
    </div>
  );
}

export default App;
