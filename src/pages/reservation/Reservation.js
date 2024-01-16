import { useReducer } from 'react';

import './reservation.css';

import ReservationForm from './ReservationForm';


// Define a reducer function to update the availableTimes
function availableTimesReducer(state, action) {
    // Implement logic here to update availableTimes based on the selected date
    // For now, return the same available times regardless of the date
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }

// Define the initializeTimes function to set the initial state
export function initializeTimes() {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }

    // Define the updateTimes function to update the availableTimes state based on the selected date
    function updateTimes(dispatch, selectedDate) {
    // Implement logic here to update availableTimes based on the selected date
    console.log("Selected Date: ", selectedDate);
    console.log("Update Times: ", dispatch);
    // For now, dispatch the same available times regardless of the date
    dispatch([]);
    }

// function updateTimes(dispatch, selectedDate) {
//     const timeSlotsByDate = {
//       '2024-12-31': [
//         '17:00',
//         '18:00',
//         '19:00',
//       ],
//       '2024-12-30': [
//         '16:00',
//         '17:00',
//         '18:00',
//       ],
//       // Add more date-time associations as needed
//     };
//     // Check if the selectedDate exists in the mapping
//     if (selectedDate in timeSlotsByDate) {
//       // If it does, dispatch the associated time slots
//       const newAvailableTimes = timeSlotsByDate[selectedDate];
//       dispatch(newAvailableTimes);
//     } else {
//       // If not, dispatch an empty array or some default value
//       dispatch([]);
//     }
//   }

function Reservation() {

    // Initialize the availableTimes state using useReducer
    const [availableTimes, dispatch] = useReducer(
        availableTimesReducer,
        [],
        initializeTimes
    );
    console.log(availableTimes);
    console.log(dispatch);

    return (
        <main className='reservation-container'>
            <h1>Book Now</h1>
            <ReservationForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </main>
    );
}

export default Reservation;
