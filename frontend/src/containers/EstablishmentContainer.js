import React, { Component } from 'react'
import Establishments from '../components/establishments/Establishments'

import { connect } from 'react-redux'
import { fetchEstablishments } from '../actions/fetchEstablishments'

class EstablishmentContainer extends Component {

    render() {
        console.log("Establishments Container:")
        console.log(this.props.establishments)
        return (
            <div>
                <Establishments establishments={this.props.establishments} />
            </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(EstablishmentContainer)