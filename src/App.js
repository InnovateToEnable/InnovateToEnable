import Login from "./pages/Login";
import Test from "./pages/Test";
import About from "./pages/components/About"
import Forum from "./pages/components/Forum";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
          {/* Specifies the starting page */}
          <Route path="/" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
      </Routes>
  );
}

export default App;
