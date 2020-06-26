import React, { Component } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import Navbar from './containers/NavBar'
import EstablishmentContainer from './containers/EstablishmentContainer';
import EstablishmentCard from './containers/EstablishmentCard'
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

  render() {
    if (this.props.current_user) {
      return (
        <Router>
          <div className='app'>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/user" component={UserContainer} />
              <Route path="/locations" exact component={EstablishmentContainer} />
              <Route path="/locations/:id" component={EstablishmentCard} />
            </Switch>
          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div className='app'>
            <Navbar />
            <Link to='/user'>
              <button>Log in</button>
            </Link>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/user" component={UserContainer} />
              <Route path="/locations" exact component={EstablishmentContainer} />
              <Route path="/locations/:id" component={EstablishmentCard} />
            </Switch>
          </div>
        </Router>
      )
    }
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
