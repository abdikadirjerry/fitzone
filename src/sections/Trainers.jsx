import { ArrowUpRight, Trophy } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import "./Trainers.css";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength & Conditioning",
    experience: "12 Years Experience",
    specialty: "Strength Training",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sophia Williams",
    role: "Fitness & Weight Loss",
    experience: "9 Years Experience",
    specialty: "Body Transformation",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Daniel Carter",
    role: "Performance Coach",
    experience: "10 Years Experience",
    specialty: "Athletic Performance",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Emma Rodriguez",
    role: "Mobility & Wellness",
    experience: "8 Years Experience",
    specialty: "Mobility & Recovery",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=85",
  },
];

function Trainers() {
  return (
    <section className="trainers section" id="trainers">
      <div className="container">
        <div className="trainers__header">
          <div>
            <span className="section-label">MEET THE TEAM</span>

            <h2 className="section-title">
              EXPERTS WHO
              <span>MOVE YOU FORWARD.</span>
            </h2>
          </div>

          <p className="section-description">
            Our certified coaches bring experience, energy, and personalized
            guidance to every training session.
          </p>
        </div>

        <div className="trainers__grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-card__image">
                <img src={trainer.image} alt={trainer.name} loading="lazy" />

                <span className="trainer-card__specialty">
                  {trainer.specialty}
                </span>
              </div>

              <div className="trainer-card__content">
                <span className="trainer-card__role">{trainer.role}</span>

                <h3>{trainer.name}</h3>

                <div className="trainer-card__meta">
                  <Trophy size={16} />
                  <span>{trainer.experience}</span>
                </div>

                <div className="trainer-card__footer">
                  <SocialLinks compact />

                  <a href="#contact" aria-label={`Contact ${trainer.name}`}>
                    <ArrowUpRight size={19} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="trainers__cta">
          <div>
            <span className="section-label">PERSONAL COACHING</span>

            <h3>READY TO TRAIN WITH A PRO?</h3>

            <p>
              Get personalized guidance designed around your goals, experience,
              and lifestyle.
            </p>
          </div>

          <a href="#contact" className="trainers__cta-button">
            Talk To A Coach
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
