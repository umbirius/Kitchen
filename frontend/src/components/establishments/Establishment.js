import React, { Component } from 'react'
import EstablishmentContainer from '../../containers/EstablishmentContainer'
 

class Establishment extends Component {

    // establishments = () => {}
    //     this.props.establishments.map( establishment => <Establishment name={est} />)
    // }

    render() {
        const e = this.props
        return (
            <tr key={e.id} >
                <td>{e.name}</td>
                <td>{e.genre}</td>
                <td>{e.drinks}</td>
                <td>
                    <button>
                        Look for date
                    </button>
                </td>
            </tr>
        )
    }
}

export default Establishment