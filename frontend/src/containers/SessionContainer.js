import React, { Component } from 'react';
import UserForm from '../components/sessions/UserForm'
import Profile from '../components/users/Profile'
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'
import { logOut } from '../actions/logOut'
import { Link } from "react-router-dom";
import DashboardContainer from './DashboardContainer';

class SessionContainer extends Component {


    handleClick =() => {
        window.location = '/locations';

    }


    render() {
        if (this.props.current_user === undefined) {
            return (
                <div className="user">
                    <UserForm newUser={this.props.newUser} />
                </div>
            )
        } else {
            return (
                <div className="user">
                    {/* < Profile currentUser={this.props.current_user} logOut={this.props.logOut} />
                    {/* <button type="button" onClick={this.handleClick}>Find Date</button> */}
                    {/* <Link to={'/locations'} currentUser={this.props.current_user}> */}
                        {/* <button>Find Date</button> */}
                    {/* </Link> */}
                    {/* < EstablishmentContainer /> */}
                    <DashboardContainer />
                </div>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        users: state.users,
        current_user: state.current_user,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    newUser: props => dispatch(newUser(props)),
    logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer)