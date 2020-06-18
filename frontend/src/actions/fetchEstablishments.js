export function fetchEstablishments() {
    return (dispatch) => {
        dispatch({ type: 'LOAD_DATE_SPOTS' })
        fetch('http://localhost:3001/establishments')
            .then(response => response.json())
            .then(establishments => dispatch({ type: 'SHOW_ESTABLISHMENTS', establishments }))
    }
}
