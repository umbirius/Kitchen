import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchAppointments } from '../actions/fetchAppointments'
import Appointments from '../components/appointments/Appointments'

class AppointmentContainer extends Component {

 
    componentDidMount() {
        this.props.fetchAppointments()

    }



    render() {
        console.log(this.props.state)
        const open_appointments = this.props.appointments.filter(appointment => appointment.establishment_id == this.props.establishment)
        console.log("Appointments Container:")
        console.log(open_appointments)
        return (
            <div>
                <Appointments current_user = {this.props.current_user} open_appointments = {open_appointments}/>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        establishments: state.establishments,
        loading: state.loading,
        current_user: state.current_user,
        appointments: state.appointments
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchAppointments: () => dispatch(fetchAppointments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentContainer)