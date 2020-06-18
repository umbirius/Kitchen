export function fetchEstablishments() {
    return (dispatch) => {
        dispatch({ type: 'Date Spots Loading' })
        fetch('http://localhost:3001/establishments')
            .then(response => response.json())
            .then( establishments => dispatch({ type: 'ADD_ESTABLISHMENT', establishments}))
    }
}
