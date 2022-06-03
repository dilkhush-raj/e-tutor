import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Student = () => {
  const { user } = useUserAuth();
  return (
    <>
      <h1 className="title">
        Let's start learning, {user && user.displayName}
      </h1>
    </>
  );
};

export default Student;