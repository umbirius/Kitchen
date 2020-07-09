import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Appointment extends Component {


    handleClick = () => {
        console.log(`reserve ${this.props.when}`)
        this.props.requestDate(this.props)
        // return <Redirect to={`/locations/${this.props.key}`} />
        // this.props.history.push(`/locations/${this.props.key}`)
    }



    render() {
        
        return (
            <tr id={this.props.id} status={this.props.status.toString()}>
                <td>{new Date(this.props.when).toString().substr(0, 21)}</td>
                <td><button onClick={event => this.handleClick(event)}>submit request</button></td>
            </tr>
        )
    }
}

export default Appointment