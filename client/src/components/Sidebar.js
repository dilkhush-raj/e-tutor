import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import ProfileImage from "../avatar.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);

  const { user } = useUserAuth();

  function CheckUser(user){
    if (user) {
      return true;
    }
  }

  const Links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "My Learning",
      path: "/student",
    },
    // {
    //   title: "My Cart",
    //   path: "/",
    // },
    // {
    //   title: "Account Settings",
    //   path: "/",
    // },
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
    <>
     <div id="menu-btn" className="menu-button" onClick={ShowSidebar} >
        =
      </div>
    <div className={sidebar ? "sidebar active-sidebar" : "sidebar"}  onClick={ShowSidebar}>
     
      <div className="row">
        <div className="user-image">
          {/* <img src="/images/avatar.png" alt="user profile" /> */}
          <img src={(user && user.photoURL) || ProfileImage} />
        </div>
        <div className="center">
          <div>{user && user.displayName}</div>
          <div>{user && user.email}</div>
        </div>
      </div>
      <div className="login-btn">
        {CheckUser(user) ? <LogoutButton/> : <LoginButton />}
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
    </>
  );
}
