import React, { useState } from "react";

const CreateCourse = () => {
//   title, description, image, user

  const [course, setCourse] = useState({
    title: "",
    description: "",
    image: "",
    user: "",
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

    const { title, description, image, user } = course;

    const res = await fetch("http://localhost:5000/api/course/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title, description, image, user
      }),
    });
    const data = await res.json();

    if(data.status === 422 || !data ) {
      window.alert("Signup Failed");
    } else {
      window.alert("Course Added Successful");
    }
  };

  return (
    <>
      <section className="signup">
        <form method="POST" className="register">
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
          <div className="form-group">
            <label htmlFor="image"></label>
            <input
              type="text"
              name="user"
              id="image"
              autoComplete="off"
              value={course.user}
              onChange={handleInputs}
              placeholder="Enter Thumbnail Url"
            />
          </div>


          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="register"
              onClick={PostData}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateCourse;
