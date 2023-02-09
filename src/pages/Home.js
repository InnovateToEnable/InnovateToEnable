import React from "react";
import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const { user, signout, signInWithGoogle } = useAuth();
  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <button onClick={signout}>Sign out</button>
      ) : (
        <>
          <button onClick={signInWithGoogle}>Login with Google</button>
        </>
      )}
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/forum")}>Forum</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
    </div>
  );
};

export default Home;
