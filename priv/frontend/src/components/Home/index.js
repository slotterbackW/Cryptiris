import React from 'react'

import TopNav from '../TopNav'

import './home.css'

import bg from '../../images/home-bg.jpg'
import Graph from '../../images/graph-icon.png'
import Money from '../../images/money-icon.png'
import Talk from '../../images/talk-icon.png'

const Home = () => {
    const jumbotronStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPositionY: "34rem"
    }
    return (
        <div>
            <TopNav />
            <div className="jumbotron" style={jumbotronStyle}>
                <div className="container">
                    <h1>Cryptiris</h1>
                    <h5>Currency and cryptocurrency information at your fingertips</h5>
                </div>
            </div>
            <div className="container">
                <div className="row information-card-container">
                    <div className="col-4">
                        <div className="information-card">
                            <div className="card-header">
                                <img src={Money} className="card-icon" alt="Follow-icon"/>
                            </div>
                            <div className="card-body">
                                <h4>Follow</h4>
                                <p>Follow cryptocurrencies that you want to keep tabs on</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="information-card">
                            <div className="card-header">
                                <img src={Graph} className="card-icon" alt="Track-icon"/>
                            </div>
                            <div className="card-body">
                                <h4>Track</h4>
                                <p>Track the prices of cryptocurrencies as they change over time</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="information-card">
                            <div className="card-header">
                                <img src={Talk} className="card-icon" alt="Discuss-icon"/>
                            </div>
                            <div className="card-body">
                                <h4>Discuss</h4>
                                <p>Discuss the latest trends with other cryptocurrency enthusiasts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
