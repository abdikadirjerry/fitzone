import { ArrowUpRight, Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-icon">
                <Dumbbell size={22} />
              </span>

              <span>FITZONE</span>
            </a>

            <p className="footer__description">
              Train harder, move better, and become the strongest version of
              yourself with FitZone.
            </p>

            <a href="#membership" className="footer__cta">
              Start Your Journey
              <ArrowUpRight size={18} />
            </a>

            <SocialLinks />
          </div>

          <div className="footer__column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#programs">Programs</a>
              </li>
              <li>
                <a href="#trainers">Trainers</a>
              </li>
              <li>
                <a href="#membership">Membership</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Explore</h3>

            <ul>
              <li>
                <a href="#schedule">Class Schedule</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#membership">Join FitZone</a>
              </li>
            </ul>
          </div>

          <div className="footer__column footer__contact">
            <h3>Get In Touch</h3>

            <a href="mailto:hello@fitzone.com">
              <Mail size={18} />
              <span>hello@fitzone.com</span>
            </a>

            <a href="tel:+15551234567">
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </a>

            <a href="#contact">
              <MapPin size={18} />
              <span>125 Fitness Avenue, Downtown</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} FitZone. All rights reserved.</p>

          <div className="footer__legal">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
