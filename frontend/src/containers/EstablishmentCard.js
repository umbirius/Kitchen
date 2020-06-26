import React, { Component } from 'react'
import { connect } from 'react-redux'

class EstablishmentCard extends Component {


    id = Number(this.props.location.pathname.split("/locations/")[1])

    render() {
        debugger
        return (
            <div>
                hi
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        establishments: state.establishments,
        loading: state.loading,
        current_user: state.current_user
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAppointments: () => dispatch(fetchAppointments(id))
//     }
// }

export default connect(mapStateToProps)(EstablishmentCard)