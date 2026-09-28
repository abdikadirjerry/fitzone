import { useEffect, useState } from "react";
import { Check, X, CreditCard, ArrowRight, ShieldCheck } from "lucide-react";
import { useMembership } from "../context/MembershipContext";
import "./MembershipModal.css";

function MembershipModal() {
  const { selectedPlan, billingCycle, closeMembership } = useMembership();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!selectedPlan) {
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  useEffect(() => {
    if (!selectedPlan) {
      setFormData({
        name: "",
        email: "",
      });
      setIsSubmitted(false);
    }
  }, [selectedPlan]);

  if (!selectedPlan) {
    return null;
  }

  const price =
    billingCycle === "yearly"
      ? selectedPlan.yearlyPrice
      : selectedPlan.monthlyPrice;

  const period = billingCycle === "yearly" ? "month" : "month";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    closeMembership();
  };

  return (
    <div
      className="membership-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="membership-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="membership-modal__content">
        <button
          type="button"
          className="membership-modal__close"
          onClick={handleClose}
          aria-label="Close membership form"
        >
          <X size={21} />
        </button>

        {isSubmitted ? (
          <div className="membership-modal__success">
            <div className="membership-modal__success-icon">
              <Check size={30} strokeWidth={2.5} />
            </div>

            <span className="section-label">Application Received</span>

            <h2 id="membership-modal-title">WELCOME TO FITZONE.</h2>

            <p>
              Thanks, {formData.name}. Your request for the{" "}
              <strong>{selectedPlan.name}</strong> membership has been received.
            </p>

            <p className="membership-modal__success-note">
              Our team will contact you at {formData.email} with the next steps.
            </p>

            <button
              type="button"
              className="membership-modal__primary-button"
              onClick={handleClose}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="membership-modal__header">
              <span className="section-label">Join FitZone</span>

              <h2 id="membership-modal-title">
                START YOUR <span>TRANSFORMATION.</span>
              </h2>

              <p>
                Complete the form below and our team will help you get started.
              </p>
            </div>

            <div className="membership-modal__plan">
              <div>
                <span>Selected Plan</span>
                <strong>{selectedPlan.name}</strong>
              </div>

              <div className="membership-modal__price">
                <strong>${price}</strong>
                <span>/{period}</span>
              </div>
            </div>

            <div className="membership-modal__features">
              {selectedPlan.features.slice(0, 3).map((feature) => (
                <span key={feature}>
                  <Check size={15} />
                  {feature}
                </span>
              ))}
            </div>

            <form className="membership-modal__form" onSubmit={handleSubmit}>
              <div className="membership-modal__field">
                <label htmlFor="membership-name">Full Name</label>

                <input
                  id="membership-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="membership-modal__field">
                <label htmlFor="membership-email">Email Address</label>

                <input
                  id="membership-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="membership-modal__primary-button"
              >
                <span>Continue</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="membership-modal__secure">
              <ShieldCheck size={17} />
              <span>Your information is kept secure.</span>
              <CreditCard size={17} />
              <span>No payment required yet.</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MembershipModal;
