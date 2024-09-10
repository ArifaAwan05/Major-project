import Navbar from "../components/navBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "../components/screen/Home";
import Profile from "../components/screen/Profile";
import Login from "../components/screen/Login";
import Signup from "../components/screen/Signup";
import CreatePost from "../components/screen/CreatePost";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
