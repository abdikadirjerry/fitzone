import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Dumbbell,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
  X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./AuthModal.css";

function AuthModal() {
  const { login, register } = useAuth();

  const [mode, setMode] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = (event) => {
      const requestedMode = event.detail?.mode;

      setMode(requestedMode === "register" ? "register" : "login");
      setMessage("");
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setIsOpen(true);
    };

    window.addEventListener("fitzone:open-auth", handleOpen);

    return () => {
      window.removeEventListener("fitzone:open-auth", handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setMessage("");
    setIsSuccess(false);
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setMessage("");
    setIsSuccess(false);
    setFormData({
      name: "",
      email: formData.email,
      password: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result =
      mode === "login"
        ? login(formData.email, formData.password)
        : register(formData.name, formData.email, formData.password);

    if (!result.success) {
      setIsSuccess(false);
      setMessage(result.message);
      return;
    }

    setIsSuccess(true);
    setMessage(
      mode === "login"
        ? "You are now signed in to your FitZone account."
        : "Your FitZone account has been created successfully.",
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="auth-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="auth-modal__content">
        <button
          type="button"
          className="auth-modal__close"
          onClick={closeModal}
          aria-label="Close authentication modal"
        >
          <X size={20} />
        </button>

        <div className="auth-modal__brand">
          <span className="auth-modal__brand-icon">
            <Dumbbell size={22} />
          </span>

          <span>
            FIT<span>ZONE</span>
          </span>
        </div>

        {isSuccess ? (
          <div className="auth-modal__success">
            <div className="auth-modal__success-icon">
              <Check size={30} strokeWidth={2.5} />
            </div>

            <span className="section-label">
              {mode === "login" ? "Welcome Back" : "Account Created"}
            </span>

            <h2 id="auth-modal-title">
              {mode === "login" ? "YOU'RE SIGNED IN." : "WELCOME TO FITZONE."}
            </h2>

            <p>{message}</p>

            <button
              type="button"
              className="auth-modal__button"
              onClick={closeModal}
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <>
            <div className="auth-modal__header">
              <span className="section-label">
                {mode === "login" ? "Member Access" : "Join The Community"}
              </span>

              <h2 id="auth-modal-title">
                {mode === "login" ? "WELCOME BACK." : "CREATE YOUR ACCOUNT."}
              </h2>

              <p>
                {mode === "login"
                  ? "Sign in to access your FitZone member experience."
                  : "Create your account and start your fitness journey."}
              </p>
            </div>

            <div className="auth-modal__tabs">
              <button
                type="button"
                className={mode === "login" ? "active" : ""}
                onClick={() => switchMode("login")}
              >
                Sign In
              </button>

              <button
                type="button"
                className={mode === "register" ? "active" : ""}
                onClick={() => switchMode("register")}
              >
                Create Account
              </button>
            </div>

            <form className="auth-modal__form" onSubmit={handleSubmit}>
              {mode === "register" && (
                <div className="auth-modal__field">
                  <label htmlFor="auth-name">Full Name</label>

                  <div className="auth-modal__input">
                    <User size={17} />

                    <input
                      id="auth-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="auth-modal__field">
                <label htmlFor="auth-email">Email Address</label>

                <div className="auth-modal__input">
                  <Mail size={17} />

                  <input
                    id="auth-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="auth-modal__field">
                <label htmlFor="auth-password">Password</label>

                <div className="auth-modal__input">
                  <LockKeyhole size={17} />

                  <input
                    id="auth-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    minLength={6}
                    required
                  />

                  <button
                    type="button"
                    className="auth-modal__password-toggle"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              {message && !isSuccess && (
                <div className="auth-modal__message" role="alert">
                  {message}
                </div>
              )}

              <button type="submit" className="auth-modal__button">
                <span>{mode === "login" ? "Sign In" : "Create Account"}</span>

                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-modal__footer">
              <span>
                {mode === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </span>

              <button
                type="button"
                onClick={() =>
                  switchMode(mode === "login" ? "register" : "login")
                }
              >
                {mode === "login" ? "Create Account" : "Sign In"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
