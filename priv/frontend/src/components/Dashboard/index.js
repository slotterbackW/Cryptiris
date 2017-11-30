import React from 'react'
import { connect } from 'react-redux'
import MainNav from '../MainNav'
import CryptocurrencyGraphLg from '../CryptocurrencyGraphLg'
import Spinner from '../Spinner'
import * as actions from '../../actions/currencyActions'
//import CurrencyGraphSm from '../CurrencyGraphSm'

import './dashboard.css'

class Dashboard extends React.Component {

    //{date: "10/24/2017", value: 5509.50},
//     {date: "10/25/2017", value: 5720.00},
//     {date: "10/26/2017", value: 5890.00},
//     {date: "10/27/2017", value: 5759.60},
//     {date: "10/28/2017", value: 5720.60},
//     {date: "10/29/2017", value: 6156.00},
//     {date: "10/30/2017", value: 6115.00}
    getNames(prices) {

    }

    massageData(prices) {
        console.log("prices: ", prices)
        let result = []
        if(prices && prices.length > 0) {
            // Build each price object
            for (let x = 0; x < Object.keys(prices[0]).length; x++) {
                let name = Object.keys(prices[0])[x]
                result.push({
                    name,
                    data: []
                })
            }

            for (let i = 0; i < prices.length; i++) {
                for (let j = 0; j < Object.keys(prices[i]).length; j++) {
                    let symbol = Object.keys(prices[i])[j]

                    let price = prices[i][symbol]

                    const day = new Date(Date.now() - (86400000 * i))
                    let date = "" + day.getMonth() + "/" + day.getDate()

                    result.find(priceObj => priceObj.name === symbol ).data.push({date, value: price})
                }
            }   
        }
        return result.reverse()
    }

    componentDidMount() {
        this.props.dispatch(actions.loadHistoricalPrices())
    }

    render() {
        if (this.props.loading) {
            return (
            <div>
                <MainNav />
                <div className="container">
                    <h1>Dashboard</h1>
                    <Spinner />
                </div>
            </div>
            )  
        }
        else {
          return (
            <div>
                <MainNav />
                <div className="container">
                    <h1>Dashboard</h1>
                    {this.massageData(this.props.prices).map(currencyData => 
                    <CryptocurrencyGraphLg name={currencyData.name} data={currencyData.data} />)}
                    {/*<div className="row">
                        <div className="col-7">
                            <CurrencyGraphSm />
                        </div>
                    </div>*/}
                </div>
            </div>
            )  
        }
    
    }
}

export default connect(
    (state) => state.currency
)(Dashboard)