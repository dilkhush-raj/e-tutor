import { Link } from "react-router-dom";
import Home from "./Home";
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
// import Hero from "./Hero.js";

export default function Sidebar() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const Links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "My Learning",
      path: "/home",
    },
    {
      title: "My Cart",
      path: "/",
    },
    {
      title: "Account Settings",
      path: "/",
    },
    {
      title: "Become Tutor",
      path: "/",
    },
    {
      title: "Contact Us",
      path: "/",
    },
    {
      title: "About Us",
      path: "/",
    },
  ];

  return (
    <div className="sidebar">
      <div className="row">
        <div className="user-image">
          <img src={user.photoURL} alt="user profile" />
        </div>
        <div className="center">
        <div>{user && user.displayName}</div>
        <div>{user && user.email}</div>
        </div>
      </div>
      <div className="row">
        <div className="center btn" onClick={handleLogout}>
          Log Out
        </div>
      </div>
      <ul className="row">
        {Links.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
