// import Hero from "../components/Hero.js";
import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Card from "../components/Card";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
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
          <Typewriter
            options={{
              strings: ["Hello", "World"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/student" className="btn">
                  Let's Start Learning
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/student/" className="btn">
                  Student
                </Link>
                <Link to="/tutor/" className="btn">
                  Tutor
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div>
      </div>
      <Card />
    </div>
  );
}
