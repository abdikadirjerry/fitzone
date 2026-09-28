import { ArrowUpRight, Instagram, Linkedin, Trophy } from "lucide-react";
import "./Trainers.css";

const trainers = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "Strength & Conditioning",
    experience: "12 Years Experience",
    specialty: "Strength Training",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Fitness & Weight Loss",
    experience: "9 Years Experience",
    specialty: "Body Transformation",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Daniel Carter",
    role: "Performance Coach",
    experience: "10 Years Experience",
    specialty: "Athletic Performance",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Mobility & Wellness",
    experience: "8 Years Experience",
    specialty: "Mobility & Recovery",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
  },
];

function Trainers() {
  return (
    <section className="trainers section" id="trainers">
      <div className="trainers__container container">
        <div className="trainers__header">
          <div className="trainers__heading">
            <span className="section-label">Meet The Team</span>

            <h2 className="section-title">
              TRAIN WITH
              <span> THE BEST.</span>
            </h2>
          </div>

          <p className="section-description">
            Our certified trainers bring years of experience, proven techniques,
            and genuine passion to every session. Whatever your goal, we are
            here to help you reach it.
          </p>
        </div>

        <div className="trainers__grid">
          {trainers.map((trainer) => (
            <article className="trainer-card" key={trainer.id}>
              <div className="trainer-card__image-wrapper">
                <img
                  className="trainer-card__image"
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  loading="lazy"
                />

                <div className="trainer-card__overlay" />

                <span className="trainer-card__specialty">
                  {trainer.specialty}
                </span>

                <div className="trainer-card__socials">
                  <a href="#contact" aria-label={`${trainer.name} Instagram`}>
                    <Instagram size={17} />
                  </a>

                  <a href="#contact" aria-label={`${trainer.name} LinkedIn`}>
                    <Linkedin size={17} />
                  </a>
                </div>
              </div>

              <div className="trainer-card__content">
                <div className="trainer-card__top">
                  <div>
                    <h3>{trainer.name}</h3>
                    <p>{trainer.role}</p>
                  </div>

                  <span className="trainer-card__number">0{trainer.id}</span>
                </div>

                <div className="trainer-card__experience">
                  <Trophy size={16} />
                  <span>{trainer.experience}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="trainers__cta">
          <div className="trainers__cta-content">
            <span className="section-label">Personal Coaching</span>

            <h3>
              READY TO TRAIN
              <span> WITH PURPOSE?</span>
            </h3>

            <p>
              Get personalized guidance from a FitZone trainer and build a plan
              designed around your goals.
            </p>
          </div>

          <a href="#membership" className="trainers__cta-button">
            <span>Start Your Journey</span>
            <ArrowUpRight size={19} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
