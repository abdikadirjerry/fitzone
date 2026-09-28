import { useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import "./Contact.css";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "125 Fitness Avenue",
    detail: "Downtown, Your City",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    detail: "Mon–Sat, 6AM–10PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@fitzone.com",
    detail: "We reply within 24 hours",
  },
];

const openingHours = [
  ["Monday – Friday", "6:00 AM – 10:00 PM"],
  ["Saturday", "7:00 AM – 8:00 PM"],
  ["Sunday", "8:00 AM – 6:00 PM"],
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header">
          <div>
            <span className="section-label">GET IN TOUCH</span>

            <h2 className="section-title">
              LET&apos;S START
              <span>YOUR JOURNEY.</span>
            </h2>
          </div>

          <p className="section-description">
            Have questions about membership, personal training, or our classes?
            Our team is ready to help you take the next step.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__information">
            <div className="contact__details">
              {contactDetails.map(({ icon: Icon, title, content, detail }) => (
                <div className="contact__detail" key={title}>
                  <div className="contact__detail-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <span className="contact__detail-title">{title}</span>
                    <strong>{content}</strong>
                    <small>{detail}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__hours">
              <div className="contact__hours-header">
                <Clock3 size={20} />
                <h3>Opening Hours</h3>
              </div>

              <div className="contact__hours-list">
                {openingHours.map(([day, hours]) => (
                  <div key={day}>
                    <span>{day}</span>
                    <strong>{hours}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact__social">
              <span>FOLLOW FITZONE</span>
              <SocialLinks compact />
            </div>
          </div>

          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <MessageCircle size={30} />
                </div>

                <span className="section-label">MESSAGE SENT</span>

                <h3>THANK YOU!</h3>

                <p>
                  Your message has been received. Our team will get back to you
                  within 24 hours.
                </p>

                <button
                  type="button"
                  className="contact__reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-header">
                  <span className="section-label">SEND A MESSAGE</span>

                  <h3>WE&apos;RE HERE TO HELP.</h3>

                  <p>
                    Fill out the form and a member of our team will contact you.
                  </p>
                </div>

                <div className="contact__form-row">
                  <label>
                    <span>Full Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
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
                      placeholder="you@example.com"
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
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows="6"
                    required
                  />
                </label>

                <button type="submit" className="contact__submit">
                  Send Message
                  <MessageCircle size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
