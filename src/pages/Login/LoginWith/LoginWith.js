import React from "react";
import useAuth from "../../../hooks/useAuth";
import google from "../../../image/signingoogle.png";
import { useNavigate } from "react-router-dom";

const LoginWith = ({ redirect }) => {
  const { signInGooglePopup } = useAuth();
  const navigate = useNavigate();
  const googleSignInHandler = async () => {
    await signInGooglePopup();
    navigate(redirect);
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <img
          onClick={googleSignInHandler}
          src={google}
          alt="Signin with google"
          style={{ height: "65px", maxWidth: "290px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default LoginWith;
