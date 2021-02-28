import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import Shoppage from "./pages/Shoppage/Shoppage";
import Header from "./Components/Header/Header";
import UserAuthenticationPage from "./pages/UserAuthenticationPage/UserAuthenticationPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/crwn-clothing" component={Homepage} />
          <Route path="/crwn-clothing/shop" component={Shoppage} />
          <Route
            exact
            path="/crwn-clothing/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/crwn-clothing" />
              ) : (
                <UserAuthenticationPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStatetoProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
