import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import AllCourse from "../components/AllCourse";

const Student = () => {
  const { user } = useUserAuth();
  return (
    <>
      <h1 className="title">
        Let's start learning, {user && user.displayName}
      </h1>
      <AllCourse />
    </>
  );
};

export default Student;