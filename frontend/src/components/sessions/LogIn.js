import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newUser } from '../../actions/newUser'


class LogIn extends Component {

    state = {
        username: '',
        redirect: false
    }

    handleOnChange = event => {
        switch (event.target.id) {
            case "username":
                this.setState({
                    username: event.target.value,
                })
                break

            default:
                this.setState({
                    username: ''
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

    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to="/dash" />
        } else {

            return (
                <div className="center-app">
                    <form onSubmit={(event) => this.handleOnSubmit(event)}>
                        <label>Username:</label>
                        <input
                            type='text'
                            id='username'
                            onChange={(event) => this.handleOnChange(event)}
                        />
                        <input type="submit" value="Log In"></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)