export default function ReservationForm() {
    return (
        <form className="reservation-form">
            <div className="space">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
            </div>
            <div className="space">
                <label htmlFor="res-time">Choose time
                    <select className="select" id="res-time">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </label>
            </div>
            <div className="space">
                <label htmlFor="guests">Number of guests</label>
                <input className="number" type="number" placeholder="1" min="1" max="10" id="guests" />
            </div>
            <div className="space">
                <label htmlFor="occasion">Occasion</label>
                <select className="select" id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input className='btn' type="submit" value="Make Your reservation" />
        </form>
    );
}