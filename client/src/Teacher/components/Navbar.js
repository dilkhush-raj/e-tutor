import { Link } from "react-router-dom";

export default function Navbar() {

  const IsLogged = localStorage.getItem("IsLogged");
  function CheckUser() {
    if (IsLogged == "true") {
      return true;
    }
  }

  function LogOut(){
    localStorage.clear();
    window.location.reload(true);
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">e-Learn</h1>
      </Link>
      <ul className="nav-link">
        <li>
          <Link to="/teacher">Home</Link>
        </li>
        <li>
          <Link to="/">Student</Link>
        </li>

          {CheckUser() ? (
            <>
              <li>
                <Link to="/teacher/courses">Courses</Link>
              </li>
              <li>
                <Link to="/teacher/courses/add">Add Course</Link>
              </li>
              <li onClick={LogOut} className="pointer">Logout</li>
            </>
          ) : (
            <>
            <li><Link to="/teacher/login">Login</Link></li>
            <li><Link to="/teacher/signup">Signup</Link></li>
            </>
          )}

      </ul>
    </div>
  );
}
