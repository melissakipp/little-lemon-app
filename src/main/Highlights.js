import Card from '../components/ui/cards/Card';

export const Highlights = () => {
    return (
        <section className='highlights-section'>
            <div className='announcement'>
                <h2>This weeks specials!</h2>
            </div>
            {/* create three cards with an image on top, title, price, and description */}
            <div className='card-gallary'>
                <Card
                    image='https://via.placeholder.com/300'
                    title='Product 1 Product 1 Product 1'
                    price='$10.00'
                    description='Product description'
                    delivery='Delivery Available'
                />
                <Card
                    image='https://via.placeholder.com/300'
                    title='Product 2 Product 2 Product 2'
                    price='$10.00'
                    description='Product description'
                    delivery='Delivery Available'
                />
                <Card
                    image='https://via.placeholder.com/300'
                    title='Product 3 Product 3 Product 3'
                    price='$10.00'
                    description='Product description'
                    delivery='Delivery Available'
                />
            </div>
        </section>
    );
}
