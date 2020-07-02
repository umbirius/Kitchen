import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';

class Appointment extends Component {


    handleClick = () => {
        console.log(`reserve ${this.props.when}`)
        this.props.requestDate(this.props)
        // return <Redirect to={`/locations/${this.props.key}`} />
        // this.props.history.push(`/locations/${this.props.key}`)
    }



    render () {
        return (
            <div id={this.props.id} status= {this.props.status.toString()}> {new Date(this.props.when).toString().substr(0,21)}<button onClick={event => this.handleClick(event)}>submit request</button></div>
        )
    }
}

export default Appointment