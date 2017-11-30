import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions/currencyActions'

import CryptocurrencyList from '../CryptocurrencyList'
import MainNav from '../MainNav'

class Browse extends React.Component {

    massageData({ data } = {}) {
        if (data) {
            return Object.keys(data).map((dataKey) => (
                {
                    name: data[dataKey].FullName,
                    imageUrl: `https://www.cryptocompare.com${data[dataKey].ImageUrl}`,
                    price: "TODO" // Temporary. This is returned from a seperate endpoint. Docs here: https://min-api.cryptocompare.com/
                }
            ))
        } else {
            return []
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getCryptocurrencies())
    }

    render() {
        if(this.props.loading) {
            return (
                <div>
                    <MainNav />
                    <div className="container">
                        <h1>Browse Cryptocurrencies</h1>
                        <p>Loading...</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <MainNav />
                    <div className="container">
                        <h1>Browse Cryptocurrencies</h1>
                        <CryptocurrencyList items={this.massageData(this.props.cryptocurrencies)}/>
                    </div>
                </div>
            )
        }
    }
}

export default connect(
    (state) => state.currency
)(Browse)