import Hero from "../components/Hero.js";
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function LandingPage() {
    const { user } = useUserAuth();
  
    console.log("Check user in Private: ", user);
    if (user) {
      return <Navigate to="/home" />;
    }


    return (
      <div className="home">
        <Hero />
        
      </div>
    );
  }