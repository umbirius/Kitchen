import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageUsers(state = {
    users: [],
    establishments: [],
    appointments: [],
    current_user: undefined,
    loading: false

}, action) {
    // debugger
    switch (action.type) {
        case 'NEW_USER':
            console.log("Creating User")
            return { ...state, users: [...state.users], loading: true }

        case 'ADD_USER':
            const user = { id: action.user.id, username: action.user.username, gender: action.user.gender, interests: action.user.interests }
            return { ...state, users: [...state.users, user], current_user: user }

        case 'LOGGING_OUT':
            console.log("Logging out")
            return { ...state, current_user: state.current_user, loading: true }

        case 'LOG_OUT':
            return { ...state, current_user: undefined }

        case 'LOAD_DATE_SPOTS':
            return {
                ...state, establishments: [...state.establishments], loading: true
            }
        case 'ADD_ESTABLISHMENTS':
            return {
                ...state, establishments: action.establishments, loading: false
            }

        case 'LOAD_APPOINTMENTS':
            return {
                ...state, appointments: [...state.appointments], loading: true
            }
        case 'ADD_APPOINTMENTS':
            return {
                ...state, appointments: action.appointments, loading: false
            }
        case 'UPDATE_APPOINTMENT':
            const index = state.appointments.findIndex(appointment => appointment.id == action.appointment.id)
            const appointment = action.appointment
            return {
                ...state,
                appointments: [...state.appointments.slice(0, index).concat(appointment),
                ...state.appointments.slice(index + 1)],
                loading: false
            }

        case 'LOAD_REQUEST':
            return {
                ...state, appointments: [...state.appointments], loading: true
            }

        default:
            return state;
    }


}