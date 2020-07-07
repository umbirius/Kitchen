import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class DashboardContainer extends Component {


    render() {
        if (this.props.current_user) {
            return (
                <div className="dashboard">
                    <button>Search Date Locations</button>
                    <button>View Submitted Appointments</button>
                    <button id="log-out-button">Log Out</button>
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

export default connect(mapStateToProps)(DashboardContainer)