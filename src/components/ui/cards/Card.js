import './card.css';

function Card({ image, title, price, description, delivery }) {
    return (
        <div className='card'>
            <img
                className='card-img'
                src={image}
                alt='Food'
            />
            <div className='card-body'>
                <div className='card-details'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-price'>{price}</p>
                </div>
                <p className='card-description'>{description}</p>
                <p className='card-delivery'>{delivery}</p>
            </div>
        </div>
    );
}

export default Card;
