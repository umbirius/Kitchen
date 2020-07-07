import React, { Component } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import Navbar from './containers/NavBar'
import EstablishmentContainer from './containers/EstablishmentContainer';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import SessionContainer from './containers/SessionContainer';
import EstablishmentCard from './components/establishments/EstablishmentCard';
import DashboardContainer from './containers/DashboardContainer';
import MatchContainer from './containers/MatchContainer';

class App extends Component {


  render() {
    return (
      <div className='app'>

        <Router>
          <Navbar user={this.props.current_user} />
          <Switch>
            <Route path='/log-in' exact component={SessionContainer} />
            <Route path='/sign-up' exact component={SessionContainer} />
            <Route path="/user" component={UserContainer} />
            <Route path="/locations" exact component={EstablishmentContainer} />
            <Route path="/locations/:id" component={EstablishmentCard} />
            <Route path="/dash" component={DashboardContainer} />
            <Route path="/matches" component={MatchContainer} />
            <Route path="*" component={DashboardContainer} />
          </Switch>
        </Router>
      </div>

    )
  }
}




const Home = () => (
  <div>
    <h1>You are home</h1>
  </div>
)

const mapStateToProps = state => {
  return {
    users: state.users,
    current_user: state.current_user,
    loading: state.loading,
    appointments: state.appointments
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     logOut: () => dispatch({type: 'LOG_OUT'}) }
//   }
// }


export default connect(mapStateToProps)(App);
