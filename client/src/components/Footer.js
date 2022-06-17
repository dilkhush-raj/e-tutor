import {Link} from 'react-router-dom'

export default function Footer() {

    const Links = [
    ]

    return (
      <div className="footer">
       <div className="left">
        <div className="nav-logo">e-Learn</div>
        &copy; 2022
       </div>
       <div className="middle">
        <span>Created and Designed by</span><span>Dilkhush Raj</span>
       </div>
       <div className="right">
        <Link to="/teacher">Become Teacher on e-Learn</Link>
       </div>
      </div>
    );
  }