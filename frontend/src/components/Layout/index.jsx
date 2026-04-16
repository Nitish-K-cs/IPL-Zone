import './index.css';
import LogoPL from '../../assets/images/nav-logo.webp';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation();

    const links = [
        { to: '/', label: 'Home', cls: 'home' },
        { to: '/teams', label: 'Teams', cls: 'teams' },
        { to: '/nation', label: 'Nations', cls: 'nations' },
        { to: '/search', label: 'Players', cls: 'players' },
        { to: '/position', label: 'Positions', cls: 'positions' },
    ];

    return (
        <div className="app">
            <nav className="navbar">
                <div className="logo">
                    <img src={LogoPL} alt="Logo" />
                    <span>IPL Zone</span>
                </div>

                <ul className="nav-links">
                    {links.map(({ to, label, cls }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className={`nav-link ${cls} ${pathname === to ? 'active' : ''}`}
                            >
                                {label}
                                {pathname === to && <span className="active-dot" />}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="page-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;