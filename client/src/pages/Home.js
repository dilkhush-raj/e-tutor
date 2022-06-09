// import Hero from "../components/Hero.js";
import React from "react";
import PopularCourse from "../components/PopularCourse";
import { useUserAuth } from "../context/UserAuthContext";
import AllCourse from "../components/AllCourse";

export default function Home() {
  const { user } = useUserAuth();
  return (
    <div className="home page">
      <div className="hero">
        <div className="content">
          <h1>Welcome to e-Tutor</h1>
          <h2>
            <div>{user && user.displayName}</div>
          </h2>
          <p>We have the best tutor to teach you.</p>
        </div>
        <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div>
      </div>
        <AllCourse />
    </div>
  );
}