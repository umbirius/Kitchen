import React, { Component } from 'react'
import EstablishmentContainer from '../../containers/EstablishmentContainer'
 
class Establishment extends Component {

    // establishments = () => {}
    //     this.props.establishments.map( establishment => <Establishment name={est} />)
    // }

    render() {
        const e = this.props
        return (
            <div key={e.id} >
                <li>{e.name} - {e.genre} - {e.drinks}</li>

            </div>
        )
    }
}

export default Establishment