import React from 'react'
import { LineChart, Line, YAxis, XAxis } from 'recharts'

import MainNav from '../MainNav'

import './dashboard.css'

const btc = [
    {date: "10/24/2017", value: 5509.50},
    {date: "10/25/2017", value: 5720.00},
    {date: "10/26/2017", value: 5890.00},
    {date: "10/27/2017", value: 5759.60},
    {date: "10/28/2017", value: 5720.60},
    {date: "10/29/2017", value: 6156.00},
    {date: "10/30/2017", value: 6115.00}
  ]

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <h1>Dashboard</h1>
                    <div>
                        <div className="form-group">
                            <label>Cryptocurrency</label>
                            <select>
                                <option value="Bitcoin">Bitcoin</option>
                                <option value="Litecoin">Litecoin</option>
                                <option value="...">...</option>
                            </select> 
                        </div>
                        <div className="form-group">
                            <label>Exchange</label>
                            <select>
                                <option value="Bisq">Bisq</option>
                                <option value="Binance">Binance</option>
                                <option value="...">...</option>
                            </select> 
                        </div>
                    </div>
                    <div className="flex-center">
                        <LineChart width={600} height={350} data={btc}>
                            <Line type="monotone" dataKey="value" stroke="#f00" />
                            <XAxis dataKey="date"/>
                            <YAxis allowDecimals={false} type="number" domain={['dataMin - 200', 'dataMax + 200']} />
                        </LineChart>
                    </div>
                    <div className="flex-center">
                        <button className="btn-graph btn">1d</button>
                        <button className="btn btn-graph">5d</button>
                        <button className="btn btn-graph">1m</button>
                        <button className="btn btn-graph">6m</button>
                        <button className="btn btn-graph">1y</button>
                        <button className="btn btn-graph">5y</button>
                    </div>
                    {/* This second chart should be for international exchange prices */}
                    <div>
                        <div className="form-group">
                            <label>Currency</label>
                            <select>
                                <option value="Dollar">Dollar</option>
                                <option value="Euro">Euro</option>
                                <option value="...">...</option>
                            </select> 
                        </div>
                    </div>
                    <div className="flex-center">
                        <LineChart width={300} height={350} data={btc}>
                            <Line type="monotone" dataKey="value" stroke="#f00" />
                            <XAxis dataKey="date"/>
                            <YAxis allowDecimals={false} type="number" domain={['dataMin - 200', 'dataMax + 200']} />
                        </LineChart>
                        <div>
                            <button className="btn btn-graph">1d</button>
                            <button className="btn btn-graph">5d</button>
                            <button className="btn btn-graph">1m</button>
                            <button className="btn btn-graph">6m</button>
                            <button className="btn btn-graph">1y</button>
                            <button className="btn btn-graph">5y</button>
                        </div>
                    </div>

                    <h2>Recommended</h2>
                </div>
            </div>
        )
    }
}