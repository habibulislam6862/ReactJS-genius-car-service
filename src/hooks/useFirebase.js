import { useEffect, useState } from "react";
import firebaseInit from "./../config/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateEmail,
  onAuthStateChanged,
  signOut,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

firebaseInit();
const useFirebase = () => {
  //user
  const [user, setUser] = useState({});

  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Auth Object
  const auth = getAuth();

  // Google Popup sign in
  const signInGooglePopup = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  // Sign In with Phone Number
  auth.languageCode = "en-US";
  const greCaptchaInit = (id) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      id,
      {
        size: "invisible",
      },
      auth
    );
  };
  // Sign in with Phone number
  const phoneNumberSignIn = async (id, phoneNumber) => {
    try {
      // verify with recaptcha
      greCaptchaInit(id);
      const appVerifier = window.recaptchaVerifier;
      window.confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const verifyOPTPhone = async (code, userName, email) => {
    try {
      const { user } = await window.confirmationResult.confirm(code);
      // update user name
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      localStorage.setItem("user_name", userName);
      // updating email
      await updateEmail(auth.currentUser, email);
      localStorage.setItem("user_email", email);

      setUser(user);
      return user;
    } catch (error) {
      window.alert(error.message);
    }
  };
  // Setting an observer on the Auth object
  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        // User is signed In
        setUser(userData);
      } else {
        // User is signed out
        setUser({});
      }
    });
  }, [auth]);

  // Logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        if (localStorage.getItem("user_email")) {
          localStorage.removeItem("user_email");
        }
        if (localStorage.getItem("user_name")) {
          localStorage.removeItem("user_name");
        }
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return {
    signInGooglePopup,
    user,
    logout,
    phoneNumberSignIn,
    verifyOPTphone: verifyOPTPhone,
  };
};

export default useFirebase;
