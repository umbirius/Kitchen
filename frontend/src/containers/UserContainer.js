import React, { Component } from 'react';
import UserForm from '../components/users/UserForm'
import { connect } from 'react-redux'

class UserContainer extends Component {

    render() {
        return (
            <div class="log-in-sign-up">
                <UserForm addUser={this.props.addUser}/>
            </div>)
    }
}


const mapStateToProps = ({ users }) => ({ users })
const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: "ADD_USER", user }),
    deleteUser: id => dispatch({ type: "DELETE_USER", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)