import { Link } from 'react-router-dom';

export default function MainNavigation() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/reservation'>Reservation</Link></li>
                <li><Link to='/order-online'>Order online</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>

    );
}

