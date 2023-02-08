import Login from "./pages/Login";
import Test from "./pages/Test";
import About from "./pages/components/About"
import Forum from "./pages/components/Forum";
import { Route, Routes, Link } from "react-router-dom";

import innovateLogo from './resources/imgs/innovate.jpg';

function App() {
  return (
    <>
    <h1 class>Welcome to Innovate to Empower</h1>
    <img src={innovateLogo}></img>
    <Routes>
          {/* Specifies the starting page */}
          <Route path="/" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
      </Routes></>
  );
}

export default App;
