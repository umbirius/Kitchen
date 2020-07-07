import React, { Component } from 'react'
import { connect } from 'react-redux'
import Matches from '../components/matches/Matches'

class MatchContainer extends Component {


    render() {
        const matches = this.props.appointments.filter(apt => (apt.user_id_one == this.props.current_user.id || apt.user_id_two == this.props.current_user.id)
            && apt.status == true)

        return (
            <div className="center-app">
                <Matches establishments={this.props.establishments} matches={matches} />
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

export default connect(mapStateToProps)(MatchContainer)