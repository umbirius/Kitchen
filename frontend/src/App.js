import React, { Component } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import Navbar from './containers/NavBar'
import EstablishmentContainer from './containers/EstablishmentContainer';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SessionContainer from './containers/SessionContainer';
import EstablishmentCard from './components/establishments/EstablishmentCard';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='app'>
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/log-in' exact component={SessionContainer} />
            <Route path="/user" component={UserContainer} />
            <Route path="/locations" exact component={EstablishmentContainer} />
            <Route path="/locations/:id" component={EstablishmentCard}/>
          </Switch>
        </div>
      </Router>
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
    loading: state.loading
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     logOut: () => dispatch({type: 'LOG_OUT'}) }
//   }
// }


export default connect(mapStateToProps)(App);
