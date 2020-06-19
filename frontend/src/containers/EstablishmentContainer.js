import React, { Component } from 'react'
import Establishments from '../components/establishments/Establishments'

// import { connect } from 'react-redux'

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

export default EstablishmentContainer