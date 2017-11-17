import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Logo from '../../images/Logo_Vertical_White_128x128.png'

const Nav = () => (
    <nav className="nav-bg row">
        <div className="nav-container container">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/">
                <img src={Logo} alt="logo" className="nav-logo"/>
            </Link>
            <Link to="/sign-up" className="btn btn-emphasis">Sign Up</Link>
        </div>
    </nav>
)

export default Nav
