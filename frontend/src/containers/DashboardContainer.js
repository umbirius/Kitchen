import React, { Component } from 'react';
import Profile from '../components/users/Profile'
import { connect } from 'react-redux'
import EstablishmentContainer from './EstablishmentContainer';


class DashboardContainer extends Component {


    render () {
        return (
            <div className="dashboard">
                <button>
                    Search Date Locations
                </button><br></br>
                <button>
                    View Submitted Appointments
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        current_user: state.current_user,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(DashboardContainer)