import "./hero.css";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="col-1">
                <h2 className="hero-title">Little Lemon</h2>
                <p className="hero-location">Chicago</p>
                <p className="hero-descr">Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.</p>
                <button>Reservations</button>
            </div>
            <div className="col-2">
                <img className="hero-image" src="/images/restauranfood.jpg" alt="restaurant food" />
            </div>
        </section>
    );
};

export default Hero;
