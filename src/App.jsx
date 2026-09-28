import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
