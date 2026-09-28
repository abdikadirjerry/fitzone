import {
  Dumbbell,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
];

const serviceLinks = [
  { label: "Membership", href: "#membership" },
  { label: "Schedule", href: "#schedule" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-icon">
              <Dumbbell size={24} strokeWidth={2.5} />
            </span>

            <span className="footer__logo-text">
              FIT<span>ZONE</span>
            </span>
          </a>

          <p className="footer__description">
            Train with purpose. Live with strength. FitZone is your complete
            fitness destination for training, coaching, and community.
          </p>

          <a href="#membership" className="footer__cta">
            <span>Start Your Journey</span>
            <ArrowUpRight size={17} strokeWidth={2.5} />
          </a>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3>Explore</h3>

          <ul>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column footer__contact">
          <h3>Get In Touch</h3>

          <a href="mailto:hello@fitzone.com">
            <Mail size={17} />
            <span>hello@fitzone.com</span>
          </a>

          <a href="tel:+15551234567">
            <Phone size={17} />
            <span>+1 (555) 123-4567</span>
          </a>

          <a href="#contact">
            <MapPin size={17} />
            <span>125 Fitness Avenue</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p>© {currentYear} FitZone. All rights reserved.</p>

          <div className="footer__socials">
            <a href="#contact" aria-label="Instagram">
              <Instagram size={18} />
            </a>

            <a href="#contact" aria-label="Facebook">
              <Facebook size={18} />
            </a>

            <a href="#contact" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>

          <div className="footer__legal">
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
