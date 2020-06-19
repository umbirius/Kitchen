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


  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <UserContainer />
        {/* <EstablishmentContainer establishments = {this.props.establishments}/> */}
      </div >
    );
  }

}


const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
