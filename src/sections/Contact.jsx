import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "125 Fitness Avenue",
    detail: "Downtown, Your City",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    detail: "Mon–Sat, 6AM–10PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@fitzone.com",
    detail: "We reply within 24 hours",
  },
];

const openingHours = [
  { day: "Monday – Friday", hours: "6:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 6:00 PM" },
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <div className="contact__header">
          <span className="section-label">Get In Touch</span>

          <h2 className="section-title">
            LET'S BUILD
            <span> SOMETHING STRONG.</span>
          </h2>

          <p className="section-description">
            Have questions about memberships, training programs, or personal
            coaching? Our team is ready to help you take the next step.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__left">
            <div className="contact__details">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div className="contact-detail" key={detail.label}>
                    <div className="contact-detail__icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                      <small>{detail.detail}</small>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact__hours">
              <div className="contact__hours-header">
                <Clock3 size={19} />
                <h3>Opening Hours</h3>
              </div>

              <div className="contact__hours-list">
                {openingHours.map((item) => (
                  <div className="contact__hours-row" key={item.day}>
                    <span>{item.day}</span>
                    <strong>{item.hours}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact__social">
              <span>Follow FitZone</span>

              <div>
                <a href="#contact" aria-label="Instagram">
                  <Instagram size={18} />
                </a>

                <a href="#contact" aria-label="Facebook">
                  <span>f</span>
                </a>

                <a href="#contact" aria-label="TikTok">
                  <span>t</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper">
            <div className="contact__form-header">
              <div>
                <span className="section-label">Send A Message</span>
                <h3>WE'RE HERE TO HELP.</h3>
              </div>

              <Send size={24} />
            </div>

            {isSubmitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <Send size={25} />
                </div>

                <h3>Message Sent!</h3>

                <p>
                  Thanks for reaching out. Our team will get back to you as soon
                  as possible.
                </p>

                <button type="button" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <label>
                    <span>Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </label>

                  <label>
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>

                <label>
                  <span>Your Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="5"
                    required
                  />
                </label>

                <button type="submit" className="contact__submit">
                  <span>Send Message</span>
                  <ArrowUpRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="contact__location">
          <div className="contact__location-content">
            <div className="contact__location-icon">
              <MapPin size={23} />
            </div>

            <div>
              <span className="section-label">Find Us</span>
              <h3>125 FITNESS AVENUE</h3>
              <p>Downtown, Your City</p>
            </div>
          </div>

          <a href="#contact">
            Get Directions
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
