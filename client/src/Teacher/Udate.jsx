import React, { useState, useEffect } from "react";

const UpdateCourse = () => {
  //   title, description, image, user

  const [course, setCourse] = useState({
    title: "",
    description: "",
    image: "",
    level: "",
    time: "",
    price: "",
    video: "",
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

    const { title, description, image, level, time, price, video } = course;

    const res = await fetch(
      "http://localhost:5000/api/course/update/62a987335a2e18a5a49531bb",
      {
        method: "PUT",
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
        }),
      }
    );
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Signup Failed");
    } else {
      window.alert("Course Added Successful");
    }
  };



  return (
    <>
      <section className="signup">
        <form method="PUT" className="register">
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="title"
              id="name"
              autoComplete="off"
              value={course.title}
              onChange={handleInputs}
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description"></label>
            <input
              type="text"
              name="description"
              id="description"
              autoComplete="off"
              value={course.description}
              onChange={handleInputs}
              placeholder="Enter Course Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="level"></label>
            <input
              type="text"
              name="level"
              id="level"
              autoComplete="off"
              value={course.level}
              onChange={handleInputs}
              placeholder="Enter Level of Course"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time"></label>
            <input
              type="number"
              name="time"
              id="time"
              autoComplete="off"
              value={course.time}
              onChange={handleInputs}
              placeholder="Enter Course Time in Hours"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price"></label>
            <input
              type="number"
              name="price"
              id="price"
              autoComplete="off"
              value={course.price}
              onChange={handleInputs}
              placeholder="Enter Course Price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Video"></label>
            <input
              type="text"
              name="video"
              id="video"
              autoComplete="off"
              value={course.video}
              onChange={handleInputs}
              placeholder="Enter Video Link"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image"></label>
            <input
              type="text"
              name="image"
              id="image"
              autoComplete="off"
              value={course.image}
              onChange={handleInputs}
              placeholder="Enter Thumbnail Url"
            />
          </div>

          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Upload Course"
              onClick={PostData}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateCourse;
