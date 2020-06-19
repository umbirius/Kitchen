export const fetchEstablishments = () => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_DATE_SPOTS' })
        fetch('http://localhost:3000/establishments')
            .then(response => response.json())
            .then(establishments => {
                dispatch({ type: 'ADD_ESTABLISHMENTS', establishments: establishments.data.map(e => e.attributes)})
            })
    }
}
