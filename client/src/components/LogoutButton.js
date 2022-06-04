import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="center btn" onClick={handleLogout}>
        Log Out
      </div>
    </>
  );
};

export default LogoutButton;
