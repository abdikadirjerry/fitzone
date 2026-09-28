import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
