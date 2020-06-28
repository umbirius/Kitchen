export const requestDate = () => {
    return dispatch => {
      return fetch('http://localhost:3000/appointments', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({medication: medication})
      })
        .then(response => response.json())
        .then(medication => {
          dispatch(setSelectedMedication(medication))
          dispatch(resetMedicationForm())
        })
        .catch(error => console.log(error))
    };
  }