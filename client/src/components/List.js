import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List(props) {
  const [course, setCourse] = useState({
    items: [],
    DataisLoaded: false,
  });

  useEffect(() => {
    const url = "http://localhost:5000/api/course";

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

  let filteredData;

  if (DataisLoaded) {
    filteredData = course.items.courses.filter((el) => {
      if (props.input === "") {
        return el;
      } else {
        return el.title.toLowerCase().includes(props.input);
      }
    });
  }
  if (!DataisLoaded)
    return (
      <div>Loading</div>
    );
  return (
    <ul className="searched-data">
      {filteredData.map((item) => (
        <Link to={"/learning/" + item._id} key={item._id}>
          <li className="no-list">{item.title}</li>
        </Link>
      ))}
    </ul>
  );
}

export default List;
