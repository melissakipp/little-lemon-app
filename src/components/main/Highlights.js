export const Highlights = () => {
    return (
        <>
            <h2>This weeks specials!</h2>
            {/* create three cards with an image on top, title, price, and description */}
            <div className="card">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
                <h3>Product 1</h3>
                <p>$10.00</p>
                <p>Product description</p>
                <p>Delivery Available</p>
            </div>
        </>
    );
}
