import React from 'react'

import MainNav from '../MainNav'
import CryptocurrencyGraphLg from '../CryptocurrencyGraphLg'
import CurrencyGraphSm from '../CurrencyGraphSm'

import './dashboard.css'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <h1>Dashboard</h1>
                    <CryptocurrencyGraphLg />
                    <div className="row">
                        <div className="col-7">
                            <CurrencyGraphSm />
                        </div>
                        <div className="col-5 flex-center">
                            <h3 className="TODO">TODO</h3>
                        </div>
                    </div>
                    <h2>Recommended</h2>
                </div>
            </div>
        )
    }
}