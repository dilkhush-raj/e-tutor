import React from "react";
import "../components/styles/Card.css";
import {FcClock} from 'react-icons/fc'
import {BsBarChartFill} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {TiStarHalfOutline, TiStarFullOutline} from 'react-icons/ti'
import { Link } from "react-router-dom";



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
    fetch("http://localhost:5000/api/course")
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
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="page"><br />
        <h1 className="flex"> All Courses </h1>{" "}
        <div className="flex">
        {items.courses.map((item) => (
          <Link to="">
          <div className="card">
            <img
              src={item.image}
              alt={item.title}
              className="card-img"
            />
            <div className="card-content">
              <div className="card-row">
                <div className="course-title">{item.title}</div>
              </div>
              <div className="card-row">
                <div className="discription">
                  {item.description}
                </div>
              </div>
              <div className="card-row"></div>
              <div className="card-row">
                <div className="level">
                  <BsBarChartFill />
                  <span>{item.level}</span>
                </div>
                <div className="time">
                  <FcClock />
                  {item.time} Hours
                </div>
              </div>
              <div className="card-row">
                <div className="rating">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarHalfOutline />
                </div>
                <div className="price">
                  <BiRupee />
                  {item.price}
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
        {console.log(items)}
        </div>
      </div>
    );
  }
}

export default Courses;
