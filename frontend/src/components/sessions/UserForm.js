import React, { Component } from 'react';
import { withRouter } from 'react-router';


class UserForm extends Component {

    state = {
        username: '',
        gender: '',
        interests: ''
    }

    handleOnChange = event => {
        switch (event.target.id) {
            case "username":
                this.setState({
                    username: event.target.value,
                })
            case "gender":
                this.setState({
                    gender: event.target.value,
                })
            case "interests":
                this.setState({
                    interests: event.target.value,
                })
        }

    }


    handleOnSubmit = event => {
        event.preventDefault()
        let user = this.state
        this.props.newUser(user)
        window.location = '/dash';
        
    }

    render() {
        return (
            <div>
                <form id="log-in-or-sign-up" onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Username:</label>
                    <input
                        type='text'
                        id='username'
                        onChange={(event) => this.handleOnChange(event)}
                    />
                    <br></br>
                    <label>Gender</label>
                    <select id="gender" onChange={(event) => this.handleOnChange(event)} >
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select><br></br>
                    <label>Interested In:</label>
                    <select id="interests" onChange={(event) => this.handleOnChange(event)}>
                        <option value='men'>Men</option>
                        <option value='women'>Women</option>
                        <option value='men+women'>Men and Women</option>
                    </select><br></br>
                    <input type="submit" value="Create Account"></input>
                </form>
            </div>
        )
    }
}

export default UserForm