import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import EstablishmentContainer from './containers/EstablishmentContainer';
import { connect } from 'react-redux'
import { fetchEstablishments } from './actions/fetchEstablishments'

class App extends Component {


  componentDidMount() {

    console.log(this.props)
    this.props.fetchEstablishments()
  

  }

  render() {
    console.log(this.props.establishemnts)
    return (
      <div className="User-form">
        <UserContainer />
        <EstablishmentContainer establishments = {this.props.establishemnts}/>
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
