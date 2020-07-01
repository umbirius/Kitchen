import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchAppointments } from '../actions/fetchAppointments'
import Appointments from '../components/appointments/Appointments'
import { requestDate } from '../actions/requestDate' 

class AppointmentContainer extends Component {

 
    componentDidMount() {
        this.props.fetchAppointments()

    }



    render() {
        console.log(this.props.state)
        const open_appointments = this.props.appointments.filter(appointment => appointment.establishment_id == this.props.establishment).sort(dateSort)
        console.log("Appointments Container:")
        console.log(open_appointments)
        debugger
        return (
            <div>
                <Appointments current_user = {this.props.current_user} open_appointments = {open_appointments} requestDate={this.props.requestDate}/>
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
        fetchAppointments: () => dispatch(fetchAppointments()),
        requestDate: (props) => dispatch(requestDate(props))
    }
}

function dateSort(a, b) {

    const dateA = a.when;
    const dateB = b.when;

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison;

}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentContainer)