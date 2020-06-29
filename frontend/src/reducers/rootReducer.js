import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import establishmentsReducer from './establishmentsReducer'
import appointmentsReducer from './appointmentsReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    establishments: establishmentsReducer,
    appointments: appointmentsReducer
})

export default rootReducer