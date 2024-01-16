import { render, screen } from '@testing-library/react';
import Reservation, { initializeTimes } from '../../pages/reservation/Reservation';

test('renders Reservation component', () => {
    render(<Reservation />);
    const h1Element = screen.getByText(/Book Now/i);
    expect(h1Element).toBeInTheDocument();
});

test("initializeTimes returns the expected initial times", () => {
        // Define the expected initial times based on your implementation
        const expectedInitialTimes = [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];
        // Call the initializeTimes function and assert that it returns the expected value
        const actualInitialTimes = initializeTimes();
        expect(actualInitialTimes).toEqual(expectedInitialTimes);
});
