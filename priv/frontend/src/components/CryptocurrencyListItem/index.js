import React from 'react'

import './cryptocurrency-list-item.css'

const expandItem = () => {
    console.log('TODO: expand name, description, price, of currency')
}

const CryptocurrencyListItem = (props) => (
    <div className="list-item-container" onClick={expandItem}>
        <div className="list-item-header">
            <div className="list-item-header-title-container">
                <img src={props.item.imageUrl} alt={`${props.item.name} logo`} className="list-item-logo"/>
                <h3 className="list-item-title">{props.item.name}</h3>
            </div>
            <p className="list-item-price-title">Price: <span className="green">{props.item.price}</span></p>
        </div>
        <button className="btn btn-emphasis">Follow</button>
    </div>
)

export default CryptocurrencyListItem