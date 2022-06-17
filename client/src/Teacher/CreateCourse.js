import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreateCourse = () => {
  //   title, description, image, user
  let navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    image: "",
    level: "",
    time: "",
    price: "",
    video: "",
    user: "62aa0246021c9967041f94c9",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setCourse({ ...course, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { title, description, image, level, time, price, video, user } =
      course;

    const res = await fetch("http://localhost:5000/api/course/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        image,
        level,
        time,
        price,
        video,
        user,
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Signup Failed");
    } else {
      window.alert("Course Added Successful");
      navigate("/teacher/courses");
    }
  };

  return (
    <>
      <section className="create-course">
        <form method="POST" className="course-form">
          <div className="form-group">
            <label htmlFor="name">Course Title</label>
            <input
              type="text"
              name="title"
              id="name"
              autoComplete="off"
              value={course.title}
              onChange={handleInputs}
              placeholder="Web Development Bootcamp"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Couse Thumbnail Image URL</label>
            <input
              type="url"
              name="image"
              id="image"
              autoComplete="off"
              value={course.image}
              onChange={handleInputs}
              placeholder="Enter Image URL"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Course Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              autoComplete="off"
              value={course.description}
              onChange={handleInputs}
              placeholder="About Course"
              required="required"
            />
          </div>
          <div className="form-group form-group-select">
            <label htmlFor="level">Select Course Level</label>
            <select value={course.level} onChange={handleInputs} name="level">
              <option className="option" value="none" selected hidden>Select an Option</option>
              <option className="option" value="Beginner">Beginner</option>
              <option className="option" value="Intermediate">Intermediate</option>
              <option className="option" value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time">Course Duration</label>
            <input
              type="number"
              name="time"
              id="time"
              autoComplete="off"
              value={course.time}
              onChange={handleInputs}
              placeholder="Enter Course Duration in hours"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Set Course Price</label>
            <input
              type="number"
              name="price"
              id="price"
              autoComplete="off"
              value={course.price}
              onChange={handleInputs}
              placeholder="Enter Ammount in Rupees"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Video">Enter Video ID</label>
            <input
              type="url"
              name="video"
              id="video"
              autoComplete="off"
              value={course.video}
              onChange={handleInputs}
              placeholder="All characters after last slash. Eg. - qoeLC9Yeo6s from url- https://youtu.be/qoeLC9Yeo6s"
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="user"></label>
            <input
              type="text"
              name="user"
              id="image"
              autoComplete="off"
              value={course.user}
              onChange={handleInputs}
              placeholder="Enter User Id"
            />
          </div> */}

          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Upload Course"
              onClick={PostData}
              className="btn"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateCourse;
