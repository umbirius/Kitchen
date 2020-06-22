import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageUsers(state = {
    users: [],
    establishments: [],
    current_user: '',
    loading: false

}, action) {
    switch (action.type) {
        case 'NEW_USER':
            console.log("Creating User")
            return { ...state, users: [...state.users], loading: true }

        case 'ADD_USER':
            const user = { username: action.user.username, gender: action.user.gender, interests: action.user.interests }
            return { ...state, users: [...state.users, user], current_user: user }

        case 'LOGGING_OUT':
            console.log("Logging out")
            return { ...state, current_user: [...state.current_user], loading: true }

        case 'LOG_OUT':
            return { ...state, current_user: ""}

        case 'DELETE_USER':
            return { ...state, users: state.users.filter(user => user.id !== action.id) }

        case 'LOAD_USERS':
            return {
                ...state,
                users: [...state.users],
                loading: true
            }
        case 'ADD_USERS':
            return {
                ...state,
                users: action.users,
                loading: false
            }

        case 'LOAD_DATE_SPOTS':
            return {
                ...state,
                establishments: [...state.establishments],
                loading: true
            }
        case 'ADD_ESTABLISHMENTS':
            return {
                ...state,
                establishments: action.establishments,
                loading: false
            }

        default:
            return state;
    }


}