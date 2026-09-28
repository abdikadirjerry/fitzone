import {
  ArrowRight,
  Check,
  Dumbbell,
  HeartPulse,
  Users,
  Trophy,
} from "lucide-react";
import "./About.css";

const gymBenefits = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with professional-grade equipment designed for every fitness level.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Get guidance and motivation from experienced fitness professionals.",
  },
  {
    icon: HeartPulse,
    title: "Personalized Training",
    description:
      "Follow workout plans tailored to your individual goals and abilities.",
  },
];

const gymHighlights = [
  "Fully equipped strength and cardio zones",
  "Certified personal trainers",
  "Supportive and motivating community",
  "Flexible membership options",
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <div className="about__visual">
          <div className="about__image-wrapper">
            <img
              className="about__image"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85"
              alt="Modern gym interior with professional workout equipment"
              loading="lazy"
            />

            <div className="about__image-overlay" />

            <div className="about__experience">
              <Trophy size={25} strokeWidth={1.8} />
              <div>
                <strong>10+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="about__visual-accent" aria-hidden="true" />
        </div>

        <div className="about__content">
          <span className="section-label">About FitZone</span>

          <h2 className="section-title about__title">
            MORE THAN A GYM.
            <span> A LIFESTYLE.</span>
          </h2>

          <p className="about__description">
            At FitZone, we believe fitness is about more than lifting weights.
            It's about building confidence, developing discipline, and creating
            a healthier lifestyle.
          </p>

          <p className="about__description">
            Whether you're just starting your journey or pushing toward your
            next personal record, our facilities, trainers, and community are
            here to help you progress.
          </p>

          <div className="about__benefits">
            {gymBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="about__benefit" key={benefit.title}>
                  <div className="about__benefit-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="about__benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <ul className="about__highlights">
            {gymHighlights.map((highlight) => (
              <li key={highlight}>
                <span className="about__check">
                  <Check size={15} strokeWidth={3} />
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <a href="#membership" className="about__button">
            Discover Membership
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
