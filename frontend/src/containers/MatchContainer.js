import React, { Component } from 'react'
import { connect } from 'react-redux'
import Matches from '../components/matches/matches'
import { cancelAppointment } from '../actions/cancelAppointment'
import { fetchAppointments } from '../actions/fetchAppointments'
import { fetchEstablishments } from '../actions/fetchEstablishments'



class MatchContainer extends Component {

    componentDidMount = () => {
        this.props.fetchAppointments()
        this.props.fetchEstablishments()
    }

    render() {
        const matches = this.props.appointments.filter(apt => (apt.user_id_one == this.props.current_user.id || apt.user_id_two == this.props.current_user.id)
            && apt.status == true).sort(dateSort)

        return (
            <div className="center-app">
                <Matches establishments={this.props.establishments} matches={matches} current_user={this.props.current_user} cancelAppointment={this.props.cancelAppointment} />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    establishments: state.establishments,
    loading: state.loading,
    current_user: state.current_user,
    appointments: state.appointments
})

const mapDispatchToProps = dispatch => ({
    cancelAppointment: (props) => dispatch(cancelAppointment(props)),
    fetchAppointments: () => dispatch(fetchAppointments()),
    fetchEstablishments: () => dispatch(fetchEstablishments())
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchContainer)

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