import React from "react";
import "./userauthenticationpage.scss";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";

const UserAuthenticationPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default UserAuthenticationPage;
