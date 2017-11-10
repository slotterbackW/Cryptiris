import React from 'react'
import { Route, Link } from 'react-router-dom'

import './nav.css'

const Nav = () => (
    <nav className="nav-bg row">
        <div className="nav-container container">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/">
                <img src="https://placehold.it/64x64"/>
            </Link>
            <Link to="/sign-up" className="btn btn-emphasis">Sign Up</Link>
        </div>
    </nav>
)

export default Nav
