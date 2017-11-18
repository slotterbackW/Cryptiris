import React from 'react'

import CryptocurrencyListItem from '../CryptocurrencyListItem'

const CryptocurrencyList = (props) => (
    <div>
        {props.items.map((item, i) => <CryptocurrencyListItem item={item} key={i}/>)}
    </div>
)

export default CryptocurrencyList