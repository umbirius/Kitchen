export function cancelAppointment(props){


    const configDate = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                    user_id: props.current_user.id,
                    appointment_id: props.id,
                    cancel: props.cancel
            }
        )
    }

    return (dispatch) => {
        dispatch({ type: 'LOAD_REQUEST' })
        fetch(`http://localhost:3001/appointments/${props.id}`, configDate)
            .then(response => response.json())
            .then(apt => {   
                return dispatch({ type: 'UPDATE_APPOINTMENT', appointment: apt.data.attributes })
            })
    };
}
