import React, { Component } from 'react'

class Profile extends Component {

    handleOnClick = e => {
        e.preventDefault()
        this.props.logOut()
    }



    render() {
        
        return (
            <div>
                {this.props.currentUser.username}<br></br>
                <button className="log-out" onClick={this.handleOnClick}>Log Out</button>
            </div>
        )
    }
}

export default Profile