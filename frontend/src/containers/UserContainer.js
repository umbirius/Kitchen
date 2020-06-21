import React, { Component } from 'react';
import UserForm from '../components/users/UserForm'
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'

class UserContainer extends Component {

    render() {
        return (
            <div className="log-in-sign-up">
                <UserForm newUser={this.props.newUser}/>
            </div>)
    }
}


const mapStateToProps = ({ users }) => ({ users })
const mapDispatchToProps = dispatch => ({
    newUser:  props => dispatch(newUser(props)),
    deleteUser: id => dispatch({ type: "DELETE_USER", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)