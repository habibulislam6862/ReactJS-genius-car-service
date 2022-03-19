import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Genius Car service</NavLink>
                {  user.email  ? (
                    <div className={`d-flex align-items-center ${styles.userName}`}>
                        <div>Hey, { user.displayName}</div>
                        <button onClick={logout} className='btn-sm btn btn-dark'>Log Out</button>
                    </div>
                ) : null}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                       {user.email ? '' :
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                       }
                        <li className="nav-item">
                            <NavLink to="/about-us" className="nav-link">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;