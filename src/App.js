import About from "./pages/About";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import EditProfile from "./pages/EditProfile";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UsersProfile from "./pages/UsersProfile";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:dir" element={<UsersProfile />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
