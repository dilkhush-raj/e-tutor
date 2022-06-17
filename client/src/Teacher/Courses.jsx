import React from "react";
import "../components/styles/Card.css";
import { FcClock } from "react-icons/fc";
import { BsBarChartFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { MdOutlineArrowForwardIos, MdDeleteForever } from "react-icons/md";
import { TiStarHalfOutline, TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { useParams, useNavigate  } from "react-router-dom";

class Courses extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://localhost:5000/api/course/user/62aa0246021c9967041f94c9")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }


  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div className="loader">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );

    return (
      <div className="page">
        <br />
        <h1 className="flex" > All Courses Created by You </h1>{" "}
        <div className="course-grid-4">
          {items.courses.courses.map((item) => (
            <div className="card" key={item._id}>
              <img src={item.image} alt={item.title} className="card-img" />
              <div className="card-content">
                <div className="card-row">
                  <div className="course-title">{item.title}</div>
                  <div className="edit">
                    <Link to={`/teacher/courses/update/${item._id}`}>
                      <RiEdit2Fill /> Edit
                    </Link>
                  </div>
                </div>
                {/* <div className="card-row">
                  <div className="course-description">
                      {item.description}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;
