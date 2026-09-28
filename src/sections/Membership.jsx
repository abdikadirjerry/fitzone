import { Check, Crown, ArrowRight } from "lucide-react";
import { useState } from "react";
import "./Membership.css";

const plans = [
  {
    id: "basic",
    name: "Starter",
    description: "Everything you need to begin your fitness journey.",
    monthlyPrice: 39,
    yearlyPrice: 31,
    features: [
      "Full gym access",
      "Locker room access",
      "Free fitness assessment",
      "Access to group classes",
    ],
  },
  {
    id: "pro",
    name: "Performance",
    description: "The complete experience for serious fitness goals.",
    monthlyPrice: 69,
    yearlyPrice: 55,
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 personal training session",
      "Customized workout plan",
      "Nutrition guidance",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    description: "Premium coaching and support for maximum results.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Everything in Performance",
      "4 personal training sessions",
      "Personal nutrition plan",
      "Priority trainer support",
      "Monthly progress tracking",
    ],
  },
];

function Membership() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const isYearly = billingPeriod === "yearly";

  return (
    <section className="membership section" id="membership">
      <div className="membership__container container">
        <div className="membership__header">
          <div className="membership__heading">
            <span className="section-label">Membership Plans</span>

            <h2 className="section-title">
              INVEST IN
              <span> YOURSELF.</span>
            </h2>

            <p className="section-description">
              Choose a membership that fits your goals and get everything you
              need to become stronger, healthier, and more confident.
            </p>
          </div>

          <div className="membership__billing">
            <span
              className={!isYearly ? "membership__billing-label--active" : ""}
            >
              Monthly
            </span>

            <button
              type="button"
              className={`membership__toggle ${
                isYearly ? "membership__toggle--yearly" : ""
              }`}
              onClick={() => setBillingPeriod(isYearly ? "monthly" : "yearly")}
              aria-label="Toggle billing period"
              aria-pressed={isYearly}
            >
              <span className="membership__toggle-dot" />
            </button>

            <span
              className={isYearly ? "membership__billing-label--active" : ""}
            >
              Yearly
            </span>

            <span className="membership__save">SAVE 20%</span>
          </div>
        </div>

        <div className="membership__grid">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <article
                className={`membership-card ${
                  plan.popular ? "membership-card--popular" : ""
                }`}
                key={plan.id}
              >
                {plan.popular && (
                  <div className="membership-card__popular">
                    <Crown size={14} />
                    Most Popular
                  </div>
                )}

                <div className="membership-card__top">
                  <span className="membership-card__name">{plan.name}</span>

                  <p>{plan.description}</p>
                </div>

                <div className="membership-card__price">
                  <span className="membership-card__currency">$</span>
                  <strong>{price}</strong>
                  <span className="membership-card__period">/month</span>
                </div>

                {isYearly && (
                  <p className="membership-card__billing-note">
                    Billed annually
                  </p>
                )}

                <div className="membership-card__divider" />

                <ul className="membership-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="membership-card__check">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`membership-card__button ${
                    plan.popular ? "membership-card__button--primary" : ""
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="membership__footer">
          <p>
            All memberships include access to our modern facilities during
            regular opening hours.
          </p>

          <a href="#contact">Have questions? Talk to us</a>
        </div>
      </div>
    </section>
  );
}

export default Membership;
