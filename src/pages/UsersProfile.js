import { useEffect, useState } from "react";
import { getDocs, query } from "firebase/firestore";
import { usersCollectionRef } from "../config/firebase.collections";
import { useParams } from "react-router-dom";
import React from "react";

const UsersProfile = () => {
  const [usersData, setUsersData] = useState([]);
  let { dir } = useParams();

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
        return (
          userData.data.dir === dir && (
            <>
              <div>{userData.data.name}</div>
              <div>{userData.data.biography}</div>
            </>
          )
        );
      })}
    </div>
  );
};

export default UsersProfile;
