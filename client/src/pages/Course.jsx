import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  const [course, setCourse] = useState({
    items: [],
    DataisLoaded: false,
  });
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/api/course/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCourse({
          items: json,
          DataisLoaded: true,
        });
      } catch (error) {}
    };

    fetchData();
  }, []);

  const DataisLoaded = course.DataisLoaded;

  if (!DataisLoaded)
    return (
      <div>
        <h1> Pleses wait some time.... </h1>{" "}
      </div>
    );

  return (
    <>
      <div className="course p-2">
        <div className="course-title">{course.items.course.title}</div>
        <h3>About The Course</h3>
        <div className="course-description">{course.items.course.description}</div>
        {console.log(course.items.course)}
      </div>
    </>
  );
}

export default Course;
