import React from 'react'

import CryptocurrencyList from '../CryptocurrencyList'

// Static example data from https://www.cryptocompare.com/api/data/coinlist/
const exampleData = {
    Data: {
        BTC: {
            Id: "1182",
            Url: "/coins/btc/overview",
            ImageUrl: "/media/19633/btc.png",
            Name: "BTC",
            Symbol: "BTC",
            CoinName: "Bitcoin",
            FullName: "Bitcoin (BTC)",
            Algorithm: "SHA256",
            ProofType: "PoW",
            FullyPremined: "0",
            TotalCoinSupply: "21000000",
            PreMinedValue: "N/A",
            TotalCoinsFreeFloat: "N/A",
            SortOrder: "1",
            Sponsored: false,
        },
        LTC: {
			Id: "3808",
		    Url: "/coins/ltc/overview",
			ImageUrl: "/media/19782/litecoin-logo.png",
		    Name: "LTC",
		    CoinName: "Litecoin",
			FullName: "Litecoin (LTC)",
			Algorithm: "Scrypt",
			ProofType: "PoW",
			SortOrder: "2"
        },
        GEMZ: {
            Id: "5310",
            Url: "/coins/gemz/overview",
            ImageUrl: "/media/19710/frac.png",
            Name: "GEMZ",
            Symbol: "GEMZ",
            CoinName: "Gemz Social",
            FullName: "Gemz Social (GEMZ)",
            Algorithm: "N/A",
            ProofType: "PoW",
            FullyPremined: "0",
            TotalCoinSupply: "90000000",
            PreMinedValue: "N/A",
            TotalCoinsFreeFloat: "N/A",
            SortOrder: "279",
            Sponsored: false
        }		
    }
}

const apiToListItems = (data) => (
    Object.keys(data).map((dataKey) => (
        {
            name: data[dataKey].FullName,
            imageUrl: `https://www.cryptocompare.com${data[dataKey].ImageUrl}`,
            price: "TODO" // Temporary. This is returned from a seperate endpoint. Docs here: https://min-api.cryptocompare.com/
        }
    ))
)

export default class Browse extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Browse Cryptocurrencies</h1>
                <CryptocurrencyList items={apiToListItems(exampleData.Data)}/>
            </div>
        )
    }
}