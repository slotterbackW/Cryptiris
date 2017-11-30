import React from 'react'

import SpinnerImg from '../../images/Spinner.gif'
import './spinner.css'

const Spinner = (props) => (
    <div className="fullscreen">
        <img src={SpinnerImg} className="spinner" alt="Loading spinner"/>
    </div>
)

export default Spinner
