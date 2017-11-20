import React from 'react'
import { connect } from 'react-redux'
import MainNav from '../MainNav'
import CryptocurrencyGraphLg from '../CryptocurrencyGraphLg'
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
    massageData(prices) {
        console.log("prices: "+prices)
        let result = []
        if(prices) {
         for (let i = 0; i < prices.length; i++) {
            const day = new Date(Date.now() - (86400000 * i))
            result.push({
                date: "" + day.getMonth() + "/" + day.getDate(),
                value: Math.round((1/ prices[i].BTC) * 100) / 100 
            })
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
                    <span>Loading ...</span>
                    {/*<div className="row">
                        <div className="col-7">
                            <CurrencyGraphSm />
                        </div>
                    </div>*/}
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
                    <CryptocurrencyGraphLg name={"BTC"} data={this.massageData(this.props.prices)}/>
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