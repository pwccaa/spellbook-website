import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import banner from "../data/banner.jpg";
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <img src={banner} alt="D&D Spells Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="main-title">DUNGEONS & DRAGONS</h1>
        </div>
      </div>

      <div className="content-section">
        <h2>
          Dungeons & Dragons 5th edition Spells, Spellbooks and Spellcaster
          Classes
        </h2>
        <p>Creating and managing PCs and NPCs spellsheets made easy!</p>

        <div className="feature-card">
          <div className="icon">🔮</div>
          <h3>Spells</h3>
          <p>Explore the D&D 5e spells list with all the control you need.</p>
          <p>
            Filter spells by its level, spell school, by the type of attack roll
            it uses, by its saving throw, by the components it uses and more.
          </p>
          <Link to="/spellbook" className="explore-button">
            Explore Spells
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
