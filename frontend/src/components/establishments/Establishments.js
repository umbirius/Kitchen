import React, { Component } from 'react'
import Establishment from './Establishment'
// import unit component Establishment, will want to render on click 

class Establishments extends Component {
    render() {
        console.log('Establishments:')
        console.log(this.props)
        return (
            <div>
                {this.props.establishments.map(e => <Establishment key={e.id} name={e.name} genre={e.genre} drinks={e.drinks} />)}
            </div>
        )
    }
}

export default Establishments