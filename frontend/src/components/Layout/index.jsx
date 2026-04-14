import './index.css';
import LogoPL from '../../assets/images/PL.webp';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => { 
    return (
        <div className="app">
            
            {/* Navbar */}
            <nav className="navbar">
                
                {/* Logo */}
                <div className="logo">
                    <img src={LogoPL} alt="Logo" />
                    <span>Premier Zone</span>
                </div>

                {/* Links */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/teams">Teams</Link></li>
                    <li><Link to="/nation">Nations</Link></li>
                    <li><Link to="/search">Players</Link></li>
                    <li><Link to="/position">Positions</Link></li>
                </ul>

            </nav>

            {/* Page Content */}
            <div className="page-content">
                <Outlet />
            </div>

        </div>
    );
};

export default Layout;