import React from 'react';
import {connect} from 'react-redux'
import classes from './Auth.module.css';
import { authActions } from "../Redux/store";

class Auth extends React.Component{

  loginHandler(e){
    e.preventDefault()
    //dispatch(authActions.login())
    this.props.login()
  }

  render(){
    return (
      <main className={classes.auth}>
        <section>
          <form onSubmit={this.loginHandler.bind(this)}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      </main>
    );

  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(authActions.login()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
