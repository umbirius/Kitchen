export function logOut() {
    return (dispatch) => {
        dispatch({ type: 'LOGGING_OUT' })
        dispatch({ type: 'LOG_OUT' })
    }
}