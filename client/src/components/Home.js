import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
// import Hero from "./Hero.js";

const Home = () => {
  const { user } = useUserAuth();
  return (
    <>
      <h1 className="title">
        Let's start learning, {user && user.displayName}
      </h1>
    </>
  );
};

export default Home;
