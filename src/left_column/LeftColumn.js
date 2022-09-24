import React, { useState } from 'react';

import './LeftColumn.css';

import PeriodTab from './period_tab/PeriodTab';
import ExpireDate from './expire_date/ExpireDate';


function LeftColumn() {
    const [key, setKey] = useState('home');

    return (
        <div className='left-column'>
            <div className='title'>Bitcoin(BTC)</div>
            <PeriodTab />
            <ExpireDate />
            <div className='title'>Ethereum(ETH)</div>
            <PeriodTab />
            <ExpireDate />
        </div>)
}

export default LeftColumn;
