import React from 'react';

const Footer = () => {
    return (
        <footer>
            <h2 className='sr-only'>Site Footer</h2>
            <section>
                <h3>Site Menu</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservation'>Reservation</a></li>
                    <li><a href='/online-order'>Online order</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </section>
            <section>
                <h3>Contact</h3>
                <address>
                    <a href="mailto:info@littlelemon.com">info@littlelemon.com</a><br />
                    <a href="tel:+14800000000">(480) 000-0000</a>
                </address>
            </section>
            <section>
                <h3>Social Media</h3>
            </section>
        </footer>
    );
};

export default Footer;
