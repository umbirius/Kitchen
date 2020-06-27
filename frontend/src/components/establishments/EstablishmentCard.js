import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppointmentContainer from '../../containers/AppointmentContainer'

class EstablishmentCard extends Component {

    render() {
        const establishment_id = this.props.location.pathname.split("/locations/")[1]
        return (
            <div>
                <AppointmentContainer establishment = {establishment_id}/>
            </div>
        )
    }
}



export default EstablishmentCard