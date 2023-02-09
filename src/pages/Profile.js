import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { getDocs, query } from "firebase/firestore";
import { usersCollectionRef } from "../config/firebase.collections";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [usersData, setUsersData] = useState([]);

  let navigate = useNavigate();

  const getUsers = () => {
    const q = query(usersCollectionRef);
    getDocs(q)
      .then((response) => {
        const fs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setUsersData(fs);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <button onClick={() => navigate("/")}>Back Home</button>
      {usersData.map((userData) => {
        return (
          userData.id === user.uid && (
            <>
              <div>{userData.data.name}</div>
              <div>{userData.data.biography}</div>
              <button onClick={() => navigate("/editprofile")}>
                Edit profile
              </button>
            </>
          )
        );
      })}
    </div>
  );
};

export default Profile;
