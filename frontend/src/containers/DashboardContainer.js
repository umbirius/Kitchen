import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { fetchAppointments } from '../actions/fetchAppointments'
import { fetchEstablishments } from '../actions/fetchEstablishments'



class DashboardContainer extends Component {


    handleOnClick = e => {
        e.preventDefault()
        this.props.logOut()
    }


    render() {
        if (this.props.current_user) {
            return (
                <div className="center-app">
                    <button>Search Date Locations</button>
                    <button>View Matches</button>
                    <button onClick={this.handleOnClick} id="log-out-button">Log Out</button>
                </div>
            )
        } else {
            return (
                <div className="center-app">
                    <Link to='/log-in'>
                        <button id="log-in-button">Log In</button>
                    </Link>
                    <br></br>
                    ---- or ----
                    <br></br>
                    <Link to='/sign-up'>
                        <button id="sign-up-button">Sign Up</button>
                    </Link>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    current_user: state.current_user,
    loading: state.loading,
    appointments: state.appointments
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch({ type: 'LOG_OUT' }),
    fetchAppointments: () => dispatch(fetchAppointments()),
    fetchEstablishments: () => dispatch(fetchEstablishments())
})


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)