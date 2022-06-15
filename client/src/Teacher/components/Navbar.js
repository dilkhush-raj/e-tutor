import { Link } from "react-router-dom";

export default function Navbar() {
  const Links = [
    {
      title: "Home",
      path: "/teacher",
    },
    {
      title: "Courses",
      path: "/teacher/courses",
    },
    {
      title: "Add Course",
      path: "/teacher/courses/add",
    },
    {
      title: "Login",
      path: "/teacher/login",
    },
    {
      title: "Signup",
      path: "/teacher/signup",
    },
  ];

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">e-School</h1>
      </Link>
      <ul className="nav-link">
        {Links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
