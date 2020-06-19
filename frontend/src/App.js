import React, { Component } from 'react';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import EstablishmentContainer from './containers/EstablishmentContainer';
import { connect } from 'react-redux'
import { fetchEstablishments } from './actions/fetchEstablishments'
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
    this.props.fetchEstablishments()
  }

  render() {
    return (
      <div className="User-form">
        <UserContainer />
        <EstablishmentContainer establishments = {this.props.establishments}/>
      </div >
    );
  }

}


const mapStateToProps = state => {
  return {
    establishments: state.establishments,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEstablishments: () => dispatch(fetchEstablishments())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
