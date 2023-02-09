import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { getDocs, query } from "firebase/firestore";
import { usersCollectionRef } from "../config/firebase.collections";

const Profile = () => {
  const { user } = useAuth();
  const [usersData, setUsersData] = useState([]);

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
      {usersData.map((userData) => {
        return userData.id === user.uid && <>{userData.data.name}</>;
      })}
    </div>
  );
};

export default Profile;
