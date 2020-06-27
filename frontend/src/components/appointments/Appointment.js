import React, {Component} from 'react'

class Appointment extends Component {

    render () {

        return (
            <div key={this.props.id}> {new Date(this.props.when).toString()}<button>submit request</button></div>
        )
    }
}

export default Appointment