import React, { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { connect } from "react-redux";


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        {!this.props.isAuth && <Auth />}
        {this.props.isAuth && <UserProfile />}

        <Counter />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
