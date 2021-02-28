import React, { Component } from "react";

import "./signin.scss";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    console.log(this.state.email + " " + this.state.password);
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accounnt</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.onChangeHandler}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.onChangeHandler}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>
              Sign IN
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSigIn>
              Sign IN with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
