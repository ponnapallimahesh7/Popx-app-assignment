// import logo from './logo.svg';
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Home/Homepage.jsx";
import { Login } from "./pages/Login/login.jsx";
import { Registration } from "./pages/Registration/registration.jsx";
import { ProfileProvider } from "./context/profilecontext.js";
import { Profile } from "./pages/Profile/profile.jsx";

function App() {
  return (
    <>
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ProfileProvider>
    </>
  );
}

export default App;
