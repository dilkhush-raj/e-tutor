import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import ProfileImage from '../avatar.png'
// import Hero from "./Hero.js";

export default function Sidebar() {
    const { logOut, user } = useUserAuth();
    const [imgSrc, setImgSrc] = useState("/images/avatar.png");
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
      path: "/student",
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
      title: "Teach on e-Tutor",
      path: "/tutor/login",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "About Us",
      path: "/about",
    },
  ];

  return (
    <div className="sidebar">
      <div className="row">
        <div className="user-image">
          {/* <img src="/images/avatar.png" alt="user profile" /> */}
          <img src={user && user.photoURL || ProfileImage} />
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
