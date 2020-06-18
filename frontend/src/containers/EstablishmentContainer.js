import React, { Component } from 'react'
import Establishments from '../components/establishments/Establishments'

import { connect } from 'react-redux'

class EstablishmentContainer extends Component {

    render() {
        return (
            <div>
                <Establishments establishments={this.props.establishments}/>
            </div>)
    }
}

export default EstablishmentContainer