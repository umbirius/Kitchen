import React, { Component } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer.js'
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
    this.props.fetchUsers()
  }

  render() {
    debugger
    if (this.props.current_user === '') {
      return (
        <Router>
          <li>
            <Link to="/log-in-sign-up">Log In/Sign up</Link>
          </li>
          <Switch>
            <Route path="/log-in-sign-up">
              <UserContainer />
            </Route>
          </Switch>
        </Router>)
    } else {
      return (
        <div></div>// <Dashboard current_user ={this.state.current_user} />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
