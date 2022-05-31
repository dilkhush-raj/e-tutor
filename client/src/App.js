import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <UserAuthContextProvider>
      <Navbar />
      <Routes>
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
