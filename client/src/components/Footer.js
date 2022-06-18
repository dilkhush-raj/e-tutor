import {Link} from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

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
        <span><a href="https://linkedin.com/in/dilkhushraj"><BsLinkedin /></a>{" "}<a href="https://github.com/dilkhush-raj"><AiFillGithub /></a></span>
        
       </div>
       <div className="right">
        <Link to="/teacher">Become Teacher on e-Learn</Link>
       </div>
      </div>
    );
  }