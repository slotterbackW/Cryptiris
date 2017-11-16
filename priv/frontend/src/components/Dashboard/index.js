import React from 'react'
import { LineChart, Line, YAxis, XAxis } from 'recharts'

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
            <div className="container">
                <h1>Dashboard</h1>
                <LineChart width={400} height={200} data={btc}>
                    <Line type="monotone" dataKey="value" stroke="#f00" />
                    <XAxis dataKey="date"/>
                    <YAxis allowDecimals={false} type="number" domain={['dataMin - 200', 'dataMax + 200']} />
                </LineChart>
            </div>
        )
    }
}