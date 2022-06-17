import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { MdNotifications } from "react-icons/md";

export default function Navbar() {
  const Links = [
    { title: "Teach", path: "/teacher" },
    { title: <IoMdCart />, path: "/cart" },
    { title: <MdNotifications />, path: "#" },
  ];

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">e-Learn</h1>
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
