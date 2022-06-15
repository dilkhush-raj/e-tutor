// import Hero from "../components/Hero.js";
import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Card from "../components/Card";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";

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
        <h1 className="banner-heading1">Start Learning From </h1>
        <span className="banner-heading2">The World's Best Teachers</span>

        <div className="content">
          <p>
            Start, switch, or advance your career with more than 5,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Typewriter
            options={{
              strings: ["Learn From Anywhere", "Learn Without Limits"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explore all courses
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/teacher/" className="btn">
                  Teach
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="flex">
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
