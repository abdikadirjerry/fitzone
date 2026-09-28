import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MembershipModal from "./components/MembershipModal";
import AuthModal from "./components/AuthModal";
import ProtectedRoute from "./components/ProtectedRoute";
import { MembershipProvider } from "./context/MembershipContext";
import { AuthProvider } from "./context/AuthContext";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Membership from "./sections/Membership";
import Schedule from "./sections/Schedule";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import MemberDashboard from "./pages/MemberDashboard";
import "./App.css";

function HomePage() {
  return (
    <>
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
      <AuthModal />
    </>
  );
}

function DashboardPage() {
  return (
    <>
      <Navbar />

      <main>
        <MemberDashboard />
      </main>

      <Footer />

      <AuthModal />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <MembershipProvider>
        <BrowserRouter>
          <div className="app">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </MembershipProvider>
    </AuthProvider>
  );
}

export default App;
