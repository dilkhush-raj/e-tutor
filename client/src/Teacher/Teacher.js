import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreateCourse from "./CreateCourse";
import Home from "./Home";
import Courses from "./Courses";
import Signup from "./Signup";
import Login from "./Login";

export default function Teacher() {
  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/" element={<Courses />} />
        <Route path="/courses/add" element={<CreateCourse />} />
      </Routes>
    </div>
  );
}
