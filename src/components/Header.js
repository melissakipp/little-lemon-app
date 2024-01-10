import React from 'react';

const Header = () => {
    return (
        <header>
            <div>
            <h1 className="sr-only">Little Lemon Homepage</h1>
            <img src="/images/Logo.svg" alt="Little Lemon logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/order-online">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
