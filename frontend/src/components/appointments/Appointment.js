import React, {Component} from 'react'

class Appointment extends Component {

    handleClick = event => {
        event.preventDefault()
        console.log(`reserve ${this.props.when}`)
        debugger
        // requestDate(this.props.current_user.id)
    }



    render () {
        return (
            <div key={this.props.id}> {new Date(this.props.when).toString().substr(0,21)}<button onClick={event => this.handleClick(event)}>submit request</button></div>
        )
    }
}

export default Appointment