import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
        <Link to="/student/login">
          <div className="center btn">Log In</div>
        </Link>
        <Link to="/student/signup">
          <div className="center btn">Sign Up</div>
        </Link>
    </>
  );
};

export default LoginButton;
