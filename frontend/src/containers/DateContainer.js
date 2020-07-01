import React, { Component } from 'react';
import UserForm from '../components/sessions/UserForm'
import Profile from '../components/users/Profile'
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'
import { logOut } from '../actions/logOut'
import EstablishmentContainer from './EstablishmentContainer';


class DateContainer extends Component {


    render () {
        return (
            <div>
                find Date
            </div>
        )
    }
}

export default DateContainer