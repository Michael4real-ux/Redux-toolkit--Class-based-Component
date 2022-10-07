import React from 'react'
import { connect } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from "../Redux/store";

class Header extends React.Component {

  logoutHandler(){
   this.props.logout()
  }
  render(){
    return (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        {
          this.props.isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={this.logoutHandler.bind(this)}>Logout</button>
            </li>
          </ul>
        </nav>
          )
        }
      </header>
    );
  }
 
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
