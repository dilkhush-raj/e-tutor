import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Teacher from "./Teacher/Teacher"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/teacher/*" element={<Teacher />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
