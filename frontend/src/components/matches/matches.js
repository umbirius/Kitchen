import React, { Component } from 'react'
import Match from './Match'
class Matches extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Where</th>
                            <th>When</th>
                            <th>Codeword</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.matches.map(match => <Match key={match.id} id={match.id} when={match.when} code_word ={match.code_word} est_id={match.establishment_id} establishments={this.props.establishments} cancel={true} current_user={this.props.current_user} cancelAppointment={this.props.cancelAppointment}/>)}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Matches