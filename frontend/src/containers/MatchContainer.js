import React, { Component } from 'react'
import { connect } from 'react-redux'

class MatchContainer extends Component {


    render () {
        return (
            <div>Matches</div>
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