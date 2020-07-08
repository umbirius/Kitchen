import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchAppointments } from '../actions/fetchAppointments'
import Appointments from '../components/appointments/Appointments'
import { requestDate } from '../actions/requestDate'

class AppointmentContainer extends Component {


    componentDidMount = () => {
        this.props.fetchAppointments()
        
    }



    render() {
        
        let open_appointments = this.props.appointments.filter(a => a.establishment_id == this.props.establishment && a.status === false && (a.user_id_one || a.user_id_two) != this.props.current_user.id).sort(dateSort)
        console.log("Appointments Container:")
        console.log(open_appointments)
        return (
            <div className="center-app">
                <Appointments current_user={this.props.current_user} open_appointments={open_appointments} requestDate={this.props.requestDate} />
            </div>)
    }
}

const mapStateToProps = state => ({
    establishments: state.establishments,
    loading: state.loading,
    current_user: state.current_user,
    appointments: state.appointments
})


const mapDispatchToProps = dispatch => ({
    fetchAppointments: () => dispatch(fetchAppointments()),
    requestDate: (props) => dispatch(requestDate(props))
})

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