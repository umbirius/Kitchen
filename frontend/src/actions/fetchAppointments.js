export const fetchAppointments = () => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_APPOINTMENTS' })
        fetch('http://localhost:3001/appointments')
            .then(response => response.json())
            .then(appointments => {
                
                dispatch({ type: 'ADD_APPOINTMENTS', appointments: appointments.data.map(a => a.attributes) })
            })
    }
}