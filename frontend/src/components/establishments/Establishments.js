import React, { Component } from 'react'
import Establishment from './Establishment'
// import unit component Establishment, will want to render on click 

class Establishments extends Component {

    state = {
        booze: false
    }

    handleClick = () =>{
       this.setState({
           booze: !this.state.booze
       })
    }

    render() {
        console.log('Establishments:')
        console.log(this.props)
        const establishments = this.state.booze ? this.props.establishments.filter( e => e.drinks == "yes" ) : this.props.establishments
        return (
            <div>
                <button onClick={this.handleClick}>Only Drinks</button>
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
                        {establishments.map(e => <Establishment key={e.id} id={e.id} name={e.name} genre={e.genre} drinks={e.drinks} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Establishments