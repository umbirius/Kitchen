import React, { Component } from 'react'
import Establishment from './Establishment'
// import unit component Establishment, will want to render on click 

class Establishments extends Component {
    render() {
        console.log('Establishments:')
        console.log(this.props)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Alcohol</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.establishments.map(e => <Establishment key={e.id} id={e.id} name={e.name} genre={e.genre} drinks={e.drinks} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Establishments