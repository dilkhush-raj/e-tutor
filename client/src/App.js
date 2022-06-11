import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

// Compontent import 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EditCourse from "./components/EditCourse";

// Pages import 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Student from "./Student/Student";
import StudentLogin from "./Student/Login";
import StudentSignup from "./Student/Signup";
import Tutor from "./Tutor/Tutor";
import TutorLogin from "./Tutor/Login";
import TutorSignup from "./Tutor/Signup";

function App() {
  return (
    <UserAuthContextProvider>
      <div className="app-wrap">
        <Navbar />
        <Sidebar />
        <div className="app">
          <Routes>
            <Route path="/student" element={<ProtectedRoute><Student /></ProtectedRoute>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/signup" element={<StudentSignup />} />
            <Route path="/tutor/" element={<Tutor />} />
            <Route path="/tutor/login" element={<TutorLogin />} />
            <Route path="/tutor/signup" element={<TutorSignup />} />
            <Route path="/tutor/edit/:id" element={<EditCourse />} />
          </Routes>
        </div>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
