import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class UserForm extends Component {

    state = {
        username: '',
        gender: '',
        interests: '',
        redirect: false
    }

    handleOnChange = event => {
        switch (event.target.id) {
            case "username":
                this.setState({
                    username: event.target.value,
                })
                break
            case "gender":
                this.setState({
                    gender: event.target.value,
                })
                break
            case "interests":
                this.setState({
                    interests: event.target.value,
                })
                break
            default:
                this.setState({
                    username: '',
                    gender: '',
                    interests: ''
                })
        }

    }


    handleOnSubmit = event => {
        event.preventDefault()
        let user = this.state
        this.props.newUser(user)
        this.setState({
            redirect: true
        })
        // window.location = '/dash';
        // can use 'refs' on various inputs to refer to the data from a submit
        // this.refs.commentForm.reset()
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to="/dash" />
        } else {

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
}

export default UserForm