import React from 'react'
import { LineChart, Line, YAxis, XAxis } from 'recharts'
import './cryptocurrency-graph-lg.css'

// const btc = [
//     {date: "10/24/2017", value: 5509.50},
//     {date: "10/25/2017", value: 5720.00},
//     {date: "10/26/2017", value: 5890.00},
//     {date: "10/27/2017", value: 5759.60},
//     {date: "10/28/2017", value: 5720.60},
//     {date: "10/29/2017", value: 6156.00},
//     {date: "10/30/2017", value: 6115.00}
// ]

const CryptocurrencyGraphLg = ({name, data}) => (
<div>
    <h2>{name}</h2>
    <div className=" chart-container">
        <LineChart width={750} height={350} data={data}>
            <Line type="monotone" dataKey="value" stroke="#457B9D" />
            <XAxis dataKey="date"/>
            <YAxis allowDecimals={false} type="number" domain={['dataMin - 60', 'dataMax + 60']} />
        </LineChart>
    </div>
    {/*<div className="flex-center">
        <button className="btn-graph btn">1d</button>
        <button className="btn btn-graph">5d</button>
        <button className="btn btn-graph">1m</button>
        <button className="btn btn-graph">6m</button>
        <button className="btn btn-graph">1y</button>
        <button className="btn btn-graph">5y</button>
    </div>*/}
</div>
)

export default CryptocurrencyGraphLg;