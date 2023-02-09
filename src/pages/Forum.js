import React from "react";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Forum</h1>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default Forum;
