import { ArrowRight, Play, Users, Dumbbell, Trophy } from "lucide-react";
import "./Hero.css";

const fitnessStats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Active Members",
  },
  {
    icon: Dumbbell,
    value: "15+",
    label: "Expert Trainers",
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Years Experience",
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__container container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            PUSH YOUR LIMITS
          </span>

          <h1 className="hero__title">
            BUILD YOUR
            <br />
            <span>BEST</span> VERSION
            <br />
            OF YOURSELF
          </h1>

          <p className="hero__description">
            Transform your body, strengthen your mind, and unlock your full
            potential. Your fitness journey starts with one decision.
          </p>

          <div className="hero__actions">
            <a href="#programs" className="hero__button hero__button--primary">
              Explore Programs
              <ArrowRight size={19} />
            </a>

            <a href="#about" className="hero__button hero__button--secondary">
              <span className="hero__play-icon">
                <Play size={15} fill="currentColor" />
              </span>
              Discover FitZone
            </a>
          </div>

          <div className="hero__stats">
            {fitnessStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div className="hero__stat" key={stat.label}>
                  <div className="hero__stat-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="hero__stat-info">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>

                  {index !== fitnessStats.length - 1 && (
                    <span className="hero__stat-divider" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}

export default Hero;
