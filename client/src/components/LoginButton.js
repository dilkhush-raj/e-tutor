import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
        <Link to="/login">
          Login
        </Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/signup">
          Signup
        </Link>
    </>
  );
};

export default LoginButton;
