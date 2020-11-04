import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newUser } from '../../actions/newUser'



class SignUp extends Component {

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
        if (this.state.username && this.state.gender && this.state.interests) { 
            this.setState({
                redirect: true
            })
        }
            
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to="/dash" />
        } else {

            return (
                <div className="center-app">
                    <form onSubmit={(event) => this.handleOnSubmit(event)}>
                            <tr>
                                <td><label>Username:</label></td>
                                <td><input
                                    type='text'
                                    id='username'
                                    onChange={(event) => this.handleOnChange(event)}
                                /></td>
                            </tr>
                            <tr>
                                <td><label>Gender:</label></td>
                                <td><select id="gender" onChange={(event) => this.handleOnChange(event)} >
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select></td>
                            </tr>
                            <tr>

                                <td><label>Interested In:</label></td>
                                <td><select id="interests" onChange={(event) => this.handleOnChange(event)}>
                                    <option value='men'>Men</option>
                                    <option value='women'>Women</option>
                                    <option value='men+women'>Men and Women</option>
                                </select></td>
                            </tr>
                    
                        <input type="submit" value="Sign Up"></input>
                    </form>
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
    newUser: props => dispatch(newUser(props))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
