import React, { Component } from 'react'
// import unit component Establishment, will want to render on click 
import { Link } from "react-router-dom";
import Appointment from './Appointment'



class Appointments extends Component {
    render() {
        return (
            <div className="appointment-list">
                <h1>Available Dates
                </h1>
                {this.props.open_appointments.map(a => <Appointment id={a.id} when={a.when} current_user={this.props.current_user}/>)}

            </div>
        )
    }
}

export default Appointments