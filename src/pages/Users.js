import { useEffect, useState } from "react";
import { getDocs, query } from "firebase/firestore";
import { usersCollectionRef } from "../config/firebase.collections";
import { useNavigate } from "react-router-dom";

const Users = () => {
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
      {usersData.map((user) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate(user.data.dir)}
          >
            View Profile of: {user.data.name}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
