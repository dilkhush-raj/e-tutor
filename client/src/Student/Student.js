import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import AllCourse from "../components/AllCourse";

const Student = () => {
  const { user } = useUserAuth();
  return (
    <div className="page">
      <h1 className="title">
        Let's start learning, {user && user.displayName}
      </h1>
      <AllCourse />
    </div>
  );
};

export default Student;