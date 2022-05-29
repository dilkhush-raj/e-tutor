// import "../App.css"

export default function Navbar() {

    const Links = [
        {
            "title": "Home",
            "path": "/"
        },
        {
            "title": "Courses",
            "path": "/courses"
        },
        {
            "title": "Support",
            "path": "/support"
        },
    ]

    return (
      <div className="navbar">
        <img src="/images/logo.png" alt="logo" className="logo" />
        <ul className="nav-link">
        {Links.map((item, index) => {
              return (
                <li key={index}>
                    <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
        </ul>
        <div className="login">
            Login
        </div>
      </div>
    );
  }