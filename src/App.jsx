import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
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
      </main>
    </div>
  );
}

export default App;
