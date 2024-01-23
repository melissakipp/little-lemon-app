import { FaCheckCircle } from 'react-icons/fa';


function ConfirmedReservation() {
  return (
    <div className='container confirmed-booking'>
        <FaCheckCircle
            className='icon'
        />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
    </div>
  );
}

export default ConfirmedReservation;