export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_USERS' })
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(users => {
                dispatch({ type: 'ADD_USERS', users: users.data.map(u => u.attributes)})
            })
    }
}
