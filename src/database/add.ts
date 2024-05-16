import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";


export const appIdDB = async (appId: number) => {
    console.log("Adding appId to database...");
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        appId: appId.toString(),
      }).catch((err) => {
        console.log(err);
      });
      console.log("Document written with ID: ", docRef);
      return docRef;
    } catch (err) {
      console.error("Error adding document: ", err);
      return null;
    }
  };