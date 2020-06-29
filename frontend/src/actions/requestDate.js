// export const requestDate = () => {
//     return dispatch => {
//       return fetch('http://localhost:3000/appointments', {
//         method: "PATCH",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({medication: medication})
//       })
//         .then(response => response.json())
//         .then(medication => {
//           dispatch(setSelectedMedication(medication))
//           dispatch(resetMedicationForm())
//         })
//         .catch(error => console.log(error))
//     };
//   }


// export function requestDate(user_id, appointment_id) {

//     const configAppointment = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(
//             {
//                 user: user
//             }
//         )
//     }


//     return (dispatch) => {
//         dispatch({ type: 'PROCESSING_REQUEST' })
//         fetch('http://localhost:3000/appointments', configAppointment)
//             .then(response => response.json())
//             .then(appointent => {
//                 return dispatch({ type: 'ADD_USER', user: newUser })
//             })

//     }

// }