import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="page-placeholder" id="home">
          <div>
            <span className="section-label">Welcome to FitZone</span>
            <h1>Build Your Strength</h1>
            <p>
              Your fitness journey starts here. Get ready to transform your
              limits.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
