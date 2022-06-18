import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";


export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <h1 className="banner-heading1">Start Learning From </h1>
        <span className="banner-heading2">The World's Best Teachers</span>

        <div className="content">
          <p>
            Start, switch, or advance your career with more than 5,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Typewriter
            options={{
              strings: ["Learn From Anywhere", "Learn Without Limits"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explore all courses
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/teacher/" className="btn">
                  Teach
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="p-2">
        <br />
        <br />
        <h2>Lorem Ipsum</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi
        accusamus molestias beatae distinctio accusantium perferendis fugit
        quaerat alias ad. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Placeat ratione deleniti, quod, in magni, laudantium alias ut nam
        eius corporis iste. Itaque vero labore dolores!
        <br />
        <br />
        <h2>Lorem Ipsum</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        accusamus totam corporis nulla nemo? Illo nihil quod, laboriosam non,
        assumenda, optio ab laudantium culpa quo iure perspiciatis voluptatem
        qui obcaecati vero quos quia consectetur! Sequi?
        <br />
        <br />
        <h2>Lorem Ipsum</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab enim
        tenetur voluptatibus, nesciunt adipisci et amet fugiat hic incidunt
        alias molestias dicta nisi at totam esse natus voluptate, assumenda
        explicabo asperiores perspiciatis voluptates. Ad, harum. Possimus et sit
        at!
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
