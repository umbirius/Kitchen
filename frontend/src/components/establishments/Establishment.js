import React, { Component } from 'react'
import EstablishmentContainer from '../../containers/EstablishmentContainer'
import { Link } from "react-router-dom";


class Establishment extends Component {

    // establishments = () => {}
    //     this.props.establishments.map( establishment => <Establishment name={est} />)
    // }

    // handleOnClick = (event) => {
    //     event.preventDefault()
    //     console.log(`click ${this.props.name}`)
    //     // window.location = `/locations/${this.props.id}`;
    //     return (
    //         <Link to={`/location/${this.props.id}`} establishment={this.props}>
    //             <button>Log in</button>
    //         </Link>
    //     )

    // }



    render() {
        const e = this.props
        return (
            <tr id={e.id} >
                <td>{e.name}</td>
                <td>{e.genre}</td>
                <td>{e.drinks}</td>
                <td>
                    <Link to={`/locations/${this.props.id}`} establishment={e}>
                        <button>Look for Date</button>
                    </Link>
                </td>
            </tr>
        )
    }
}

export default Establishment