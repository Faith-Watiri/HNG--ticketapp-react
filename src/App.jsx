import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Landing from "./Pages/Landing";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import Tickets from "./Pages/Tickets";
import { AuthProvider, useAuth } from "./context/AuthContext";
// import  "./styles/App.css";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/tickets" element={<PrivateRoute><Tickets /></PrivateRoute>} />
        </Routes>
        {/* <Footer /> */}
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;

