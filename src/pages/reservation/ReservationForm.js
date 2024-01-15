import { useState } from "react";

export default function ReservationForm() {

    // Initialize state variables to store form input values
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    // Initialize state variable for available booking times
    const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // You can now access the form input values (date, time, guests, occasion)
        console.log("Date:", date);
        console.log("Time:", time);
        console.log("Guests:", guests);
        console.log("Occasion:", occasion);

    // You can perform further actions, such as sending data to a server, here.
        ClearForm();
    };

    const ClearForm = () => {
        setDate("");
        setTime("17:00");
        setGuests(1);
        setOccasion("Birthday");
    }

    return (
        <form 
            className="reservation-form"
            onSubmit={handleSubmit}
        >
            <div className="space">
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className="space">
                <label htmlFor="res-time">Choose time
                    <select 
                        className="select" 
                        id="res-time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    >
                    <option value="">Select a time</option>
                        {availableTimes.map((availableTime) => (
                            <option key={availableTime} value={availableTime}>
                            {availableTime}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="space">
                <label htmlFor="guests">Number of guests</label>
                <input 
                    className="number" 
                    type="number" 
                    placeholder="1" 
                    min="1" max="10" 
                    id="guests" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>
            <div className="space">
                <label htmlFor="occasion">Occasion</label>
                <select 
                    className="select" 
                    id="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input 
                className='btn' 
                type="submit" 
                value="Make Your reservation" 
            />
        </form>
    );
}