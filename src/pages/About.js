import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default About;
