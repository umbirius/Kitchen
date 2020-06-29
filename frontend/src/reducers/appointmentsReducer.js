
// export default function appointmentsReducer(state = { 
//     appointments: [],
//     loading: false
// }, action){
//     switch(action.type) {
//         case 'SUBMIT_APPOINTMENT' :
//             return [
//                 ...state.slice(0,i), //before one that is updating
//                 {...state[i], newvalue} //return modified
//                 ...state.slice(i+1), //after one we are updating
//             ]
//     }

// }