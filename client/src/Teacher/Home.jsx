import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {

  

    return (
      <>
      <div className="p-2">
        <div className="t-flex">
          <span>Jump into Course Creation</span>
          <Link to="/teacher/courses/add" className="btn-2">Create Your Course</Link>
        </div>
        <div className="p-2">
          <p>Based on your experience, we think these resources will be helpful.</p>
        </div>
        <div className="p-2">
          {/* <img src="" alt="" /> */}
          <div>
            <h3>Create an Engaging Course</h3>
            <p>Whether you've been teaching for years or are teaching for the first time, you can make an engagin course. We've compiled resources and best practice to help you get to the next level, no matter where you're starting.</p>
          </div>
        </div>
        <div className="p-2">
          {/* <img src="" alt="" /> */}
          <div>
            <h3>Get Started with Video</h3>
            <p>Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
          </div>
          <div>
            <h3>Build Your Audience</h3>
            <p>Set your course up for success by building your audience.</p>
          </div>
        </div>
        <div className="p-2">
          {/* <img src="" alt="" /> */}
          <div>
            <h3>Join the Newcomer Challenge:</h3>
            <p>Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will recieve a special bonus to celebrate. Start today!</p>
          </div>
        </div>
        <div className="p-2 t-flex-col">
          Are You Ready to Begin?
          <Link to="/teacher/courses/add" className="btn-2">Create Your Course</Link>
        </div>
      </div>
      <Footer />
      </>
    );
  }