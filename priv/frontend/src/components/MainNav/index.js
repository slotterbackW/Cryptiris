import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../actions/sessionActions'

import Brand from '../../images/Logo_White_64x64.png'
import CaretUp from '../../images/caret-up.png'
import CaretDown from '../../images/caret-down.png'

import './main-nav.css'

const toggleDropdown = () => {
    const dropdown = document.querySelector('.dropdown')
    dropdown.classList.toggle('show')
}

const MainNav = (props) => {
    const onLogOut = () => {
        props.dispatch(actions.logout())
    }
    return (
        <div className="main-nav nav-bg">
            <div className="container nav-link-container">
                <Link to="/dashboard">
                    <img src={Brand} alt="Cryptiris logo" className="nav-brand-img"/>
                </Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/browse" className="nav-link">Browse</Link>
            </div>
            <div className="nav-link-container">
                <div className="dropdown" onClick={toggleDropdown}>
                    <span className="dropdown-title">
                        <span className="menu">Menu</span>
                        <img className="caret-up" src={CaretUp} alt="caret-up"/>
                        <img className="caret-down" src={CaretDown} alt="caret-down"/>
                    </span>
                    <div className="dropdown-items-container nav-bg">
                        <ul className="dropdown-list">
                            <li className="dropdown-list-item">Profile</li>
                            <hr/>
                            <li className="dropdown-list-item" onClick={onLogOut}>Log Out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(MainNav)