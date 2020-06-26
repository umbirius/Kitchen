import React, { Component } from 'react'
import { connect } from 'react-redux'

class EstablishmentCard extends Component {

    // state = {
    //     establishment: null
    // }

// componentDidMount () {
//     fetchAppointments()
// }


    render() {
        debugger
        return (
            <div>
                {this.props.location.pathname.split("/locations/")[1]}
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