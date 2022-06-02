import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoggedUser from "./components/Home";
import Home from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <UserAuthContextProvider>
      <div className="app-wrap">
        <Navbar />
        <Sidebar />
        <div className="app">
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <LoggedUser />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
