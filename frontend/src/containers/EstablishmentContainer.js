import React, { Component } from 'react'
import Establishments from '../components/establishments/Establishments'

import { connect } from 'react-redux'
import { fetchEstablishments } from '../actions/fetchEstablishments'

class EstablishmentContainer extends Component {

  componentDidMount() {
    this.props.fetchEstablishments()
  }

  render() {
    console.log("Establishments Container:")
    console.log(this.props.establishments)
    return (
      <div className="establishments-container">
        <Establishments current_user={this.props.current_user} establishments={this.props.establishments} />
      </div>)
  }
}


const mapStateToProps = state => ({
  establishments: state.establishments,
  loading: state.loading,
  current_user: state.current_user
})

const mapDispatchToProps = dispatch => ({
  fetchEstablishments: () => dispatch(fetchEstablishments())
})

export default connect(mapStateToProps, mapDispatchToProps)(EstablishmentContainer)