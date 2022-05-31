import {Link} from 'react-router-dom'

export default function Navbar() {

    const Links = [
        {
            "title": "Home",
            "path": "/"
        },
        {
            "title": "Login",
            "path": "/login"
        },
        {
            "title": "Signup",
            "path": "/signup"
        },
    ]

    return (
      <div className="navbar">
        <Link to='/'><img src="/images/logo.png" alt="logo" className="logo" /></Link>
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