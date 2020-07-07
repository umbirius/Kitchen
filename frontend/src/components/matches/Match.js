import React, { Component } from 'react'

class Match extends Component {
    
    render (){
        const place = this.props.establishments.find(e => e.id == this.props.est_id)
        return(
            <tr>
                <td>{place.name}</td>
                <td>{Date(this.props.when).toString().substr(0,21)}</td>
                <td>{this.props.code_word}</td>
            </tr>
        )
    }
}

export default Match