import React, { useState } from 'react';

import './LeftColumn.css';

import PeriodTab from './period_tab/PeriodTab';
import ExpireDate from './expire_date/ExpireDate';
import { Product } from '../schema/Option'



function LeftColumn() {
    const [btcDisplayDays, setBtcDisplayDays] = useState('30');
    const [ethDisplayDays, setEthDisplayDays] = useState('30');
    return (
        <div className='left-column'>
            <img src={process.env.PUBLIC_URL + '/logo.svg'} alt='' className='logo' />
            <div className='title'>Bitcoin(BTC)</div>
            <PeriodTab setDisplayDays={setBtcDisplayDays} />
            <ExpireDate product={Product.Bitcoin} displayDays={btcDisplayDays} />
            <div className='title'>Ethereum(ETH)</div>
            <PeriodTab setDisplayDays={setEthDisplayDays} />
            <ExpireDate product={Product.Ethereum} displayDays={ethDisplayDays} />
        </div>)
}

export default LeftColumn;
