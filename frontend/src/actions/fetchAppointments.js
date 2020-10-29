export const fetchAppointments = () => {
    return (dispatch) => {
        console.log("b")
        dispatch({ type: 'LOAD_APPOINTMENTS' })
        fetch('http://localhost:3001/appointments')
            .then(response => response.json())
            .then(appointments => {
                console.log("c")
                dispatch({ type: 'ADD_APPOINTMENTS', appointments: appointments.data.map(a => a.attributes) })
            })
            console.log("d")
    }
}