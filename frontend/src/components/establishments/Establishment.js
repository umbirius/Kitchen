import React, { Component } from 'react'
import EstablishmentContainer from '../../containers/EstablishmentContainer'
import { Link } from "react-router-dom";


class Establishment extends Component {

    state= {
        like: 0
    }

    handleClick = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

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
                <td>
                    <button onClick={this.handleClick}>Like {this.state.like}</button>
                </td>
            </tr>
        )
    }
}

export default Establishment