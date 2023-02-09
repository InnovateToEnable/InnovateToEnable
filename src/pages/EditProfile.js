import { useState, useEffect } from "react";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { usersCollectionRef } from "../config/firebase.collections";

const EditProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [dir, setDir] = useState("");
  const [biography, setBiography] = useState("");
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();

  const getUser = async (user) => {
    const userRef = doc(usersCollectionRef, user.uid);
    const docSnap = await getDoc(userRef);
    setName(docSnap.data().name);
    setDir(docSnap.data().dir);
    setBiography(docSnap.data().biography);
  };

  useEffect(() => {
    getUser(user);
  }, [user]);

  const updateProfile = async () => {
    setFormErrors(validate());
    if (Object.keys(validate()).length === 0) {
      const userRef = doc(usersCollectionRef, user.uid);
      setDoc(userRef, {
        name,
        dir,
        biography,
      });
      navigate("/profile");
    }
  };

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.title = "Display name is required!";
    }
    if (!dir) {
      errors.dir = "Username is required!";
    }
    return errors;
  };

  return (
    <div>
      {user ? (
        <div>
          <div>
            <label>Display Name:</label>
            <input
              value={name}
              placeholder="Eg. Kavan"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <div>{formErrors.title}</div>
          </div>
          <div>
            <label>Username / Profile Directory:</label>
            <input
              value={dir}
              placeholder="Eg. kavan-tan"
              onChange={(event) => {
                setDir(event.target.value);
              }}
            />
            <div>{formErrors.dir}</div>
          </div>
          <div>
            <label>Biography / About Me:</label>
            <textarea
              value={biography}
              placeholder="Eg. Hi, I am Kavan."
              onChange={(event) => {
                setBiography(event.target.value);
              }}
            />
            <div>{formErrors.desc}</div>
          </div>
          <button onClick={updateProfile}>Submit Changes</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EditProfile;
