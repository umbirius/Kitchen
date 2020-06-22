import React, { Component } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import Navbar from './containers/NavBar'
import EstablishmentContainer from './containers/EstablishmentContainer';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends Component {

  // state = {
  //   current_user: ''
  // }

  componentDidMount() {
    // this.props.fetchUsers()
  }

  render() {


    if (this.props.current_user === '') {
      return (
        <div>
          <Navbar />
          <UserContainer />
        </div>

      )
    } else {
      return (
        <div>
          <Navbar />
          <h1>Current User:{this.props.current_user.username}</h1>
        </div>// <Dashboard current_user ={this.state.current_user} />
      )
    }
    return (
      <div>
        {/* <Navbar /> */}
        {/* <Home /> */}

        {/* <UserContainer /> */}
        {/* <EstablishmentContainer establishments = {this.props.establishments}/> */}
      </div >
    );
  }

}

const mapStateToProps = state => {
  return {
    users: state.users,
    current_user: state.current_user,
    loading: state.loading
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     logOut: () => dispatch({type: 'LOG_OUT'}) }
//   }
// }


export default connect(mapStateToProps)(App);
