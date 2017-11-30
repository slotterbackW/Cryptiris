import React from 'react'
import { connect } from 'react-redux'
import './cryptocurrency-list-item.css'
import * as actions from '../../actions/currencyActions'

const expandItem = () => {
    console.log('TODO: expand name, description, price, of currency')
}

// <p className="list-item-price-title">Price: <span className="green">{props.item.price}</span></p>
const CryptocurrencyListItem = (props) => (
    <div className="list-item-container" onClick={expandItem}>
        <div className="list-item-header">
            <div className="list-item-header-title-container">
                <img src={props.item.imageUrl} alt={`${props.item.name} logo`} className="list-item-logo"/>
                <h3 className="list-item-title">{props.item.name}</h3>
            </div>
            
        </div>
        <button onClick={() => props.dispatch(actions.follow(props.item.name))} className="btn btn-emphasis">Follow</button>
    </div>
)

export default connect()(CryptocurrencyListItem)