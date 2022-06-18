import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import {BiLogOut} from "react-icons/bi";

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
      <div onClick={handleLogout} className="logout-btn">
        <BiLogOut />Log Out
      </div>
    </>
  );
};

export default LogoutButton;
