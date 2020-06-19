import React, { Component } from 'react'
import Establishment from './Establishment'
// import unit component Establishment, will want to render on click 

class Establishments extends Component {
    render() {
        console.log(this.props)
        return (
        <div>
            {/* {this.props.establishments.map( e => <Establishment name = {e..name}/>)} */}
        </div>
    )
    }
}

export default Establishments