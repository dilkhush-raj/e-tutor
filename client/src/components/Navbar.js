import {Link} from 'react-router-dom'

export default function Navbar() {

    const Links = [
        {
            "title": "Login",
            "path": "/student/login"
        },
        {
            "title": "Signup",
            "path": "/student/signup"
        },
    ]

    return (
      <div className="navbar">
        <Link to='/'>
          {/* <img src="/images/logo.png" alt="logo" className="logo" /> */}
          <h1>e-Tutor</h1>
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