import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <section className="landing-container">
      {/* Decorative Circle */}
      <div className="circle-deco"></div>

      <div className="landing-content">
        <h1 className="landing-title">TicketFlow</h1>
        <p className="landing-subtitle">
          Manage support tickets seamlessly – track, resolve, and organize tasks efficiently
        </p>

        <div className="landing-buttons">
          <Link to="/auth/login" className="btn primary-btn">Login</Link>
          <Link to="/auth/signup" className="btn secondary-btn">Get Started</Link>
        </div>
      </div>

      {/* Wavy Background */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1e1e2f"
          fillOpacity="1"
          d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,138.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Landing;
