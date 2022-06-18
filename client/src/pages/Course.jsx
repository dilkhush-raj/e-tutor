import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  const [course, setCourse] = useState({
    items: [],
    DataisLoaded: false,
  });
  // const [teacher, setTeacher] = useState({
  //   items: [],
  //   DataisLoadedT: false,
  // });
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

  // var tearcherId;

  // useEffect(() => {
  //   // console.log(course.items.course.user);
  //   const turl = `http://localhost:5000/api/course/${tearcherId}`;

  //   const fetchTeacherData = async () => {
  //     try {
  //       const response = await fetch(turl);
  //       const json = await response.json();
  //       setTeacher({
  //         items: json,
  //         DataisLoadedT: true,
  //       });
  //     } catch (error) {}
  //   };
  //   if (DataisLoaded) {
  //     tearcherId = course.items.course.user._id;
  //     console.log(tearcherId);
  //     return fetchTeacherData();
      
  //   }
  // }, []);

  // console.log(tearcherId);

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
      <div className="cr-title">{course.items.course.title}</div>
      <div className="course p-2">
        <div>
        <iframe
          width="560"
          src={`https://www.youtube.com/embed/${course.items.course.video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        ></iframe>

        <h3>About The Course</h3>
        <div className="course-description">
          {course.items.course.description}
        </div>
        <br />
        {/* {console.log(teacher.items[0])} */}
        {/* <h3>Other Courses by</h3> */}
        {/* {course.teacher.} */}
        <h3>Comments / Questions</h3>
        <p>No Comments</p>
        </div>
        <div>
          <h3>Course Details</h3>
          <span>Course Level: {course.items.course.level}</span><br />
          <span>Course Duration: {course.items.course.time}</span>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Course;
