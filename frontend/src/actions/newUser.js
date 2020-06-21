export function newUser(props) {
    let user = props

    const configUser = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(
            {
                user: user
            }
        )
    }


    return (dispatch) => {
        dispatch({ type: 'NEW_USER"' })
        fetch('http://localhost:3000/users', configUser)
            .then(response => response.json())
            .then(newUser => {
                return dispatch({ type: 'ADD_USER', user: newUser })
            })

    }

}
