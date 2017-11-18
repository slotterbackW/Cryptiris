import React from 'react'
import { LineChart, Line, YAxis, XAxis } from 'recharts'

import './currency-graph-sm.css'

const btc = [
    {date: "10/24/2017", value: 5509.50},
    {date: "10/25/2017", value: 5720.00},
    {date: "10/26/2017", value: 5890.00},
    {date: "10/27/2017", value: 5759.60},
    {date: "10/28/2017", value: 5720.60},
    {date: "10/29/2017", value: 6156.00},
    {date: "10/30/2017", value: 6115.00}
]

const CurrencyGraphSm = props => (
<div>
    <div className="graph-controls">
        <div className="form-group">
            <label className="graph-control-label">Currency</label>
            <select className="graph-control-select-sm">
                <option value="Dollar">Dollar</option>
                <option value="Euro">Euro</option>
                <option value="...">...</option>
            </select> 
        </div>
    </div>
    <div className="chart-container chart-container-sm">
        <LineChart width={350} height={350} data={btc}>
            <Line type="monotone" dataKey="value" stroke="#2ECC71" />
            <XAxis dataKey="date"/>
            <YAxis allowDecimals={false} type="number" domain={['dataMin - 200', 'dataMax + 200']} />
        </LineChart>
        <div className="chart-controls-sm">
            <button className="btn btn-graph">1d</button>
            <button className="btn btn-graph">5d</button>
            <button className="btn btn-graph">1m</button>
            <button className="btn btn-graph">6m</button>
            <button className="btn btn-graph">1y</button>
            <button className="btn btn-graph">5y</button>
        </div>
    </div>
</div>
)

export default CurrencyGraphSm