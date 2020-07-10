import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/NavBar'
import EstablishmentContainer from './containers/EstablishmentContainer';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import SessionContainer from './containers/SessionContainer';
import SignUp from './components/sessions/SignUp'
import LogIn from './components/sessions/LogIn'
import EstablishmentCard from './components/establishments/EstablishmentCard';
import DashboardContainer from './containers/DashboardContainer';
import MatchContainer from './containers/MatchContainer';

class App extends Component {


  render() {

    if (this.props.current_user) {
      return (
        <div className='app'>

          <Router>
            <Navbar />
            <Switch>
              <Route path='/sign-up' exact component={SignUp} />
              <Route path='/log-in' exact component={LogIn} />
              <Route path="/locations" exact component={EstablishmentContainer} />
              <Route path="/locations/:id" component={EstablishmentCard} />
              <Route path="/dash" component={DashboardContainer} />
              <Route path="/matches" component={MatchContainer} />
              <Route path="*" component={DashboardContainer} />
            </Switch>
          </Router>
        </div>
      )
    } else {
      return (
        <div className='app'>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/sign-up' exact component={SignUp} />
              <Route path='/log-in' exact component={LogIn} />
              <Route path="*" component={DashboardContainer} />
            </Switch>
          </Router>
        </div>
      )
    }

  }
}



const mapStateToProps = state => {
  return {
    users: state.users,
    current_user: state.current_user,
    loading: state.loading,
    appointments: state.appointments
  }
}



export default connect(mapStateToProps)(App);
