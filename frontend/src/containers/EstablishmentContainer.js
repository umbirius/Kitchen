import React, { Component } from 'react'
import Establishments from '../components/establishments/Establishments'

import { connect } from 'react-redux'

class EstablishmentContainer extends Component {

    render() {
        return (
            <div>
                <Establishments/>
            </div>)
    }
}

export default EstablishmentContainer