// import Hero from "../components/Hero.js";
import React from "react";

export default function LandingPage() {
  return (
    <div className="home">
      <div className="hero">
        <div className="content">
          <h1>Welcome to e-Tutor</h1>
          <p>We have the best tutor to teach you.</p>
        </div>
        <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div>
      </div>
      <h2 className="title">Popular Courses on e-Tutor</h2>
    </div>
  );
}
