import React from 'react'
import { LineChart, Line, YAxis, XAxis } from 'recharts'
import './cryptocurrency-graph-lg.css'

const btc = [
    {date: "10/24/2017", value: 5509.50},
    {date: "10/25/2017", value: 5720.00},
    {date: "10/26/2017", value: 5890.00},
    {date: "10/27/2017", value: 5759.60},
    {date: "10/28/2017", value: 5720.60},
    {date: "10/29/2017", value: 6156.00},
    {date: "10/30/2017", value: 6115.00}
]

const CryptocurrencyGraphLg = props => (
<div>
    <div className="graph-controls">
        <div className="form-group">
            <label className="graph-control-label">Cryptocurrency:</label>
            <select className="graph-control-select">
            {/* Should pull from list of cryptocurrencies a user follows */}
                <option value="Bitcoin">Bitcoin</option>
                <option value="Litecoin">Litecoin</option>
                <option value="...">...</option>
            </select> 
        </div>
        <div className="form-group">
            <label className="graph-control-label">Exchange:</label>
            {/* A list of all exchanges */}
            <select className="graph-control-select">
                <option value="Bisq">Bisq</option>
                <option value="Binance">Binance</option>
                <option value="...">...</option>
            </select> 
        </div>
    </div>
    <div className="flex-center chart-container">
        <LineChart width={700} height={350} data={btc}>
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
</div>
)

export default CryptocurrencyGraphLg;