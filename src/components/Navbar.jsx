import { useState } from "react";
import { ArrowUpRight, Dumbbell, LogIn, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openAuth = (mode) => {
    window.dispatchEvent(
      new CustomEvent("fitzone:open-auth", {
        detail: { mode },
      }),
    );

    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <a
          href="#home"
          className="navbar__logo"
          aria-label="FitZone home"
          onClick={closeMenu}
        >
          <span className="navbar__logo-icon">
            <Dumbbell size={25} strokeWidth={2.5} />
          </span>

          <span className="navbar__logo-text">
            FIT<span>ZONE</span>
          </span>
        </a>

        <button
          type="button"
          className="navbar__menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__navigation ${
            isMenuOpen ? "navbar__navigation--open" : ""
          }`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => (
              <li className="navbar__item" key={link.href}>
                <a
                  className="navbar__link"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            {user ? (
              <button
                type="button"
                className="navbar__member"
                onClick={() => openAuth("login")}
              >
                <span className="navbar__member-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </span>

                <span>{user.name.split(" ")[0]}</span>
              </button>
            ) : (
              <button
                type="button"
                className="navbar__login"
                onClick={() => openAuth("login")}
              >
                <LogIn size={17} />
                <span>Sign In</span>
              </button>
            )}

            <a href="#membership" className="navbar__cta" onClick={closeMenu}>
              <span>Join Now</span>
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
