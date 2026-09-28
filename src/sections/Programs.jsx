import { ArrowRight, Clock3, Flame, Target } from "lucide-react";
import { useState } from "react";
import "./Programs.css";

const categories = ["All", "Strength", "Cardio", "Weight Loss"];

const programs = [
  {
    id: 1,
    title: "Strength & Power",
    category: "Strength",
    level: "Intermediate",
    duration: "60 min",
    description:
      "Build raw strength and power with progressive resistance training.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    title: "HIIT Burn",
    category: "Cardio",
    level: "Advanced",
    duration: "45 min",
    description:
      "High-intensity intervals designed to push your endurance and burn calories.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Lean & Strong",
    category: "Weight Loss",
    level: "Beginner",
    duration: "50 min",
    description:
      "A balanced training program combining strength and metabolic conditioning.",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Muscle Builder",
    category: "Strength",
    level: "Advanced",
    duration: "75 min",
    description:
      "Structured resistance workouts focused on muscle growth and progressive overload.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Cardio Blast",
    category: "Cardio",
    level: "Intermediate",
    duration: "40 min",
    description:
      "Dynamic cardio sessions designed to improve stamina and cardiovascular fitness.",
    image:
      "https://images.unsplash.com/photo-1535743686920-55e4145369b9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "Total Transformation",
    category: "Weight Loss",
    level: "Intermediate",
    duration: "60 min",
    description:
      "A complete body transformation program combining cardio, strength, and mobility.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
  },
];

function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  return (
    <section className="programs section" id="programs">
      <div className="programs__container container">
        <div className="programs__header">
          <div className="programs__heading">
            <span className="section-label">Training Programs</span>

            <h2 className="section-title">
              TRAIN WITH
              <span> PURPOSE.</span>
            </h2>

            <p className="section-description">
              Whether your goal is building strength, improving endurance, or
              transforming your body, find a program designed around your goals.
            </p>
          </div>

          <div
            className="programs__filters"
            role="tablist"
            aria-label="Workout categories"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`programs__filter ${
                  activeCategory === category ? "programs__filter--active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="programs__grid">
          {filteredPrograms.map((program) => (
            <article className="program-card" key={program.id}>
              <div className="program-card__image-wrapper">
                <img
                  className="program-card__image"
                  src={program.image}
                  alt={`${program.title} workout`}
                  loading="lazy"
                />

                <div className="program-card__image-overlay" />

                <span className="program-card__category">
                  {program.category}
                </span>

                <span className="program-card__level">{program.level}</span>
              </div>

              <div className="program-card__content">
                <div className="program-card__meta">
                  <span>
                    <Clock3 size={15} />
                    {program.duration}
                  </span>

                  <span>
                    <Flame size={15} />
                    High Impact
                  </span>
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <a href="#membership" className="program-card__link">
                  View Program
                  <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="programs__bottom">
          <div className="programs__bottom-icon">
            <Target size={22} />
          </div>

          <div>
            <strong>Not sure where to start?</strong>
            <span>
              Our trainers can help you find the right program for your goals.
            </span>
          </div>

          <a href="#trainers">
            Meet Our Trainers
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Programs;
