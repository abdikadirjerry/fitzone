import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "Member for 3 years",
    goal: "Strength & Muscle",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    quote:
      "FitZone completely changed the way I approach training. The trainers actually care about your progress, and the community keeps me motivated every single week.",
  },
  {
    id: 2,
    name: "Olivia Martinez",
    role: "Member for 2 years",
    goal: "Weight Loss",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote:
      "I joined FitZone with one goal and ended up changing my entire lifestyle. The structured programs and support from the trainers helped me stay consistent.",
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Member for 4 years",
    goal: "Athletic Performance",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote:
      "The equipment is excellent, but the people are what make FitZone different. My training has become more focused, and I have reached performance levels I never expected.",
  },
  {
    id: 4,
    name: "Sophia Davis",
    role: "Member for 1 year",
    goal: "Fitness & Wellness",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote:
      "What I love most is that FitZone never feels intimidating. Everyone is working toward something, and the trainers make sure you always know what to do next.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials__container container">
        <div className="testimonials__header">
          <div>
            <span className="section-label">Member Stories</span>

            <h2 className="section-title">
              REAL PEOPLE.
              <span> REAL RESULTS.</span>
            </h2>
          </div>

          <p className="section-description">
            Thousands of members have made FitZone part of their lifestyle. Here
            is what some of them have to say about their journey.
          </p>
        </div>

        <div className="testimonials__content">
          <div className="testimonials__featured">
            <div className="testimonials__quote-icon">
              <Quote size={28} />
            </div>

            <div className="testimonials__stars" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={17} fill="currentColor" />
              ))}
            </div>

            <blockquote>“{activeTestimonial.quote}”</blockquote>

            <div className="testimonials__author">
              <img src={activeTestimonial.image} alt={activeTestimonial.name} />

              <div>
                <strong>{activeTestimonial.name}</strong>
                <span>{activeTestimonial.role}</span>
              </div>

              <span className="testimonials__goal">
                {activeTestimonial.goal}
              </span>
            </div>
          </div>

          <div className="testimonials__side">
            <div className="testimonials__members">
              <strong>2,500+</strong>
              <span>Active members</span>
            </div>

            <div className="testimonials__rating">
              <div className="testimonials__rating-number">
                <strong>4.9</strong>

                <div>
                  <div className="testimonials__small-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <span>Average member rating</span>
                </div>
              </div>
            </div>

            <div className="testimonials__controls">
              <div className="testimonials__counter">
                <span>0{activeIndex + 1}</span>
                <div className="testimonials__counter-line">
                  <div
                    style={{
                      width: `${
                        ((activeIndex + 1) / testimonials.length) * 100
                      }%`,
                    }}
                  />
                </div>
                <span>0{testimonials.length}</span>
              </div>

              <div className="testimonials__buttons">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials__people">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.id}
              className={`testimonial-person ${
                index === activeIndex ? "testimonial-person--active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={testimonial.image} alt={testimonial.name} />

              <span>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.goal}</small>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
