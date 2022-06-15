import { Link } from "react-router-dom";

export default function Navbar() {
  const Links = [{ title: "Teacher Login", path: "/teacher" }];

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
