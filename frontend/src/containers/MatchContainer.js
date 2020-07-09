import React, { Component } from 'react'
import { connect } from 'react-redux'
import Matches from '../components/matches/Matches'
import { cancelAppointment } from '../actions/cancelAppointment'


class MatchContainer extends Component {


    render() {
        const matches = this.props.appointments.filter(apt => (apt.user_id_one == this.props.current_user.id || apt.user_id_two == this.props.current_user.id)
            && apt.status == true).sort(dateSort)

        return (
            <div className="center-app">
                <Matches establishments={this.props.establishments} matches={matches} current_user={this.props.current_user} cancelAppointment={this.props.cancelAppointment}/>
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
    cancelAppointment: (props) => dispatch(cancelAppointment(props))
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