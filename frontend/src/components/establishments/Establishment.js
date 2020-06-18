import React, { Component } from 'react'
 
class Establishment extends Component {

    render() {
        return (
            <div>{this.props.establishment.name}</div>
        )
    }
}

export default Establishment