// import Hero from "../components/Hero.js";
import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user){
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <div className="content">
          <h1>Welcome to e-Tutor</h1>
          <h2>
            <div>{user && user.displayName}</div>
          </h2>
          <p>We have the best tutor to teach you.</p>
          <div className="cta">
        {CheckUser(user) ? <div><Link to="/student" className="btn">Let's Start Learning</Link></div> : <div><Link to="/student/login/" className="btn">Login</Link><Link to="/student/signup" className="btn">Signup</Link><Link to="/tutor/login" className="btn">Tutor Login</Link></div>}
        </div>
        </div>
        <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div>
      </div>
    </div>
  );
}