import React from "react";
import "./styles/Card.css";
import {FcClock} from 'react-icons/fc'
import {BsBarChartFill} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {TiStarHalfOutline, TiStarFullOutline} from 'react-icons/ti'

const Card = () => {
  return (
    <>
      <div className="card">
        <img src="data:image/png;base64,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" alt="j" className="card-img" />
        <div className="card-content">
        
        <div className="card-row">
            <div className="course-title">Learn HTML 5</div>
        </div>
        <div className="card-row">
            <div className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nulla.
            </div>
        </div>
        <div className="card-row">
        </div>
        <div className="card-row">
            <div className="level"><BsBarChartFill /><span> Intermediate</span></div>
            <div className="time"><FcClock />19.0 Hrs</div>
        </div>
        <div className="card-row">
        <div className="rating"><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarHalfOutline /></div>
            <div className="price"><BiRupee />299</div>
        </div>
        </div>
      </div>
      {/* <div className="card">
        <img src="data:image/png;base64,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" alt="j" className="card-img" />
        <div className="card-content">
        <div className="card-row">
            <div className="level"><BsBarChartFill /><span> Intermediate</span></div>
            <div className="time"><FcClock />19.0 Hrs</div>
        </div>
        <div className="card-row">
            <div className="course-title">Learn HTML 5</div>
        </div>
        <div className="card-row">
            <div className="rating"><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarHalfOutline /></div>
        </div>
        <div className="card-row">
            <div className="price"><BiRupee />299</div>
            <div className="cta">Enroll Now <MdOutlineArrowForwardIos /></div>
        </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;