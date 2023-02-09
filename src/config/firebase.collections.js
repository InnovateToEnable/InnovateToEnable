import { collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const usersCollectionRef = collection(db, "users");
