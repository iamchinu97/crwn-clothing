import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_qZuKrovw9M_obSs6YKobX_kwnWXmW7g",
  authDomain: "crown-db-9aabe.firebaseapp.com",
  databaseURL: "https://crown-db-9aabe.firebaseio.com",
  projectId: "crown-db-9aabe",
  storageBucket: "crown-db-9aabe.appspot.com",
  messagingSenderId: "429091880748",
  appId: "1:429091880748:web:07a73bcbd3f47188607689"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating new user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
