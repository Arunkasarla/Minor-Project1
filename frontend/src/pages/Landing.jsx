import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              Trusted Home Services,
              <br /> At Your Doorstep
            </h1>
            <p>
              Book verified plumbers, electricians, cleaners & more — instantly.
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn">Get Started</Link>
              <Link to="/login" className="btn secondary">Login</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-row">
          <span>🔧 Plumber</span>
          <span>💡 Electrician</span>
          <span>🧹 Cleaner</span>
          <span>🪚 Carpenter</span>
          <span>🚗 Mechanic</span>
          <span>🧱 Civil Works</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section light">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step card">
            <h3>1. Choose Service</h3>
            <p>Select from trusted local professionals.</p>
          </div>
          <div className="step card">
            <h3>2. Pick Time & Location</h3>
            <p>Choose a slot and mark your location on the map.</p>
          </div>
          <div className="step card">
            <h3>3. Relax</h3>
            <p>Professional arrives and gets the job done.</p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <div className="trust">
          <div className="trust-item">✔ Verified Professionals</div>
          <div className="trust-item">✔ Transparent Pricing</div>
          <div className="trust-item">✔ Ratings & Reviews</div>
          <div className="trust-item">✔ Secure Platform</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to book a service?</h2>
        <Link to="/register" className="btn large">Get Started</Link>
      </section>
    </>
  );
};


export default Landing;